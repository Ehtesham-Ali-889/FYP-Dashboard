import React from "react";
import "./login.css"
// import TextField from '@mui/material/TextField';
// import { Button } from "@mui/material";
import axios from "axios";


import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// material-ui
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
// import FirebaseSocial from './FirebaseSocial';
// import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
const Login = () => {
  let navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };

  const handleLogin = (credentials) => {
    const url = 'http://localhost:3010/user/mysignin';
    axios
      .post(url, credentials)
      .then((response) => {
        console.log(response)
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        
      });
  };

  return (
    // <div  style={{height:'80vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    //   <div className="login">
    //   <h1 style={{margin:30}}>Login</h1>
    //   <div style={{display:'flex',flexDirection:'column',gap:30}}>
    //     <TextField id="outlined-basic" label="Email" variant="outlined" />
    //     <TextField id="outlined-basic" label="Password" variant="outlined" />
    //   </div>
    //   <Button style={{marginTop:30}} variant="contained" fullWidth>Login</Button>
    //   </div>
      
    
    
    // </div>
    <>
      
            <Formik 
            
                initialValues={{
                    email: 'admin@gmail.com',
                    password: '123admin',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: false });
                        setSubmitting(false);
                        handleLogin(values);
                    } catch (err) {
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}
                    style={{height:'80vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'
                    }}
                    >
                    <div className="login">
                        <Grid item xs={12} style={{padding:10}}>
                            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                                <Typography variant="h5" style={{fontWeight:'bold'}}>Login</Typography>
                                <Typography component={Link} to="/signup" variant="body1" sx={{ textDecoration: 'none',cursor:'pointer' }} color="primary">
                                    Don&apos;t have an account?
                                </Typography>
                            </Stack>
                        </Grid>
                        <div style={{padding:10}}>
                            <InputLabel style={{textAlign:'left'}} htmlFor="email-login">Email Address</InputLabel>
                            
                            <OutlinedInput
                                id="email-login"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="Enter email address"
                                fullWidth
                                error={Boolean(touched.email && errors.email)}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </div>
                        <div style={{padding:10}}>
                        <InputLabel style={{textAlign:'left'}} htmlFor="password-login">Password</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.password && errors.password)}
                                            id="-password-login"
                                            type={showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            name="password"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                        size="large"
                                                    >
                                                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            placeholder="Enter password"
                                        />
                                        {touched.password && errors.password && (
                                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                                {errors.password}
                                            </FormHelperText>
                                        )}
                        </div>
                        <Grid item xs={6} sx={{ mt: -1 }} style={{padding:10}}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checked}
                                                onChange={(event) => setChecked(event.target.checked)}
                                                name="checked"
                                                color="primary"
                                                size="small"
                                            />
                                        }
                                        label={<Typography variant="h6" style={{fontSize:14}}>Keep me sign in</Typography>}
                                    />
                                    <Link style={{fontSize:14}} variant="h6" component={Link} to="" color="text.primary">
                                        Forgot Password?
                                    </Link>
                                </Stack>
                            </Grid>
                        <div style={{padding:10}}>
                        <Button
                                            disableElevation
                                            disabled={isSubmitting}
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                        >
                                            Login
                                        </Button>      
                                       
                        </div>
                    </div>
                    
                        
                    </form>
                )}
            </Formik>
        </>
  )
}

export default Login