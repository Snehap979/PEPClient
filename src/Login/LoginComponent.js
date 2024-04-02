// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { TextField, Button, Container } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   formContainer: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   form: {
//     width: "75%",
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// const LoginComponent = () => {
//   const classes = useStyles();
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("formData", formData);
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <div className={classes.formContainer}>
//         <form className={classes.form} onSubmit={handleSubmit}>
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
//       <div></div>
//     </Container>
//   );
// };

// export default LoginComponent;


import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Container } from "@material-ui/core";
import {checkUserExists} from '../actions/UserAction'
// import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "75%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginComponent = () => {
  const classes = useStyles();
  // const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Resetting the error message for the current field
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Validate the form before submission
    let valid = true;
    const newFormErrors = { ...formErrors };

    // Validation for email
    if (!formData.email) {
      newFormErrors.email = "Email is required";
      valid = false;
    }

    // Validation for password
    if (!formData.password) {
      newFormErrors.password = "Password is required";
      valid = false;
    }

    if (valid) {
      console.log("Form is valid. Submitting...");
      console.log("formData", formData);
      let response=await checkUserExists(formData)
      if(response.status===200)
      {
        
      }
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
      <div></div>
    </Container>
  );
};

export default LoginComponent;
