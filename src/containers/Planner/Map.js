import React, { useEffect } from "react";
import WorldWind from "@nasaworldwind/worldwind";
import { useStore } from "../../store/configureStore";

const WMS =
  "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
function parseXML(response) {
  return response.text().then(stringContainingXMLSource => {
    const parser = new DOMParser();
    return parser.parseFromString(stringContainingXMLSource, "text/xml");
  });
}
const shapeConfigurationCallback = (attributes, record) => {
  const placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
  placemarkAttributes.imageScale = 0.05;
  placemarkAttributes.imageColor = WorldWind.Color.RED;
  placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION,
    0.5,
    WorldWind.OFFSET_FRACTION,
    1.0
  );
  placemarkAttributes.imageSource = `${WorldWind.configuration.baseUrl}images/white-dot.png`;
  const configuration = {};
  configuration.name = attributes.recordNumber;
  configuration.attributes = new WorldWind.PlacemarkAttributes(
    placemarkAttributes
  );
  configuration.attributes.imageScale = 0.04 + attributes.values.FRP * 0.001;
  return configuration;
};

function Map() {
  const { dispatch, state } = useStore();
  const { lat, lon, range, plans } = state.planner;
  const { compass, cordinates, viewControls, layer, threeD } = state.map;
  const { searchWord } = state.app;

  const setLat = newLat => {
    dispatch({
      type: "@planner/setLat",
      lat: newLat
    });
  };
  const setLon = newLon => {
    dispatch({
      type: "@planner/setLon",
      lon: newLon
    });
  };
  const setRange = newRange => {
    dispatch({
      type: "@planner/setRange",
      range: newRange
    });
  };

  WorldWind.configuration.baseUrl = `${process.env.PUBLIC_URL}`;
  WorldWind.BingMapsKey = process.env.REACT_APP_BING_MAPS_KEY;
  const roundGlobe = new WorldWind.Globe(new WorldWind.EarthElevationModel());
  const flatGlobe = new WorldWind.Globe2D();
  flatGlobe.projection = new WorldWind.ProjectionMercator();
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 64;
    const wwd = new WorldWind.WorldWindow("canvas");
    if (threeD) {
      wwd.globe = roundGlobe;
    } else {
      wwd.globe = flatGlobe;
    }
    wwd.navigator.lookAtLocation.latitude = lat;
    wwd.navigator.lookAtLocation.longitude = lon;
    wwd.navigator.range = range;
    const layers = [
      { layer: new WorldWind.BMNGLayer(), enabled: true },
      { layer: new WorldWind.BMNGLandsatLayer(), enabled: false },
      { layer: new WorldWind.BingAerialLayer(null), enabled: false },
      { layer: new WorldWind.BingAerialWithLabelsLayer(null), enabled: true },
      { layer: new WorldWind.BingRoadsLayer(null), enabled: false },
      { layer: new WorldWind.OpenStreetMapImageLayer(null), enabled: false },
      { layer: new WorldWind.AtmosphereLayer(), enabled: true },
      { layer: new WorldWind.CompassLayer(), enabled: compass },
      {
        layer: new WorldWind.CoordinatesDisplayLayer(wwd),
        enabled: cordinates
      },
      { layer: new WorldWind.ViewControlsLayer(wwd), enabled: viewControls }
    ];

    for (let i = 0; i < layers.length; i++) {
      layers[i].layer.enabled = layers[i].enabled;
      wwd.addLayer(layers[i].layer);
    }

    const fireLayer = new WorldWind.RenderableLayer("Fires");
    const fireShapefile = new WorldWind.Shapefile(
      `${WorldWind.configuration.baseUrl}firms/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h.shp`
    );
    fireShapefile.load(null, shapeConfigurationCallback, fireLayer);
    wwd.addLayer(fireLayer);

    const plansLayer = new WorldWind.RenderableLayer("Plans");
    const commonPlacemarkAttributes = new WorldWind.PlacemarkAttributes(null);
    commonPlacemarkAttributes.imageScale = 0.5;
    commonPlacemarkAttributes.imageColor = WorldWind.Color.GREEN;
    commonPlacemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
      WorldWind.OFFSET_FRACTION,
      0.5,
      WorldWind.OFFSET_FRACTION,
      1.0
    );
    plans.forEach(plan => {
      const placemark = new WorldWind.Placemark(
        new WorldWind.Position(plan.lat, plan.lon, 1e2),
        true,
        null
      );
      placemark.label = `${plan.type}\n${plan.time}`;
      placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
      const placemarkAttributes = new WorldWind.PlacemarkAttributes(
        commonPlacemarkAttributes
      );
      placemarkAttributes.imageSource = `${WorldWind.configuration.baseUrl}images/white-dot.png`;
      placemark.attributes = placemarkAttributes;
      const highlightAttributes = new WorldWind.PlacemarkAttributes(
        placemarkAttributes
      );
      highlightAttributes.imageScale = 1.2;
      placemark.highlightAttributes = highlightAttributes;
      plansLayer.addRenderable(placemark);
    });
    wwd.addLayer(plansLayer);

    if (layer.tag !== "_") {
      fetch(WMS)
        .then(parseXML)
        .then(xmlDom => {
          const layerName = layer.tag;
          const wms = new WorldWind.WmsCapabilities(xmlDom);
          const wmsLayerCapabilities = wms.getNamedLayer(layerName);
          const wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(
            wmsLayerCapabilities
          );
          wmsConfig.title = layer.label;
          const wmsLayer = new WorldWind.WmsLayer(wmsConfig);
          wmsLayer.opacity = "0.5";
          wwd.addLayer(wmsLayer);
        });
    }

    const geocoder = new WorldWind.NominatimGeocoder();
    const goToAnimator = new WorldWind.GoToAnimator(wwd);
    if (searchWord) {
      if (searchWord.match(WorldWind.WWUtil.latLonRegex)) {
        const tokens = searchWord.split(",");
        const lat = parseFloat(tokens[0]);
        const lon = parseFloat(tokens[1]);
        goToAnimator.goTo(new WorldWind.Location(lat, lon), () => {
          setLat(lat);
          setLon(lon);
        });
      } else {
        geocoder.lookup(searchWord, (geocoder, result) => {
          if (result.length === 0) return;
          const lat = parseFloat(result[0].lat);
          const lon = parseFloat(result[0].lon);
          goToAnimator.goTo(new WorldWind.Location(lat, lon), () => {
            setLat(lat);
            setLon(lon);
          });
        });
      }
    }

    const handleClick = recognizer => {
      const x = recognizer.clientX;
      const y = recognizer.clientY;
      const pickList = wwd.pick(wwd.canvasCoordinates(x, y));
      if (pickList.objects.length === 1 && pickList.objects[0].isTerrain) {
        const position = pickList.objects[0].position;
        goToAnimator.goTo(
          new WorldWind.Location(position.latitude, position.longitude),
          () => {
            setLat(position.latitude);
            setLon(position.longitude);
          }
        );
      }
    };
    wwd.addEventListener("wheel", e => {
      setRange(wwd.navigator.range);
    });
    new WorldWind.ClickRecognizer(wwd, handleClick);
    new WorldWind.TapRecognizer(wwd, handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWord, plans, layer, threeD, compass, cordinates, viewControls]);

  return <canvas id="canvas"></canvas>;
}

export default Map;
