import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function SelectEnergyComponent(props) {
  return (
    
      <Select onChange={props.handleEnergySelectChange} style={{maxWidth:100}}>
        {props.values.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
   
  );
}

export default SelectEnergyComponent;
