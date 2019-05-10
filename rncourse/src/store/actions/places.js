import * as actionTypes from './acionTypes';

export const addPlace = placeName => ({
   type: actionTypes.ADD_PLACE,
   placeName
});

export const deletePlace = () => ({
   type: actionTypes.DELETE_PLACE
});

export const selectPlace = key => ({
   type: actionTypes.selectPlace,
   placeKey: key
});

export const deselectPlace = () => ({
   type: actionTypes.DESELECT_PLACE
});
