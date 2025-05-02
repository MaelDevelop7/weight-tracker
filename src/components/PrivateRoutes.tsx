// src/components/PrivateRoutes.tsx

import React, { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

type Props = {
  children: JSX.Element;
};

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
