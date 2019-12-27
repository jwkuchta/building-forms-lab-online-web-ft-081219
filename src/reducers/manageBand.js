export default function manageBand(state = {
  bands: [], }, action) {
    switch(action.type) {
      case 'ADD_BAND': return {bands: state.bands.concat(action.band)}
      // why didn't it work with payload???
      // case 'ADD_BAND': return {bands: state.bands.concat(action.payload.band)}
      // alternatively:
      // case 'ADD_BAND': return { ...state, bands: [...state.bands, action.band] }
      default: return state
    }
};
