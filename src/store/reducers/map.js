export const mapState = {
  compass: false,
  cordinates: false,
  viewControls: false,
  threeD: false,
  BMNG: true,
  BMNGLandsat: false,
  BingAerial: false,
  BingAerialWithLabels: true,
  BingRoads: false,
  OpenStreetMapImage: false,
  Atmosphere: true,
  layer: { label: "Select leyer", tag: "_" }
};

export default (state = mapState, action) => {
  switch (action.type) {
    case "@map/setLayer": {
      return {
        ...state,
        layer: action.layer
      };
    }
    case "@map/toggleThreeD": {
      return {
        ...state,
        threeD: !state.threeD
      };
    }
    case "@map/toggleCompass": {
      return {
        ...state,
        compass: !state.compass
      };
    }
    case "@map/toggleCordinates": {
      return {
        ...state,
        cordinates: !state.cordinates
      };
    }
    case "@map/toggleViewControls": {
      return {
        ...state,
        viewControls: !state.viewControls
      };
    }
    case "@map/toggleBMNG": {
      return {
        ...state,
        BMNG: !state.BMNG
      };
    }
    case "@map/toggleBMNGLandsat": {
      return {
        ...state,
        BMNGLandsat: !state.BMNGLandsat
      };
    }
    case "@map/toggleBingAerial": {
      return {
        ...state,
        BingAerial: !state.BingAerial
      };
    }
    case "@map/toggleBingAerialWithLabels": {
      return {
        ...state,
        BingAerialWithLabels: !state.BingAerialWithLabels
      };
    }
    case "@map/toggleBingRoads": {
      return {
        ...state,
        BingRoads: !state.BingRoads
      };
    }
    case "@map/toggleOpenStreetMapImage": {
      return {
        ...state,
        OpenStreetMapImage: !state.OpenStreetMapImage
      };
    }
    case "@map/toggleAtmosphere": {
      return {
        ...state,
        Atmosphere: !state.Atmosphere
      };
    }
    default: {
      return state;
    }
  }
};
