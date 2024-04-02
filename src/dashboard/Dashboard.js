// import React from 'react';
// import EnergyChartComponent from './EnergyChartComponent';
// import { Grid,Typography,Card } from '@material-ui/core';

// const consumptionData = [
//   { time: '00:00', value: 10.5 },
//   { time: '01:00', value: 9.8 },
//   { time: '02:00', value: 11.2 },
//   // Add more data points as needed
// ];

// const generationData = {
//   "solar_panel_1": [
//     { time: '00:00', value: 3.2 },
//     { time: '01:00', value: 4.1 },
//     { time: '02:00', value: 5.5 },
//     // Add more data points as needed
//   ],
//   "wind_turbine_1": [
//     { time: '00:00', value: 6.5 },
//     { time: '01:00', value: 7.2 },
//     { time: '02:00', value: 8.0 },
//     // Add more data points as needed
//   ]
// };

// const App = () => {
//   return (
//     <Card style={{width:'65%'}}>
//       <EnergyChartComponent data={consumptionData} title="Energy Consumption" />
//       {Object.entries(generationData).map(([device, data]) => (
//         <EnergyChartComponent key={device} data={data} title={`Generation (${device})`} />
//       ))}
//     </Card>
//   );
// };

// export default App;

// import React from "react";
import ConsumptionVsGenerationChart from "./EnergyChartComponent";
// import { Card, Grid, Typography,Paper,Box,CardContent,CardActions,Button} from "@material-ui/core";

const consumptionData = [
  { time: "00:00", value: 10.5 },
  { time: "01:00", value: 9.8 },
  { time: "02:00", value: 11.2 },
  // Add more data points as needed
];

const generationData = [
  { time: "00:00", value: 3.2 },
  { time: "01:00", value: 4.1 },
  { time: "02:00", value: 5.5 },
  // Add more data points as needed
];

// const App = () => {
//   return (
    
//   );
// };

// export default App;


import React from 'react';
import { Grid, Card, CardContent, Typography,CardActions,MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SelectComponent from "../ui/SelectComponent";
const cards = [
  { id: 1, title: 'Card 1', content: 'This is the content of card 1.' },
  { id: 2, title: 'Card 2', content: 'This is the content of card 2.' },
  { id: 3, title: 'Card 3', content: 'This is the content of card 3.' },
];

const ResponsiveCards = () => {
  const theme = useTheme();
  
  return (
<React.Fragment>
<Grid container spacing={4} style={{padding:16}} justifyContent={"space-evenly"}>
      {cards.map((card) => (
        <Grid item key={card.id} xs={12} sm={4} md={4}>
          <Card sx={{ borderRadius: '4px' }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {card.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {card.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
   
    <Grid container justify-content="space-between" direction="row" >
      
    <Grid item xs={12} style={{padding:16}}>
    <Card sx={{minWidth:300}}> 
    <CardContent>
    <Grid item container xs={12} direction="row" alignItems="flex-end" justifyItems={"flex-end"} >
        <Grid item>
        <SelectComponent></SelectComponent>
        </Grid>
        <Grid item>
        <SelectComponent></SelectComponent>
        </Grid>
      </Grid>
    <ConsumptionVsGenerationChart
          consumptionData={consumptionData}
          generationData={generationData}
        />
    </CardContent>
    <CardActions>
      
    </CardActions>
  </Card>
    </Grid>
  </Grid>
</React.Fragment>
   
  );
};

export default ResponsiveCards;
