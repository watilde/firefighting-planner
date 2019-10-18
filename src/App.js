import React, { useState, useEffect } from "react";
import {
  InputBase,
  TextField,
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import WorldWind from "@nasaworldwind/worldwind";

import { fade, makeStyles } from "@material-ui/core/styles";

const BING_KEY = process.env.REACT_APP_BING_MAPS_KEY;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  date: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  inputRoot: {
    color: "inherit"
  },
  textField: {
    padding: "5px",
    backgroundColor: "#fff"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));

const shapeConfigurationCallback = function(attributes, record) {
  const placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
  placemarkAttributes.imageScale = 0.05;
  placemarkAttributes.imageColor = WorldWind.Color.RED;
  placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION,
    0.5,
    WorldWind.OFFSET_FRACTION,
    1.0
  );
  placemarkAttributes.imageSource =
    WorldWind.configuration.baseUrl + "images/white-dot.png";
  const configuration = {};
  configuration.name = attributes.recordNumber;
  configuration.attributes = new WorldWind.PlacemarkAttributes(
    placemarkAttributes
  );
  configuration.attributes.imageScale = 0.04 + attributes.values.FRP * 0.001;
  return configuration;
};

function App() {
  const classes = useStyles();
  WorldWind.BingMapsKey = BING_KEY;
  const roundGlobe = new WorldWind.Globe(new WorldWind.EarthElevationModel());
  const flatGlobe = new WorldWind.Globe2D();
  flatGlobe.projection = new WorldWind.ProjectionMercator();
  const [searchWord, setSearchWord] = useState(null);
  const handleSearchKeyPress = e => {
    if (e.key === "Enter") {
      setSearchWord(e.target.value);
    }
  };

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 64;
    const wwd = new WorldWind.WorldWindow("canvas");
    wwd.globe = flatGlobe;
    wwd.navigator.range = 2e6;
    const layers = [
      { layer: new WorldWind.BMNGLayer(), enabled: true },
      { layer: new WorldWind.BMNGLandsatLayer(), enabled: false },
      { layer: new WorldWind.BingAerialLayer(null), enabled: false },
      { layer: new WorldWind.BingAerialWithLabelsLayer(null), enabled: true },
      { layer: new WorldWind.BingRoadsLayer(null), enabled: false },
      { layer: new WorldWind.OpenStreetMapImageLayer(null), enabled: false },
      { layer: new WorldWind.AtmosphereLayer(), enabled: true },
      { layer: new WorldWind.CompassLayer(), enabled: true },
      { layer: new WorldWind.CoordinatesDisplayLayer(wwd), enabled: true },
      { layer: new WorldWind.ViewControlsLayer(wwd), enabled: true }
    ];

    for (let i = 0; i < layers.length; i++) {
      layers[i].layer.enabled = layers[i].enabled;
      wwd.addLayer(layers[i].layer);
    }

    const fireLayer = new WorldWind.RenderableLayer("Fires");
    const fireShapefile = new WorldWind.Shapefile(
      "/firms/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h.shp"
    );
    fireShapefile.load(null, shapeConfigurationCallback, fireLayer);
    wwd.addLayer(fireLayer);

    const geocoder = new WorldWind.NominatimGeocoder();
    const goToAnimator = new WorldWind.GoToAnimator(wwd);
    if (searchWord) {
      if (searchWord.match(WorldWind.WWUtil.latLonRegex)) {
        const tokens = searchWord.split(",");
        const lat = parseFloat(tokens[0]);
        const lon = parseFloat(tokens[1]);
        goToAnimator.goTo(new WorldWind.Location(lat, lon));
      } else {
        geocoder.lookup(searchWord, (geocoder, result) => {
          if (result.length === 0) return;
          const lat = parseFloat(result[0].lat);
          const lon = parseFloat(result[0].lon);
          goToAnimator.goTo(new WorldWind.Location(lat, lon));
        });
      }
    }
  });

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Firefighting planner
            </Typography>
            <div className={classes.date}>
              <TextField
                id="datetime-local"
                type="datetime-local"
                defaultValue="2019-10-01T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
                onKeyPress={handleSearchKeyPress}
              />
            </div>
          </Toolbar>
        </AppBar>
        <canvas id="canvas"></canvas>
      </div>
    </>
  );
}

export default App;
