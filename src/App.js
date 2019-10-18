import React, { useEffect } from 'react';
import { TextField, Button, AppBar, Toolbar, Typography, IconButton, } from '@material-ui/core';
import WorldWind from '@nasaworldwind/worldwind';
import MenuIcon from '@material-ui/icons/Menu';

import { fade, makeStyles } from '@material-ui/core/styles';

const BING_KEY = process.env.REACT_APP_BING_MAPS_KEY
const WMS = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  textField: {
    padding: '5px',
    backgroundColor: '#fff'
  },
}));

function parseXML(response) {
  return response.text().then((stringContainingXMLSource) => {
    const parser = new DOMParser();
    return parser.parseFromString(stringContainingXMLSource, "text/xml");
  });
}

function App () {
  const classes = useStyles();
  const roundGlobe = new WorldWind.Globe(new WorldWind.EarthElevationModel());
  const flatGlobe = new WorldWind.Globe2D();
  flatGlobe.projection = new WorldWind.ProjectionMercator();

  useEffect(() => {
    const canvas = document.getElementById('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    WorldWind.BingMapsKey = BING_KEY
    const wwd = new WorldWind.WorldWindow("canvas");
    wwd.globe = flatGlobe;
    const layers = [
        {layer: new WorldWind.BMNGLayer(), enabled: true},
        {layer: new WorldWind.BMNGLandsatLayer(), enabled: false},
        {layer: new WorldWind.BingAerialLayer(null), enabled: false},
        {layer: new WorldWind.BingAerialWithLabelsLayer(null), enabled: true},
        {layer: new WorldWind.BingRoadsLayer(null), enabled: false},
        {layer: new WorldWind.OpenStreetMapImageLayer(null), enabled: false},
        {layer: new WorldWind.AtmosphereLayer(), enabled: true},
        {layer: new WorldWind.CompassLayer(), enabled: true},
        {layer: new WorldWind.CoordinatesDisplayLayer(wwd), enabled: true},
        {layer: new WorldWind.ViewControlsLayer(wwd), enabled: true}
    ];

    for (let i = 0; i < layers.length; i++) {
        layers[i].layer.enabled = layers[i].enabled;
        wwd.addLayer(layers[i].layer);
    }
    /*
    const modelLayer = new WorldWind.RenderableLayer("Duck");
    wwd.addLayer(modelLayer);
    const position = new WorldWind.Position(45, -100, 1000e3)
    const colladaLoader = new WorldWind.ColladaLoader(position)
    colladaLoader.init({dirPath: '/collada_models/duck/'})
    colladaLoader.load('duck.dae', function (scene) {
      scene.scale = 5000
      modelLayer.addRenderable(scene)
    });
    */

    /*
    fetch(WMS)
      .then(parseXML)
      .then((xmlDom) => {
        const layerName = "MOD_LSTD_CLIM_M";
        const wms = new WorldWind.WmsCapabilities(xmlDom);
        const wmsLayerCapabilities = wms.getNamedLayer(layerName);
        const wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        wmsConfig.title = "Average Surface Temp";
        const wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
      })
    */
  });


  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Firefighting planner
            </Typography>
            <div className={classes.search}>
              <TextField
                id="datetime-local"
                type="datetime-local"
                defaultValue="2019-10-01T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <canvas id="canvas"></canvas>
      </div>
    </>
  )
}

export default App;
