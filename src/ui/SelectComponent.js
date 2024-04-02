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

const SelectComponent = () => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="select">Select </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedOption}
          onChange={handleChange}
        >
          <MenuItem value={'windmill'}>Wind Mill</MenuItem>
          <MenuItem value={'solarpanel'}>Solar Panel</MenuItem>
          <MenuItem value={'turbine'}>Turbine</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectComponent;
