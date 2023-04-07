import React from 'react';
import { Chart } from '../../components/Chart';
import { BaseLayout } from '../../layout/BaseLayout';

export const EquipmentsGraph = () => {
  return (
    <BaseLayout linkName='Equipment Screen' linkPath='/' label='Equipments Graph'>
      <Chart />
    </BaseLayout>
  );
};
