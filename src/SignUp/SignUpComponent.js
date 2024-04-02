// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { TextField, Button, Container } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   formContainer: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   form: {
//     width: '100%',
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// const SignUpComponent= () => {
//   const classes = useStyles();
//   const [formData, setFormData] = useState({
//     phoneNumber:'',
//     email: '',
//     password: '',
//     username:''
//   });

//   const handleInputChange=(event)=>{
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   }
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Email:', formData.email);
//     console.log('Password:', formData.password);
//     console.log('PhoneNumber',formData.phoneNumber)
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <div className={classes.formContainer}>
//         <form className={classes.form} onSubmit={handleSubmit}>
//         <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="username"
//             name="username"
//             autoComplete="username"
//             autoFocus
//             value={formData.username}
//             onChange={handleInputChange}
//           />
//         <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="phoneNumber"
//             name="phoneNumber"
//             autoComplete="phoneNumber"
//             autoFocus
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//         </form>
//       </div>
//       <div>
//       </div>
//     </Container>
//   );
// };

// export default SignUpComponent;










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
    phoneNumber:'',
    email: '',
    password: '',
    username:'',
  });
  const [formErrors, setFormErrors] = useState({
    phoneNumber:'',
    email:'',
    password:'',
    username:'',
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

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    const newFormErrors = { ...formErrors };

    // Validation for username
    if (!formData.username) {
      newFormErrors.username = 'Username is required';
      valid = false;
    }

    // Validation for phoneNumber
    if (!formData.phoneNumber) {
      newFormErrors.phoneNumber = 'Phone number is required';
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
    }

    if (valid) {
      // If form is valid, submit the form
      console.log('Form is valid. Submitting...');
      console.log('formData', formData);
    } else {
      // If form is invalid, update the error state
      setFormErrors(newFormErrors);
    }
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
            name="username"
            autoComplete="username"
            autoFocus
            value={formData.username}
            onChange={handleInputChange}
            error={!!formErrors.username}
            helperText={formErrors.username}
          />
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


