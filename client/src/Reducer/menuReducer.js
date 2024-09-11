const initialState = {
  categorias: [],
  menuItems: {},
  opciones: [],
  loading: false,
  error: null
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MENU_REQUEST':
      return { ...state, loading: true };
    case 'GET_MENU_SUCCESS':
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case 'GET_MENU_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default menuReducer;