import React from 'react';
import { Chart } from '../../components/Chart';
import { BaseLayout } from '../../layout/BaseLayout';
import { Container } from './styles';

export const EquipmentsGraph = () => {
  return (
    <BaseLayout linkName='Equipment Screen' linkPath='/' label='Equipments Graph'>
      <Container>
        <Chart />
      </Container>
    </BaseLayout>
  );
};
