import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Switch, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Body, Header, Root } from './styles';

type BaseLayoutProps = {
    label: string;
    linkPath: string;
    linkName: string;
    children: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ label, linkPath, linkName, children }) => {
  const [age, setAge] = React.useState('all');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Root>
      <Header>
        <Typography variant='h5'>{label}</Typography>
        <FormControl>
          <InputLabel>Equipments</InputLabel>
          <Select
            value={age}
            label="Equipments"
            onChange={handleChange}
          >
            <MenuItem value={'all'}>All</MenuItem>
            <MenuItem value={'active'}>Active</MenuItem>
            <MenuItem value={'inactive'}>Inactive</MenuItem>
          </Select>
        </FormControl>
        <Link
          to={{ pathname: linkPath }}
        >
          <Button variant='contained'>{linkName}</Button>
        </Link>
      </Header>
      <Body>
        {children}
      </Body>
    </Root>
  );
};
