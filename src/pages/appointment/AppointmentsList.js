import React from "react";
import { useState, useEffect } from 'react';
import './AppointmentList.css'

import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getAppointments, deleteAppointments } from '../../Service/appointmentapi';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
    
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #FFFFFF;
        color: #000000;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AppointmentsList = ({ users,updateUsers }) => {
    // const [users, setUsers] = useState([]);
    const deleteUserData = async (id) => {
        await deleteAppointments(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getAppointments();
        console.log(response.data)
        updateUsers(response.data);
    }
    return (
        <StyledTable className="table custom">
            <TableHead>
                <THead>
                    <TableCell style={{fontWeight:"bold"}}>Doctor</TableCell>
                    <TableCell style={{fontWeight:"bold"}}>Patient</TableCell>
                    <TableCell style={{fontWeight:"bold"}}>Date</TableCell>
                    <TableCell style={{fontWeight:"bold"}}>Time</TableCell>
                    <TableCell style={{fontWeight:"bold"}}>Description</TableCell>
                    <TableCell style={{fontWeight:"bold"}}>Status</TableCell>
                    <TableCell style={{fontWeight:"bold"}}>Actions</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user._id}>
                        <TableCell className="tableCell">{user.namedoctor}</TableCell>
                        <TableCell className="tableCell">{user.patient}</TableCell>
                        <TableCell className="tableCell">{user.date}</TableCell>
                        <TableCell className="tableCell">{user.time}</TableCell>
                        <TableCell className="tableCell">{user.description}</TableCell>
                        <TableCell className="tableCell">
                        <span className={"basic "+(user.completed=='yes'?'Completed':'Pending' )}>
                        {user.completed=='yes'?'Completed':'Pending' }
                        </span>
                        
                        
                        </TableCell>
                        <TableCell>
                            <Button startIcon={<EditIcon />} variant="outlined" style={{marginRight:10}} component={Link} to={`/editappointment/${user._id}`}>Edit</Button>
                            <Button startIcon={<DeleteIcon />} color="error" variant="outlined" onClick={() => deleteUserData(user._id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable> 
        // <div className='crypto_list'>
        //     {coinsData.map((coin, index) => {
        //         return (
        //             <CryptoCard
        //                 key={index}
        //                 image={coin.image}
        //                 name={coin.name}
        //                 price={coin.current_price}
        //             />
        //         );
        //     })}
        // </div>
    );
};

export default AppointmentsList;