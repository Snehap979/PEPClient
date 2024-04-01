import React from 'react';
import EnergyChartComponent from './EnergyChartComponent';
import { Grid,Typography,Card } from '@material-ui/core';

const consumptionData = [
  { time: '00:00', value: 10.5 },
  { time: '01:00', value: 9.8 },
  { time: '02:00', value: 11.2 },
  // Add more data points as needed
];

const generationData = {
  "solar_panel_1": [
    { time: '00:00', value: 3.2 },
    { time: '01:00', value: 4.1 },
    { time: '02:00', value: 5.5 },
    // Add more data points as needed
  ],
  "wind_turbine_1": [
    { time: '00:00', value: 6.5 },
    { time: '01:00', value: 7.2 },
    { time: '02:00', value: 8.0 },
    // Add more data points as needed
  ]
};

const App = () => {
  return (
    <Card style={{width:'65%'}}>
      <EnergyChartComponent data={consumptionData} title="Energy Consumption" />
      {Object.entries(generationData).map(([device, data]) => (
        <EnergyChartComponent key={device} data={data} title={`Generation (${device})`} />
      ))}
    </Card>
  );
};

export default App;
