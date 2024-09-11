export const getMenu = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_MENU_REQUEST' });

    // Realiza la solicitud a la API
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://menuapp2-daniboyka-daniels-projects-7cd0d1ca.vercel.app/api/categories');

    
    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    // Analiza la respuesta JSON
    const data = await response.json();
    
    dispatch({
      type: 'GET_MENU_SUCCESS',
      payload: data,  // Se asume que la estructura de la respuesta es la esperada
    });
  } catch (error) {
    dispatch({
      type: 'GET_MENU_FAILURE',
      payload: error.message,
    });
  }
};
