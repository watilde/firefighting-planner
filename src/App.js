import React, { useEffect } from 'react';
import { TextField, AppBar, Toolbar, Typography } from '@material-ui/core';
import WorldWind from '@nasaworldwind/worldwind';

import { fade, makeStyles } from '@material-ui/core/styles';

const BING_KEY = process.env.REACT_APP_BING_MAPS_KEY

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

const shapeConfigurationCallback = function (attributes, record) {
  const placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
  placemarkAttributes.imageScale = 0.05;
  placemarkAttributes.imageColor = WorldWind.Color.RED;
  placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION, 0.5,
    WorldWind.OFFSET_FRACTION, 1.0
  );
  placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/white-dot.png";
  const configuration = {};
  configuration.name = attributes.recordNumber;
  configuration.attributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);
  configuration.attributes.imageScale = 0.04 + (attributes.values.FRP * 0.001);
  return configuration;
};

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

    const fireLayer = new WorldWind.RenderableLayer("Fires");
    const fireShapefile = new WorldWind.Shapefile("/firms/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h.shp");
    fireShapefile.load(null, shapeConfigurationCallback, fireLayer);
    wwd.addLayer(fireLayer);

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
