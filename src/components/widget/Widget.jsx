import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useState,useEffect } from 'react';
import axios from 'axios';


const Widget = ({ type }) => {
  const [doctorCount,setDoctorCount]=useState();
  const [patientCount,setPatientCount]=useState();
  const [appointmentCount,setAppointmentCount]=useState();
  const [paymentCount,setPaymentCount]=useState();
  useEffect(()=>{
    axios.get('http://localhost:3010/doctor/alldoctors').then(
      res=>
      {
        console.log(res.data)
        setDoctorCount(res.data);
      })
    .catch(err=>console.log(err))
  },[])
   useEffect(()=>{
    axios.get('http://localhost:3010/patient/allPatients').then(
      res=>
      {
        console.log(res.data)
        setPatientCount(res.data);
      })
    .catch(err=>console.log(err))
  },[])

   useEffect(()=>{
    axios.get('http://localhost:3010/appointment/allAppointments').then(
      res=>
      {
        console.log(res.data)
        setAppointmentCount(res.data);
      })
    .catch(err=>console.log(err))
  },[])
  useEffect(()=>{
    axios.get('http://localhost:3010/appointment/allAppointments').then(
      res=>
      {
        console.log(res.data)
        setAppointmentCount(res.data);
      })
    .catch(err=>console.log(err))
  },[])
  useEffect(()=>{
    axios.get('http://localhost:3010/payment/allPayments').then(
      res=>
      {
        console.log(res.data)
        setPaymentCount(res.data);
      })
    .catch(err=>console.log(err))
  },[])
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Doctors",
        isMoney: false,
        link: "See all users",
        count:doctorCount,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Patients",
        isMoney: false,
        link: "View all orders",
        count:patientCount,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Appointments",
        isMoney: true,
        link: "View net earnings",
        count:appointmentCount,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        count:paymentCount,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.count}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
