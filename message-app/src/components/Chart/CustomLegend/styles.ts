import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const LegendRoot = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-left: 30px;
  height: 10px;
  margin-top: 30px;
  gap: 10px;
`;

export const LegendContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

export const LegendColorBox = styled(Box)`
  height: 15px;
  width: 15px;
`;

export const LegendText = styled('span')`
  margin-left: 10px;
`;