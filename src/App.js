import React, { useState, useEffect } from "react";
import {
  InputBase,
  TextField,
  Fab,
  AppBar,
  Toolbar,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
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
  },
  fab: {
    position: "fixed",
    margin: theme.spacing(1),
    bottom: 0,
    right: 0
  },
  formControl: {
    minWidth: 120
  }
}));

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
  let handleWheel;
  WorldWind.BingMapsKey = BING_KEY;
  const roundGlobe = new WorldWind.Globe(new WorldWind.EarthElevationModel());
  const flatGlobe = new WorldWind.Globe2D();
  flatGlobe.projection = new WorldWind.ProjectionMercator();
  const [searchWord, setSearchWord] = useState("");
  const [range, setRange] = useState(2e6);
  const [isMove, setIsMove] = useState(false);
  const [lat, setLat] = useState(36.256535392993314);
  const [lon, setLon] = useState(-119.2002385680952);
  const [time, setTime] = useState("2018-08-01T10:10");
  const [action, setAction] = useState({});
  const [actions, setActions] = useState([
    {
      type: "Prescribed burning",
      description: "Test",
      time: "2018-08-01T10:10",
      lat,
      lon
    }
  ]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleSearchKeyPress = e => {
    if (e.key === "Enter") {
      setSearchWord(e.target.value);
    }
  };

  const handleFabClick = _ => {
    setDialogOpen(true);
    setAction({
      type: "",
      description: "",
      time,
      lat,
      lon
    });
  };

  const handleDialogClose = _ => {
    setDialogOpen(false);
  };

  const handleTime = e => {
    setTime(e.target.value);
  };

  const handleAction = e => {
    const newAction = Object.assign({}, action);
    newAction[e.target.name] = e.target.value;
    setAction(newAction);
  };
  const handleSave = _ => {
    const newActions = actions.concat(action);
    setDialogOpen(false);
    setActions(newActions);
  };

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 64;
    const wwd = new WorldWind.WorldWindow("canvas");
    wwd.globe = flatGlobe;
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

    const actionsLayer = new WorldWind.RenderableLayer("Actions");
    const commonPlacemarkAttributes = new WorldWind.PlacemarkAttributes(null);
    commonPlacemarkAttributes.imageScale = 0.5;
    commonPlacemarkAttributes.imageColor = WorldWind.Color.GREEN;
    commonPlacemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
      WorldWind.OFFSET_FRACTION,
      0.5,
      WorldWind.OFFSET_FRACTION,
      1.0
    );
    actions.forEach(action => {
      const placemark = new WorldWind.Placemark(
        new WorldWind.Position(action.lat, action.lon, 1e2),
        true,
        null
      );
      placemark.label = `${action.type}\n${action.time}`;
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
      actionsLayer.addRenderable(placemark);
    });
    wwd.addLayer(actionsLayer);

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

    const handleClick = function(recognizer) {
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
      clearTimeout(handleWheel);
      handleWheel = setTimeout(() => {
        setRange(wwd.navigator.range);
      }, 1000);
    });
    new WorldWind.ClickRecognizer(wwd, handleClick);
    new WorldWind.TapRecognizer(wwd, handleClick);
  }, [flatGlobe, lat, lon, searchWord, actions, range]);

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
                defaultValue={time}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                onChange={handleTime}
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
                value={searchWord}
              />
            </div>
          </Toolbar>
        </AppBar>
        <canvas id="canvas"></canvas>
      </div>
      <Fab
        color="secondary"
        aria-label="add"
        className={classes.fab}
        onClick={handleFabClick}
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add action</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="type">Action type</InputLabel>
            <Select
              inputProps={{
                name: "type"
              }}
              value={action.type}
              onChange={handleAction}
            >
              <MenuItem value="Spraying the water">Spraying the water</MenuItem>
              <MenuItem value="Prescribed burning">Prescribed burning</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <TextField
            label="Description"
            name="description"
            value={action.description}
            fullWidth
            onChange={handleAction}
          />
          <br />
          <br />
          <TextField
            name="time"
            label="When"
            type="datetime-local"
            value={action.time}
            InputLabelProps={{
              shrink: true
            }}
            onChange={handleAction}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
