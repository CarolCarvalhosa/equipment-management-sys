import { Button, Typography } from '@mui/material';
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

  return (
    <Root>
      <Header>
        <Typography variant='h5'>{label}</Typography>
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
