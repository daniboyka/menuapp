
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./index";  // Asegúrate de que este path sea correcto
import {thunk} from "redux-thunk";

// Configuración del store con thunk y Redux DevTools
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
