import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography,TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { addAppointments } from '../../Service/appointmentapi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const initialValue = {
    namedoctor: '',
    date: '',
    time: '',
    description: ''
}

const Container = styled(FormGroup)`
    width: 40%;
    margin: 5% 0 0 25%;
    padding:20px;
    margin: 5% 0 0 25%;
     /*the alpha value controls the transparency*/
  background: rgba( 255, 255, 255, 0.3 );

/* This controls the blurring effect*/
backdrop-filter: blur( 7.5px );
  -webkit-backdrop-filter: blur( 7.5px );

/*Adding the shadow*/
box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.18 );

/* Adding our borders*/
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  z-index: 4;
    & > div {
        margin-top: 20px;
`;

const AddSingleAppointment = () => {
    const [user, setUser] = useState(initialValue);
    const { namedoctor, date, time,description } = user;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addAppointments(user);
        navigate('/appointments');
    }

    return (
        <Container>
            {'' /* <Typography variant="h4">Add Patient</Typography> */}
            <h1 style={{textAlign:'center'}}>Add Appointment</h1>
            <FormControl>
                <TextField
                    label="Doctor Name"
                    id="outlined-start-adornment"
                    sx={{ m: 1 }}
                    onChange={(e) => onValueChange(e)} name='namedoctor' value={namedoctor}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><AccountCircle color="primary" /></InputAdornment>,
                    }}
                />
            </FormControl>
            {/* <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <TextField variant="outlined" onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl> */}
            {/* <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl> */}
            <FormControl>
                <TextField
                    label="Date"
                    id="outlined-start-adornment"
                    sx={{ m: 1 }}
                    onChange={(e) => onValueChange(e)} name='date' value={date}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><AccountCircle color="primary" /></InputAdornment>,
                    }}
                />
            </FormControl>
            { /* <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl> */}
            <FormControl>
                <TextField
                    label="Time"
                    id="outlined-start-adornment"
                    sx={{ m: 1 }}
                    onChange={(e) => onValueChange(e)} name='time' value={time}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><AccountCircle color="primary" /></InputAdornment>,
                    }}
                />
            </FormControl>
            <FormControl>
                <TextField
                    label="Description"
                    id="outlined-start-adornment"
                    sx={{ m: 1 }}
                    onChange={(e) => onValueChange(e)} name='description' value={description}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><AccountCircle color="primary" /></InputAdornment>,
                    }}
                />
            </FormControl>
            { /* <FormControl>
                <InputLabel htmlFor="my-input">Experience</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='experience' value={experience} id="my-input" />
            </FormControl> */}
            <FormControl style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                <Button variant="outlined" color="primary" component={Link} to={`/appointments`}>Cancel</Button>
                <Button variant="outlined" color="success" onClick={() => addUserDetails()}>Submit</Button>
            </FormControl>
        </Container>
    )
}

export default AddSingleAppointment;