import React from 'react';
import { Routes as RRDRoutes, Route } from 'react-router-dom';
import { Equipments } from '../pages/Equipments';

const Routes: React.FC = () => (
  <RRDRoutes>
    <Route path="/" element={<Equipments />} />
  </RRDRoutes>
);

export default Routes;
