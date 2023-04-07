import React, { useEffect, useState } from 'react';
import { BaseLayout } from '../../layout/BaseLayout';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, CardContent, Typography } from '@mui/material';
import { useEquipments } from '../../features/useEquipments';
import { Message } from '../../models/Message';
import { CardsWrapper, Card } from './styles';
import { MessagesFilter } from '../../models/filters/MessagesFilter';

export const Equipments: React.FC = () => {
  const [equipments, setEquipments] = React.useState<Message[]>([]);
  const [messagesFilterSelect, setMessagesFilterSelect] = React.useState('all');

  const { getAllEquipments } = useEquipments();

  const fetchEquipments = async (filterOption: MessagesFilter) => {
    const response = await getAllEquipments(filterOption);
    if (response)
      setEquipments(response);
  };

  const handleChange = async (event: SelectChangeEvent) => {
    const filterOption = event.target.value as MessagesFilter;
    setMessagesFilterSelect(filterOption);
    fetchEquipments(filterOption);
  };

  useEffect(() => {
    fetchEquipments('all');
  }, []);

  return (
    <BaseLayout linkName='Graph Screen' linkPath='/graph' label='Equipments'>
      <FormControl>
        <InputLabel>Equipments</InputLabel>
        <Select
          value={messagesFilterSelect}
          label="Equipments"
          onChange={handleChange}
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'active'}>Active</MenuItem>
          <MenuItem value={'not_reporting'}>Not Reporting</MenuItem>
        </Select>
      </FormControl>
      <CardsWrapper>
        {equipments?.map(equipment => (
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
