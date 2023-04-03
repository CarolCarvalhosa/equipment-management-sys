import { Box, Stack, Switch, Typography } from '@mui/material';
import React from 'react';
import { Body, Header, Root } from './styles';

type BaseLayoutProps = {
    children: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Root>
      <Header>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Inactive Equipments</Typography>
          <Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          <Typography>Active Equipments</Typography>
        </Stack>
      </Header>
      <Body>
        {children}
      </Body>
    </Root>
  );
};
