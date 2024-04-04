import React, { useState } from 'react';
import { Grid,Typography } from '@material-ui/core';
import AppBarComponent from '../higherOrderComponent/AppBarComponent';
import Dashboard from './Dashboard'

const DashboardComponent = () => {
  return(

<div>
  <React.Fragment>
<AppBarComponent>
</AppBarComponent>
<Dashboard> 
  </Dashboard>

</React.Fragment>
  </div>
  )
};

export default DashboardComponent;

