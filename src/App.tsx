import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from './components/Home';
import History from './components/History';
import Login from './components/Login';
import Signin from './components/Signin';
import PrivateRoute from './components/PrivateRoutes';
import Account from './components/Account';
import './App.css';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1>Poids+ Santé</h1>
        <ul className="nav-links">
          {user && (
            <>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/history">Historique</Link></li>
              <li><Link to="/account">Account</Link></li>
            </>
          )}
          {!user && (
            <>
              <li><Link to="/login">Connexion</Link></li>
              <li><Link to="/signin">Créer un compte</Link></li>
            </>
          )}
        </ul>
      </nav>

      <main className="main-content">
        <Routes>
        <Route path="/" element={<PrivateRoute user={user}><Home /></PrivateRoute>} />
<Route path="/history" element={<PrivateRoute user={user}><History /></PrivateRoute>} />
<Route path="/account" element={<PrivateRoute user={user}><Account /></PrivateRoute>} />

          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

export function NotFound() {
  return <div>Page non trouvée</div>;
}
