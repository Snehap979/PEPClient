import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function SelectTimeComponent(props) {
    console.log("props",props)
    return (
        
          <Select onChange={props.handleTimeSelectChange}>
            {props.values.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
      
      );
}

export default SelectTimeComponent;
