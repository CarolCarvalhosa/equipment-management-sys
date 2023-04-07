import React, { useEffect } from 'react';
import { BaseLayout } from '../../layout/BaseLayout';
import { SelectChangeEvent, Typography } from '@mui/material';
import { useEquipments } from '../../features/useEquipments';
import { Message } from '../../models/Message';
import { CardsWrapper } from './styles';
import { MessagesFilter } from '../../models/filters/MessagesFilter';
import { EquipmentCard } from '../../components/EquipmentCard';
import { EquipmentFilterSelect } from '../../components/EquipmentFilterSelect';

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
    <BaseLayout linkName='Graph Screen' linkPath='/graph' label='Equipments' barComponents={<EquipmentFilterSelect handleChange={handleChange} messagesFilterSelect={messagesFilterSelect} />}>
      <CardsWrapper>
        {equipments.length > 0 ? 
          equipments?.map(equipment => (
            <EquipmentCard equipment={equipment} />
          )) : 
          <Typography>No data to display</Typography>
        }
      </CardsWrapper>
    </BaseLayout>
  );
};
