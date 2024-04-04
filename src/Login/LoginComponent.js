import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Container } from "@material-ui/core";
import {checkUserExists,authenticateUser} from '../actions/UserAction'
import DashboardComponent from "../dashboard/DashboardComponent";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "50%%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginComponent = () => {
  const classes = useStyles();
  const [navigate, setNavigation] = useState("false");
  const [showErrorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    phone: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    let valid = true;
    const newFormErrors = { ...formErrors };

    // Validation for phone
    if (!formData.phone) {
      newFormErrors.phone = "Phone is required";
      valid = false;
    }

    // Validation for password
    if (!formData.password) {
      newFormErrors.password = "Password is required";
      valid = false;
    }

    if(valid){
      try
      {
        let response=await authenticateUser(formData)
        if(response.status==200)
        {
          setNavigation("true")
        }
      }
      catch(error)
      {
        setErrorMessage(error.response.data.error)
        
      }
     

    } else {
    
      setFormErrors(newFormErrors);
    }
  };
  if(navigate=="true")
  return(
    <DashboardComponent>

    </DashboardComponent>
    )
  else
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete=""
            autoFocus
            value={formData.phone}
            onChange={handleInputChange}
            error={!!formErrors.phone}
            helperText={formErrors.phone}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleInputChange}
            error={!!formErrors.password}
            helperText={formErrors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Typography color="error" style={{"padding":16}}>
          {showErrorMessage}
          </Typography>
        </form>
      </div>
      <div></div>
    </Container>
  );
};

export default LoginComponent;
