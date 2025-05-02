// src/components/Login.tsx

import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signInAnonymously, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login: React.FC = () => {
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAnonymousLogin = async () => {
    try {
      await signInAnonymously(auth);
      alert('Connecté anonymement');
    } catch (error) {
      console.error(error);
      alert('Erreur connexion anonyme');
    }
  };

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Connecté avec email');
    } catch (error) {
      console.error(error);
      alert('Erreur email/mot de passe');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert('Connecté avec Google');
    } catch (error) {
      console.error(error);
      alert('Erreur Google');
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleEmailLogin}>Connexion Email</button>
      <button onClick={handleGoogleLogin}>Connexion Google</button>
      <button onClick={handleAnonymousLogin}>Connexion Anonyme</button>
    </div>
  );
};

export default Login;
