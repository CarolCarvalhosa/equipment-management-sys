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
  ${props => props.hasError && 'background-image: linear-gradient(45deg, transparent 20%, #333333 20%, #333333 25%, transparent 25%, transparent 40%, #333333 40%, #333333 45%, transparent 45%, transparent 60%, #333333 60%, #333333 65%, transparent 65%, transparent 80%, #333333 80%, #333333 85%, transparent 85%);'}

  &:hover {
    scale: 1.05;
  }

  &, & p {
    color: #ffffff;
  }
`;

export const CardContent = styled(MUICardContent)`
  height: 20vh;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-direction: column;
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

export const IconsContainer = styled(Box)`
  display: flex;
  justify-content: center;

  & .warn-icon {
    font-size: 23px;
    fill: #da7033;
  }

  & .critical-icon {
    font-size: 23px;
    fill: #da3633;
  }
`;
