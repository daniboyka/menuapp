import {
  GET_MENU,

  
} from "../actions/actions";

const initialState = {
  menu: [],

};



function rootReducer(state = initialState, action) {
  switch (action.type) {

    case GET_MENU:
      return {
        ...state,
        menu: action.payload,
      };

   
   

    default: {
      return state;
    }
  }
}
export default rootReducer;
