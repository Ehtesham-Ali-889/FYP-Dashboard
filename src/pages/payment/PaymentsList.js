import React from "react";
import { useState, useEffect } from 'react';

import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getPayments, deletePayments } from '../../Service/paymentapi';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
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

const PaymentsList = ({ users,updateUsers }) => {
    // const [users, setUsers] = useState([]);
    const deleteUserData = async (id) => {
        await deletePayments(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getPayments();
        console.log(response.data)
        updateUsers(response.data);
    }
    return (
        <StyledTable className="table">
            <TableHead>
                <THead>
                    <TableCell style={{fontWeight:"bold"}}>Payment Method</TableCell>
                    <TableCell style={{fontWeight:"bold"}}>Amount</TableCell>
                    <TableCell style={{fontWeight:"bold"}}>Actions</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user._id}>
                        <TableCell className="tableCell">{user.type}</TableCell>
                        <TableCell className="tableCell">Rs {user.amount}</TableCell>
                        <TableCell>
                            <Button startIcon={<EditIcon />} variant="outlined" style={{marginRight:10}} component={Link} to={`/editpayment/${user._id}`}>Edit</Button>
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

export default PaymentsList;