import * as actionTypes from './acionTypes';

export const addPlace = placeName => ({
   type: actionTypes.ADD_PLACE,
   placeName
});

export const deletePlace = (key) => ({
   type: actionTypes.DELETE_PLACE,
   placeKey: key
});
