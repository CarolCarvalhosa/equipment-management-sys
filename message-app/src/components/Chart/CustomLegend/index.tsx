import { LegendColorBox, LegendContainer, LegendRoot, LegendText } from './styles';

export const CustomLegend: React.FC = () => {
  return (
    <LegendRoot>
      <LegendContainer>
        <LegendColorBox style={{ background: '#238636'}} />
        <LegendText>poweron</LegendText>
      </LegendContainer>
      
      <LegendContainer>
        <LegendColorBox style={{ background: '#da3633'}} />
        <LegendText>poweroff</LegendText>
      </LegendContainer>
    </LegendRoot>
  );
};