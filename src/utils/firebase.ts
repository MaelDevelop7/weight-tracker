// src/utils/firebase.ts

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Si tu utilises Firestore
import { getAuth } from 'firebase/auth'; // Si tu veux l'authentification

const firebaseConfig = {
  apiKey: "AIzaSyDyAQRjA_eNH1Rkgg57hrsXRBM-K4_myMQ",
  authDomain: "menu-manager-2025.firebaseapp.com",
  projectId: "menu-manager-2025",
  storageBucket: "menu-manager-2025.appspot.com",
  messagingSenderId: "455909040258",
  appId: "1:455909040258:web:34fb71509b17c869d0d49b"
};

const app = initializeApp(firebaseConfig);

// Exporte ce dont tu as besoin
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };