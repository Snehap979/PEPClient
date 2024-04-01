import React, { useState } from 'react';
import { Grid,Typography } from '@material-ui/core';
import AppBarComponent from '../higherOrderComponent/AppBarComponent';
import Dashboard from './Dashboard'
const json={
  
    "users": [
      {
        "id": 1,
        "username": "user1",
        "password": "hashed_password1",
        "email": "user1@example.com",
        "registered_at": "2024-03-29T12:00:00Z"
      },
      {
        "id": 2,
        "username": "user2",
        "password": "hashed_password2",
        "email": "user2@example.com",
        "registered_at": "2024-03-29T12:30:00Z"
      }
    ],
    "consumption_data": {
      "user1": {
        "2024-03-29T00:00:00Z": 10.5,
        "2024-03-29T01:00:00Z": 9.8,
        "2024-03-29T02:00:00Z": 11.2,
        // hourly consumption data for user1
      },
      "user2": {
        "2024-03-29T00:00:00Z": 8.2,
        "2024-03-29T01:00:00Z": 7.5,
        "2024-03-29T02:00:00Z": 9.3,
        // hourly consumption data for user2
      }
    },
    "generation_data": {
      "solar_panel_1": {
        "2024-03-29T00:00:00Z": 3.2,
        "2024-03-29T01:00:00Z": 4.1,
        "2024-03-29T02:00:00Z": 5.5,
        // hourly generation data for solar panel 1
      },
      "wind_turbine_1": {
        "2024-03-29T00:00:00Z": 6.5,
        "2024-03-29T01:00:00Z": 7.2,
        "2024-03-29T02:00:00Z": 8.0,
        // hourly generation data for wind turbine 1
      }
    }
  }
  



const DashboardComponent = () => {
  return(
<React.Fragment>
<AppBarComponent>

</AppBarComponent>
<Dashboard>
  </Dashboard>

</React.Fragment>
  )
};

export default DashboardComponent;

