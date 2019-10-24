import React from "react";
import { Switch, Typography, ListItem, List, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useStore } from "../../store/configureStore";

const LAYERS = [
  { label: "No layer", tag: "_" },
  { label: "Land Surface Temperature [Day]", tag: "MOD_LSTD_D" },
  { label: "Land Surface Temperature [Night]", tag: "MOD_LSTN_D" },
  { label: "Cloud Water Content", tag: "MYDAL2_D_CLD_WP" },
  { label: "Leaf Area Index", tag: "MOD15A2_E_LAI" },
  { label: "Nitrogen Dioxide", tag: "AURA_NO2_D" },
  { label: "Population", tag: "SEDAC_POP" },
  { label: "Rainfall", tag: "TRMM_3B43D" },
  { label: "Snow Cover", tag: "MOD10C1_D_SNOW" },
  { label: "Snow Water Equivalent", tag: "SWE_M" },
  { label: "Solar Insolation", tag: "CERES_INSOL_D" },
  { label: "Topography", tag: "SRTM_RAMP2_TOPO" },
  { label: "UV Index", tag: "AURA_UVI_CLIM_M" },
  { label: "Vegetation Index (NDVI)", tag: "MOD_NDVI_16" },
  { label: "Water Vapor", tag: "MYDAL2_D_SKY_WV" }
];

const useStyle = makeStyles(theme => ({
  list: {
    padding: 0
  },
  listHeader: {
    fontWeight: "bold"
  },
  listText: {
    fontSize: "13px"
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

function MapOptions() {
  const classes = useStyle();
  const { state, dispatch } = useStore();
  const { layer, threeD } = state.map;

  const handleChange = target => {
    dispatch({
      type: `@map/toggle${target}`
    });
  };

  const handleLayerChange = newTag => {
    const newLayer = LAYERS.filter(item => {
      return item.tag === newTag;
    }).pop();
    dispatch({
      type: "@map/setLayer",
      layer: newLayer
    });
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listHeader}>
        Map Options for Planner
      </ListItem>
      {LAYERS.map(item => {
        return (
          <ListItem key={item.tag} className={classes.listItem}>
            <Typography className={classes.listText}>{item.label}</Typography>
            <Switch
              checked={layer.tag === item.tag}
              onChange={() => {
                handleLayerChange(item.tag);
              }}
            />
          </ListItem>
        );
      })}
      <Divider />
      <ListItem className={classes.listItem}>
        <Typography className={classes.listText}>3D</Typography>
        <Switch
          checked={threeD}
          onChange={() => {
            handleChange("ThreeD");
          }}
        />
      </ListItem>
    </List>
  );
}

export default MapOptions;
