import styled from '@emotion/styled';
import { Box, Card as MUICard } from '@mui/material';

export const CardsWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  padding: 30px;
`;

export const Card = styled(MUICard)`
  height: 30vh;
  width: 20vw;
`;