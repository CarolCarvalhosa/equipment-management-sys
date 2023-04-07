import React, { useEffect, useState } from 'react';
import { BarChart, Bar, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEquipments } from '../../features/useEquipments';

type GraphData = {
  poweron: number;
  poweroff: number;
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
            poweron: equipmentsCount.find(equipmentCount => equipmentCount.tag === 'poweron')?.count ?? 0,
            poweroff: equipmentsCount.find(equipmentCount => equipmentCount.tag === 'poweroff')?.count ?? 0
          }
        ]);
    }
  };

  useEffect(() => {
    fetchGraphData();
  }, []);
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
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
        <Tooltip />
        <Legend />
        <Bar dataKey="poweron" fill="#66BB6A" />
        <Bar dataKey="poweroff" fill="#F44336" />
      </BarChart>
    </ResponsiveContainer>
  );
};
