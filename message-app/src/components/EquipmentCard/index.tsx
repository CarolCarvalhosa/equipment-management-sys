import { Tooltip, Typography } from '@mui/material';
import { Message } from '../../models/Message';
import { BodyBox, Card, CardContent, EquipmentStatusCircle, HeaderBox } from './styles';

type EquipmentCardProps = {
  equipment: Message;
}

const MEMORY_FAILURE_TOOLTIP = 'Device memory failure, device must be restarted.';
const BAD_CONFIGURATION_TOOLTIP = 'Bad configuration, you must schedule a technical assistance.';

export const EquipmentCard: React.FC<EquipmentCardProps> = ({ equipment }) => {
  const hasError = equipment.value.includes('errorCode');
  const hasMemoryError = equipment.value.includes('MEMORY_FAILURE');
  const hasConfigurationError = equipment.value.includes('BAD_CONFIGURATION');

  const getTooltipMessage = () => {
    if (hasError) {
      if (hasMemoryError) {
        return MEMORY_FAILURE_TOOLTIP;
      }

      if (hasConfigurationError) {
        return BAD_CONFIGURATION_TOOLTIP;
      }
    }

    return null;
  };

  return (
    <Card hasError={hasError}>
      <Tooltip title={getTooltipMessage()}>
        <CardContent>
          <HeaderBox>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          IMEI: {equipment.IMEI}
            </Typography>
            {!hasError && <EquipmentStatusCircle tag={equipment.tag} />}
          </HeaderBox>

          <BodyBox>
            <Typography variant="h5" component="div">
              {equipment.tag}: {equipment.value === '1' && 'OK'}
            </Typography>

            {hasError && 
            <>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {equipment.value.split(';')[0]}
              </Typography>
              <Typography sx={{ mb: 1.5, fontSize: '13px' }} color="text.secondary">
                {equipment.value.split(';')[1]}
              </Typography>
            </>
            }
          </BodyBox>

          <Typography variant="body2">
            {equipment.timestamp.toString()}
          </Typography>
        </CardContent>
      </Tooltip>
    </Card>
  );
};
