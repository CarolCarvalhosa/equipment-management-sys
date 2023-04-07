import styled from '@emotion/styled';
import { AppBar, Box } from '@mui/material';

const headerSize = 10;

export const Root = styled(Box)`
  background-color: #111111;
`;

export const Header = styled(AppBar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${headerSize}vh;
  padding: 0px 40px;
  background-color: #fff;

  & h5 {
    color: #000;
  }

  & .MuiFormControl-root {
    width: 15vw;
  }
`;

export const Body = styled(Box)`
  display: flex;
  background: #ddd;
  width: 100%;
  height: ${100 - headerSize}vh;
  margin-top: ${headerSize}vh;
`;