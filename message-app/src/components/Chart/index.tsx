import React, { useEffect, useState } from 'react';
import { BarChart, Bar, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { useEquipments } from '../../features/useEquipments';
import { CustomLegend } from './CustomLegend';
import { CustomTooltip } from './CustomTooltip';

type GraphData = {
  name: 'poweron' | 'poweroff';
  value: number;
}

export const Chart: React.FC = () => {
  const [graphData, setGraphData] = useState<GraphData[]>([]);

  const { getPoweredOnAndPowerOffEquipmentsCount } = useEquipments();

  const fetchGraphData = async () => {
    const equipmentsCount = await getPoweredOnAndPowerOffEquipmentsCount();
    
    if (equipmentsCount) {

      setGraphData(
        [
          {
            name: 'poweron',
            value: equipmentsCount.find(equipmentCount => equipmentCount.tag === 'poweron')?.count ?? 0
          },
          {
            name: 'poweroff',
            value: equipmentsCount.find(equipmentCount => equipmentCount.tag === 'poweroff')?.count ?? 0
          }
        ]);
    }
  };

  useEffect(() => {
    fetchGraphData();
  }, []);
  
  return (
    <ResponsiveContainer width="40%" height="70%">
      <BarChart
        data={graphData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Legend content={<CustomLegend />} />
        <Bar dataKey="value">
          {graphData.map((entry, index) => {
            console.log(entry, index);
            return (
              <Cell cursor="pointer" fill={entry.name === 'poweron' ? '#238636' : '#da3633'} key={`cell-${index}`} />
            );})}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
