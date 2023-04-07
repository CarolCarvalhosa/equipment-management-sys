import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Body, Header, Root } from './styles';

type BaseLayoutProps = {
    label: string;
    linkPath: string;
    linkName: string;
    children: React.ReactNode;
    barComponents?: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ label, linkPath, linkName, children, barComponents }) => {

  return (
    <Root>
      <Header>
        <Typography variant='h5'>{label}</Typography>
        {barComponents}
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
