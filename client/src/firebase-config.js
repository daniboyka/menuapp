import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBi4Jm6sqeGcyJOTz-9OhpCxYBd6TYWGAI",
  authDomain: "rotiseria-1d8ac.firebaseapp.com",
  projectId: "rotiseria-1d8ac",
  storageBucket: "rotiseria-1d8ac.appspot.com",
  messagingSenderId: "52237108111",
  appId: "1:52237108111:web:8d7fb61ff82eca1d5b01fa",
  measurementId: "G-SX5KT1YL79"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
