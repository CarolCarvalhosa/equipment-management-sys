import { TooltipContainer, TooltipText } from './styles';

export const CustomTooltip: React.FC = (content: any) => {
  if (content.active) {
    return (
      <TooltipContainer>
        <TooltipText variant="body1">{content.payload[0].payload.name}: {content.payload[0].payload.value}</TooltipText>
      </TooltipContainer>
    );
  }
  
  return null;
};