import * as actionTypes from '../actions/acionTypes';

const initialState = {
   places: []
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

      default:
         return state;
   }
};

export default reducer;
