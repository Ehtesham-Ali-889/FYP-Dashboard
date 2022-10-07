import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography,TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getPatients, editPatien } from '../../Service/patientapi';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

const initialValue = {
    name: '',
    username: '',
    email: '',
    age: ''
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
        margin-top: 20px
`;


const EditSingleAppointments = () => {
    const [user, setUser] = useState(initialValue);
    const { namedoctor, date, time, description } = user;
    const navigate = useNavigate();
     const { id } = useParams("");
    console.log(id);
    const [dname,setDName]=useState('');
    const [mydate,setMyDate]=useState('');
    const [mytime,setMyTime]=useState('');
    { /* const [dexperience,setDExperience]=useState(''); */}

   
    const getdata = async () => {
        const response = await fetch(`http://localhost:3010/appointment/getuser/${id}`)
      const data = await response.json()
      console.log(data);
    //   console.log("Email"+data.email)
      setDName(data.namedoctor);
      setMyDate(data.date);
      setMyTime(data.time);
      {/* setDExperience(data.experience); */}
        // const res = await axios.get(`http://localhost:3010/patient/getuser/${id}`)

        // const data = await res.json();
        // console.log(data);
        

        // if (res.status === 422 || !data) {
        //     console.log("error ");

        // } else {
        //     console.log("get data");

        // }
    }
    
    useEffect(() => {
        getdata();
    }, []);

    // const { id } = useParams();
    
    // let navigate = useNavigate();

    // useEffect(() => {
    //     loadUserDetails();
    // }, []);

    // const loadUserDetails = async() => {
    //     const response = await getUsers(id);
    //     console.log(response)
    //     setUser(response.data);
    //     console.log("USer detail"+response)
    // }
    // debugger;
    // const editUserDetails = async() => {
    //     const response = await editUser(id, user);
    //     console.log("Edit USer detail"+response)
    //     navigate('/doctor');
    // }
    const updateuser = async(e)=>{

        const res2 = await fetch(`http://localhost:3010/appointment/updateuser/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name:dname,date:mydate,time:mytime
            })
        });

        const data2 = await res2.json();
        console.log(data2);
        navigate("/appointments")
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }
    

    return (
        <Container>
            {'' /* <Typography variant="h4">Edit Information</Typography> */}
            <h1 style={{textAlign:'center'}}>Edit Information</h1>
            <FormControl>
                <TextField
                    label="Name"
                    id="outlined-start-adornment"
                    sx={{ m: 1 }}
                    onChange={(e) => onValueChange(e)} name='namedoctor' value={dname}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><AccountCircle color="primary" /></InputAdornment>,
                    }}
                />
            </FormControl>
            { /* <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={e => setDName(e.target.value)} name='name' value={dname} id="my-input" aria-describedby="my-helper-text" />
            </FormControl> */}
            {/* <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl> */}
            <FormControl>
                <TextField
                    label="Email"
                    id="outlined-start-adornment"
                    sx={{ m: 1 }}
                    onChange={e => setMyDate(e.target.value)} name='date' value={mydate}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><AccountCircle color="primary" /></InputAdornment>,
                    }}
                />
            </FormControl>
            <FormControl>
                <TextField
                    label="Age"
                    id="outlined-start-adornment"
                    sx={{ m: 1 }}
                    onChange={e => setMyTime(e.target.value)} name='time' value={mytime}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><AccountCircle color="primary" /></InputAdornment>,
                    }}
                />
            </FormControl>
            { /* <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={e => setDEmail(e.target.value)} name='email' value={demail} id="my-input" aria-describedby="my-helper-text" />
            </FormControl> */}
            {/* <FormControl>
                <TextField
                    label="Experience"
                    id="outlined-start-adornment"
                    sx={{ m: 1 }}
                    onChange={e => setDExperience(e.target.value)} name='experience' value={dexperience}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><AccountCircle color="primary" /></InputAdornment>,
                    }}
                />
            </FormControl> */}
            { /* <FormControl>
                <InputLabel htmlFor="my-input">Experience</InputLabel>
                <Input onChange={e => setDExperience(e.target.value)} name='experience' value={dexperience} id="my-input" aria-describedby="my-helper-text" />
            </FormControl> */}
            <FormControl style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                <Button variant="outlined" color="primary" component={Link} to={`/appointments`}>Cancel</Button>
                <Button variant="outlined" color="success" onClick={(e)=>updateuser(e)} >Submit</Button>
            </FormControl>
        </Container>
    )
}

export default EditSingleAppointments;