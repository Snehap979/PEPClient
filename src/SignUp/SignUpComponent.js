import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Container } from '@material-ui/core';
import {signUpUser} from '../actions/UserAction'
import DashboardComponent from '../dashboard/DashboardComponent';
import LoginComponent from '../Login/LoginComponent';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUpComponent= () => {
  const [navigate, setNavigation] = useState("false");
  const classes = useStyles();
  const [formData, setFormData] = useState({
    phoneNumber:'',
    email: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState({
    phoneNumber:'',
    email:'',
    password:''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset the error message for the current field
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    let valid = true;
    const newFormErrors = { ...formErrors };
    // Validation for phoneNumber
    if (!formData.phoneNumber) {
      newFormErrors.phoneNumber = 'Phone number is required';
      valid = false;
    } else if (!(/^\+\d{1,3}\d{10}$/).test(formData.phoneNumber)) {
      newFormErrors.phoneNumber = 'Phone number must start with + followed by country code and contain 10 digits';
      valid = false;
    }

    // Validation for email
    if (!formData.email) {
      newFormErrors.email = 'Email is required';
      valid = false;
    }

    // Validation for password
    
    if (!formData.password) {
      newFormErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 8) {
      newFormErrors.password = 'Password must be at least 8 characters long';
      valid = false;
    } else if (!/[a-z]/.test(formData.password)) {
      newFormErrors.password = 'Password must contain at least one lowercase letter';
      valid = false;
    } else if (!/[A-Z]/.test(formData.password)) {
      newFormErrors.password = 'Password must contain at least one uppercase letter';
      valid = false;
    } else if (!/[\W_]/.test(formData.password)) {
      newFormErrors.password = 'Password must contain at least one special character';
      valid = false;
    } else if (/^\s|\s$/.test(formData.password)) {
      newFormErrors.password = 'Password must not start or end with a space';
      valid = false;
    }
    if (valid) {
      try {
        let response = await signUpUser(formData);
        if (response.status === 200) {
          // navigate to the dashboard
          setNavigation("dashboard");
        }
        else if(response.status === 201)
        setNavigation("login");
      } catch (error) {
        console.error("Error:", error);
        
      }
    } else {
   
      setFormErrors(newFormErrors);
    }
  };
if(navigate=="dashboard")
return(
  <DashboardComponent>

  </DashboardComponent>
)
else if(navigate=="login")
{
  return(
    <LoginComponent>

    </LoginComponent>
  )
 
}
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
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
            autoComplete="phoneNumber"
            autoFocus
            value={formData.phoneNumber}
            onChange={handleInputChange}
            error={!!formErrors.phoneNumber}
            helperText={formErrors.phoneNumber}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleInputChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
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
            Sign Up
          </Button>
        </form>
      </div>
      <div>
      </div>
    </Container>
  );
};

export default SignUpComponent;


