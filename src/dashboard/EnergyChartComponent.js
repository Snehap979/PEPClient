import React from 'react';
import "chart.js/auto";
import { Line } from 'react-chartjs-2';
import { Card } from '@material-ui/core';

const ConsumptionVsGenerationChart = ({ data, title }) => {
  console.log("data,title")
  const chartData = {
    labels: data.map(entry => entry.time),
    datasets: [
      {
        label: title,
        data: data.map(entry => entry.value),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
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
          text: 'Value'
        }
      }
    }
  };

  return (
    <div>
       
        <h2>{title}</h2>
      <Line data={chartData} options={options} />
      
    </div>
  );
};

export default ConsumptionVsGenerationChart;
