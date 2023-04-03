import React from 'react';
import { Routes as RRDRoutes, Route } from 'react-router-dom';
import { Equipments } from '../pages/Equipments';
import { EquipmentsGraph } from '../pages/EquipmentsGraph';

const Routes: React.FC = () => (
  <RRDRoutes>
    <Route path="/" element={<Equipments />} />
    <Route path="/graph" element={<EquipmentsGraph />} />
  </RRDRoutes>
);

export default Routes;
