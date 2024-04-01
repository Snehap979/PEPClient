import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Container } from '@material-ui/core';

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
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username:'',
    email: '',
    password: ''
  });

  const handleInputChange=(event)=>{
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('username',username)
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="Username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={handleInputChange}
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
            value={email}
            onChange={handleInputChange}
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
            value={password}
            onChange={handleInputChange}
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
        </form>
      </div>
      <div>
      </div>
    </Container>
  );
};

export default SignUpComponent;

