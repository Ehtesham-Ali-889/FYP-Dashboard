import React, { useRef,useEffect,useState } from 'react';
import emailjs from '@emailjs/browser';
import './form.css'
import { Grid, TextField,FormControl, Button, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
const MySecondForm = () => {
  const [demail,setDEmail]=useState('');
  const { id } = useParams("");
    console.log(id);
    const getdata = async () => {
      const response = await fetch(`http://localhost:3010/patient/getuser/${id}`)
    const data = await response.json()
    console.log(data);
    setDEmail(data.email);
      
  }
  
  useEffect(() => {
      getdata();
  }, []);

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hics8jt', 'template_p0yzcxs', form.current, 'LEEyKVWfdiYlvgQeN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
  const onValueChange = (e) => {
    setDEmail(e.target.value)
    console.log('Updated Email',demail)
}
  return (
    <div style={{marginTop:50,flexBasis:'center',height:'50vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}
    
    >
      <div className="myform">
        <h1 style={{textAlign:'center',margin:10}}>Send Email</h1>
        <form ref={form} onSubmit={sendEmail} style={{display:'flex',alignItems:'center',justifyContent:'center'}}
        
        >
              <Grid container spacing={1} style={{width:'50%'}}
              
              >
                <Grid item xs={12}>
                  <TextField type="email" value={demail} onChange={(e) => onValueChange(e)} name="user_email" variant="outlined" fullWidth required />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid> */}
                <Grid item xs={12}>
                  <TextField label="Message" name="message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",margin:10}}>
                  {/* <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button> */}
                  <Button variant="outlined" color="primary" component={Link} to={`/patient`}>Cancel</Button>
                  <Button type="submit" variant="outlined" color="success">Submit</Button>
                </Grid>
                
              </Grid>
            </form>
            </div>
    </div>
  )
}

export default MySecondForm