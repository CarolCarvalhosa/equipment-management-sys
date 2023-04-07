import React, { useEffect, useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEquipments } from '../../features/useEquipments';

type GraphData = {
    date: string;
    hour: number;
    z: number;
    isOnline: boolean;
}

// const poweron = [
//   { date: '04/03/23', hour: 200, z: 200, isOnline: true },
//   { date: '04/03/23', hour: 100, z: 260, isOnline: true },
//   { date: '04/03/23', hour: 300, z: 400, isOnline: true },
//   { date: '04/03/23', hour: 250, z: 280, isOnline: true },
//   { date: '04/03/23', hour: 400, z: 500, isOnline: true },
//   { date: '04/03/23', hour: 280, z: 200, isOnline: true },
// ];

// const poweroff = [
//   { date: '04/03/23', hour: 220, z: 200, isOnline: false },
//   { date: '04/03/23', hour: 120, z: 260, isOnline: false },
//   { date: '04/03/23', hour: 320, z: 400, isOnline: false },
//   { date: '04/03/23', hour: 270, z: 280, isOnline: false },
//   { date: '05/03/23', hour: 420, z: 500, isOnline: false },
//   { date: '04/03/23', hour: 290, z: 200, isOnline: false },
// ];

function CustomTooltip(content: any) {
  if (content.active) {
    console.log(content);
    return (
      <div style={{ background: 'white', border: 'none'}}>
        <p className="timestamp">{`${content.label} : ${content.payload[0].value}`}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }
    
  return null;
}

export const Graph: React.FC = () => {
  const [poweronEquipment, setPoweronEquipments] = useState<GraphData[]>([]);
  const [poweroffEquipment, setPoweroffEquipments] = useState<GraphData[]>([]);
  const { getAllPoweredOnEquipments, getAllPoweredOffEquipments} = useEquipments();

  const fetchGraphData = async () => {
    const [poweron, poweroff] = await Promise.all([getAllPoweredOnEquipments(), getAllPoweredOffEquipments()]);
    
    if (poweron){
      const powerOnGraphData: GraphData[] = poweron.map(equipment => ({
        date: equipment.timestamp.toString(),
        hour: new Date(equipment.timestamp).getTime(),
        z: 400,
        isOnline: true
      }));

      setPoweronEquipments(powerOnGraphData);
    }

    if (poweroff){
      const powerOffGraphData: GraphData[] = poweroff.map(equipment => ({
        date: equipment.timestamp.toString(),
        hour: new Date(equipment.timestamp).getTime(),
        z: 400,
        isOnline: false
      }));

      setPoweroffEquipments(powerOffGraphData);
    }
  };

  const getDomainRange = () => {
    // const powerOffDates = poweroff.map(x => new Date(x.date).getTime());
    // const powerOnDates = poweroff.map(x => new Date(x.date).getTime());
    if (poweronEquipment[0] && poweroffEquipment[0]) {
      const minDate = Math.min(new Date(poweronEquipment[0].date).getTime(), new Date(poweroffEquipment[0].date).getTime());
      const maxDate = Math.max(new Date(poweronEquipment[poweronEquipment.length - 1].date).getTime(), new Date(poweroffEquipment[poweroffEquipment.length - 1].date).getTime());
      return [new Date(minDate).toDateString(), new Date(maxDate).toDateString()];
    }
  };

  useEffect(() => {
    fetchGraphData();
  }, []);
    
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="category" dataKey="date" name='date' domain={getDomainRange()} allowDuplicatedCategory={false} />
        <YAxis type="number" dataKey="hour" name="hour" unit="h" />
        <Tooltip cursor={{ strokeDasharray: '3 3', enableBackground: 'white' }}  content={<CustomTooltip />} />
        <Scatter name="poweron" data={poweronEquipment} fill="#66BB6A" />
        <Scatter name="poweroff" data={poweroffEquipment} fill="#F44336" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};
