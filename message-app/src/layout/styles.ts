import styled from '@emotion/styled';
import { AppBar, Box } from '@mui/material';

const headerSize = 10;

export const Root = styled(Box)`
  background-color: #111111;
`;

export const Header = styled(AppBar)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${headerSize}vh;
  padding: 10px;
  background-color: #222222;
`;

export const Body = styled(Box)`
  display: flex;
  background: #111111;
  width: 100%;
  height: ${100 - headerSize}vh;
  margin-top: ${headerSize}vh;
`;