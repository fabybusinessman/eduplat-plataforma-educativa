// auth-check.js
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    if (!user) {
        // Si no hay usuario, redirigir al login inmediatamente
        window.location.href = 'login.html';
    }
});