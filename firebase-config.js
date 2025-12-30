// Importamos los módulos de Firebase (usamos la versión CDN para no instalar nada extra)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// ESTOS DATOS SON LOS QUE TE DA FIREBASE AL REGISTRAR LA APP
const firebaseConfig = {
  apiKey: "AIzaSyBIEHROMy7x6WOjAX5LmT71btfBHhLUuBw",
  authDomain: "eduplat-real.firebaseapp.com",
  projectId: "eduplat-real",
  storageBucket: "eduplat-real.firebasestorage.app",
  messagingSenderId: "550518530272",
  appId: "1:550518530272:web:4588a881f252ff3b0af085"
};

// Inicializamos los servicios
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);