import styled from '@emotion/styled';
import { Box, Card as MUICard } from '@mui/material';

export const CardsWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
  padding: 30px;
`;

export const Card = styled(MUICard)`
  height: 30vh;
  width: 20vw;
  border-radius: 20px;
  transition: scale 0.5s;
  background: #222222;

  &:hover {
    scale: 1.05;
  }

  &, & p {
    color: #ffffff;
  }
`;