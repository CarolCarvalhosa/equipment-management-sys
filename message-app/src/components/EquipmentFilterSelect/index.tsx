import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FormControlContainer } from './styles';

type EquipmentFilterSelectProps = {
    messagesFilterSelect: string;
    handleChange: (event: SelectChangeEvent) => Promise<void>;
}

export const EquipmentFilterSelect: React.FC<EquipmentFilterSelectProps> = ({ messagesFilterSelect, handleChange }) => {
  return (
    <FormControlContainer>
      <InputLabel>Equipments</InputLabel>
      <Select
        value={messagesFilterSelect}
        label='Equipments'
        onChange={handleChange}
      >
        <MenuItem value={'all'}>All</MenuItem>
        <MenuItem value={'active'}>Active</MenuItem>
        <MenuItem value={'not_reporting'}>Not Reporting</MenuItem>
      </Select>
    </FormControlContainer>
  );
};
