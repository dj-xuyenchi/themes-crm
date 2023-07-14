import React from 'react';
import propTypes from 'prop-types';
import { Route, Navigate, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ Component, path }) => {
  
  const isLoggedIn = useSelector(state => state.auth.login);
  
  return isLoggedIn ? <Routes> <Route element={<Component />} path={path} /> </Routes> : ''
    
};

ProtectedRoute.propTypes = {
  Component: propTypes.object.isRequired,
  path: propTypes.string.isRequired,
};

export default ProtectedRoute;
