import styled from '@emotion/styled';
import { Box, Card as MUICard, CardContent as MUICardContent } from '@mui/material';
import { MessageTag } from '../../models/Message';

type EquipmentStatusCircleStyles = {
  tag: MessageTag;
}

type CardStyles = {
  hasError: boolean;
}

const getTagColor = (tag: MessageTag) => {
  if(tag === 'poweron')
    return '#238636';
  else if (tag === 'poweroff') 
    return '#da3633';
  else
    return '#da7033';
};

export const Card = styled(MUICard)<CardStyles>`
  height: fit-content;
  width: 20vw;
  border-radius: 20px;
  transition: scale 0.5s;
  background: #222222;
  padding: 8px;
  ${props => props.hasError && 'background-image: linear-gradient(45deg, transparent 20%, #da3633 20%, #da3633 25%, transparent 25%, transparent 40%, #da3633 40%, #da3633 45%, transparent 45%, transparent 60%, #da3633 60%, #da3633 65%, transparent 65%, transparent 80%, #da3633 80%, #da3633 85%, transparent 85%);'}

  &:hover {
    scale: 1.05;
  }

  &, & p {
    color: #ffffff;
  }
`;

export const CardContent = styled(MUICardContent)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EquipmentStatusCircle = styled(Box)<EquipmentStatusCircleStyles>`
  height: 20px;
  width: 20px;
  background: ${(props) => getTagColor(props.tag)};
  border-radius: 50%;
`;

export const HeaderBox = styled(Box)`
  display: flex;
  justify-content: space-between
`;

export const BodyBox = styled(Box)`
  display: flex;
  flex-direction: column;

`;
