import axios from "axios";

import {
  GET_MENU,
 
} from "../actions/actions";

const url ="http://localhost:3001";// variable con la direccion de la BD 

export function getDogs() {
  return async function (dispatch) {
    // Le pasamos la ruta del back para que me traiga todos los MENU.

      var json = await axios.get(`${url}/dogs`);

    return dispatch({
      type: GET_MENU,
      payload: json.data,
    });
  };
}
