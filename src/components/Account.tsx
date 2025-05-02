// src/components/pages/Account.tsx

import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const Account: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isAnonymous, setIsAnonymous] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
        setIsAnonymous(user.isAnonymous);
      } else {
        setUserEmail(null);
        setIsAnonymous(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      alert('Déconnexion réussie');
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Mon compte</h2>
      <p>
        {userEmail
          ? `Connecté avec l’adresse : ${userEmail}`
          : isAnonymous
          ? 'Connecté anonymement'
          : 'Non connecté'}
      </p>
      <button onClick={handleLogout} style={{ marginTop: '1rem' }}>
        Se déconnecter
      </button>
    </div>
  );
};

export default Account;
