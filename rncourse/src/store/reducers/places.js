import * as actionTypes from '../actions/acionTypes';

const initialState = {
   places: [],
   selectedPlace: null
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.ADD_PLACE:
         return {
            ...state,
            places: state.places.concat({
               key: '' + Math.random(),
               name: action.placeName,
               image: {
                  uri:
                     'https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg'
               }
            })
         };

      case actionTypes.DELETE_PLACE:
         return {
            ...state,
            places: state.places.filter(
               place => place.key !== state.selectedPlace.key
            ),
            selectedPlace: null
         };

      case actionTypes.SELECT_PLACE:
         return {
            ...state,
            selectedPlace: state.places.find(
               place => place.key === action.placeKey
            )
         };

      case actionTypes.DESELECT_PLACE:
         return {
            ...state,
            selectedPlace: null
         };

      default:
         return state;
   }
};

export default reducer;
