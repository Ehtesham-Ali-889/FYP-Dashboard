import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../../Service/api';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;


const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const navigate = useNavigate();
     const { id } = useParams("");
    console.log(id);
    const [dname,setDName]=useState('');
    const [demail,setDEmail]=useState('');
    const [dexperience,setDExperience]=useState('');

   
    const getdata = async () => {
        const response = await fetch(`http://localhost:3010/doctor/getuser/${id}`)
      const data = await response.json()
      console.log(data);
    //   console.log("Email"+data.email)
      setDName(data.name);
      setDEmail(data.email);
      setDExperience(data.experience);
        // const res = await axios.get(`http://localhost:3010/doctor/getuser/${id}`)

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

        const res2 = await fetch(`http://localhost:3010/doctor/updateuser/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name:dname,email:demail,experience:dexperience
            })
        });

        const data2 = await res2.json();
        console.log(data2);
        navigate("/doctor")
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }
    

    return (
        <Container>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={e => setDName(e.target.value)} name='name' value={dname} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            {/* <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl> */}
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={e => setDEmail(e.target.value)} name='email' value={demail} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Experience</InputLabel>
                <Input onChange={e => setDExperience(e.target.value)} name='experience' value={dexperience} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={(e)=>updateuser(e)} >Submit</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;