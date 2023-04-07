import React from 'react';
import {Graph} from '../../components/Graph';
import { BaseLayout } from '../../layout/BaseLayout';

export const EquipmentsGraph = () => {
  return (
    <BaseLayout linkName='Equipment Screen' linkPath='/' label='Equipments Graph'>
      <Graph />
    </BaseLayout>
  );
};
