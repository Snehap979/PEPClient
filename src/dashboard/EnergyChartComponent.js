// import React from 'react';
import "chart.js/auto";
// import { Line } from 'react-chartjs-2';
import { Card } from '@material-ui/core';

// const EnergyChart = ({ data, title }) => {
//   const chartData = {
//     labels: data.map(entry => entry.time),
//     datasets: [
//       {
//         label: title,
//         data: data.map(entry => entry.value),
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1
//       }
//     ]
//   };

//   const options = {
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Time'
//         }
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Value'
//         }
//       }
//     }
//   };

//   return (
//     <div>
       
//         <h2>{title}</h2>
//       <Line data={chartData} options={options} />
      
//     </div>
//   );
// };


import React from 'react';
import { Line } from 'react-chartjs-2';

const ConsumptionVsGenerationChart = ({ consumptionData, generationData }) => {
  const chartData = {
    labels: consumptionData.map(entry => entry.time),
    datasets: [
      {
        label: 'Consumption',
        data: consumptionData.map(entry => entry.value),
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      },
      {
        label: 'Generation',
        data: generationData.map(entry => entry.value),
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1
      }
    ]
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Energy (kWh)'
        }
      }
    }
  };

  return (
    <div>
      <h2>Consumption vs. Generation Trends</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ConsumptionVsGenerationChart;
