import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectComponent = (props) => {
  console.log("props",props)
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="select">{props.name}</InputLabel>
        <Select
          labelId={props.name}
          id="energy"
          defaultValue={props.values[0]}
          onChange={handleChange}
        >
          {props.values.map((item)=>{
            return(
              <MenuItem>{item}</MenuItem>
            )
             
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectComponent;
