import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./login.css"
// material-ui
import {
    Box,
    Button,
    Divider,
    FormControl,
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

// import AnimateButton from 'components/@extended/AnimateButton';
// import { strengthColor, strengthIndicator } from 'utils/password-strength';
import { strengthColor, strengthIndicator } from '../../utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - REGISTER ||============================ //

const Signup = () => {
    let navigate = useNavigate();
    const [level, setLevel] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('');
    }, []);

    const handleSignUp = (credentials) => {
        const url = 'http://localhost:3010/user/mysignup';
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
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    company: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().max(255).required('First Name is required'),
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: false });
                        setSubmitting(false);
                        handleSignUp(values);
                    } catch (err) {
                        console.error(err);
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
                        {/* <div>
                            <h1 style={{margin:30}}>SignUp</h1>
                        </div> */}
                        <Grid item xs={12} style={{padding:10}}>
                            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                                <Typography variant="h5" style={{fontWeight:'bold'}}>SignUp</Typography>
                                <Typography variant="body1" color="primary" component={Link} to='/login'  sx={{ textDecoration: 'none',cursor:'pointer' }} >
                                    Already have an account?
                                </Typography>
                            </Stack>
                        </Grid>
                        <div style={{padding:10}}>

                                <InputLabel style={{textAlign:'left'}} htmlFor="name-signup">Name*</InputLabel>
                                <OutlinedInput
                                    id="name-login"
                                    type="name"
                                    value={values.name}
                                    name="name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="John"
                                    fullWidth
                                    error={Boolean(touched.name && errors.name)}
                                />
                                {touched.name && errors.name && (
                                    <FormHelperText error id="helper-text-name-signup">
                                        {errors.name}
                                    </FormHelperText>
                                )}
                            </div>
                            
                            <div style={{padding:10}}>
                           <InputLabel style={{textAlign:'left'}} htmlFor="email-signup">Email Address*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                        id="email-login"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="demo@company.com"
                                        inputProps={{}}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="helper-text-email-signup">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                    </div>
                    <div style={{padding:10}}>
                    <InputLabel style={{textAlign:'left'}} htmlFor="password-signup">Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.password && errors.password)}
                                        id="password-signup"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            changePassword(e.target.value);
                                        }}
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
                                        placeholder="******"
                                        inputProps={{}}
                                    />
                                    {touched.password && errors.password && (
                                        <FormHelperText error id="helper-text-password-signup">
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                        </div>
                        <div>
                        <FormControl fullWidth style={{padding:10}} >
                                    <Typography style={{textAlign:'left',fontSize:12}}>Password Strength:</Typography>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" fontSize="0.75rem">
                                                {level?.label}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                        </div>
                        
                        {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )}
                            <Grid item xs={12} style={{padding:10}}>
                                {/* <AnimateButton> */}
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Create Account
                                    </Button>
                                {/* </AnimateButton> */}
                            </Grid>
                    </div>
                    
                    
                    </form>
                )}
            </Formik>
        </>
    );
};

export default Signup;
