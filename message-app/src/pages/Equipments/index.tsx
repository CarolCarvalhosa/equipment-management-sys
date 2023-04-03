import React, { useEffect, useState } from 'react';
import { BaseLayout } from '../../layout/BaseLayout';
import { CardContent, Typography } from '@mui/material';
import { useEquipments } from '../../features/useEquipments';
import { Message } from '../../models/Message';
import { CardsWrapper, Card } from './styles';

export const Equipments: React.FC = () => {
  const [allEquipments, setAllEquipments] = useState<Message[]>();

  const { getAllEquipmentMessages } = useEquipments();

  const fetchEquipments = async () => {
    const response = await getAllEquipmentMessages();
    if (response) {
      setAllEquipments(response);
    }
  };

  useEffect(() => {
    fetchEquipments();
  });

  return (
    <BaseLayout linkName='Graph Screen' linkPath='/graph' label='Equipments'>
      <CardsWrapper>
        {allEquipments?.map(equipment => (
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                IMEI: {equipment.IMEI}
              </Typography>
              <Typography variant="h5" component="div">
                {equipment.tag}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {equipment.value}
              </Typography>
              <Typography variant="body2">
                {equipment.timestamp.toString()}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </CardsWrapper>
    </BaseLayout>
  );
};
