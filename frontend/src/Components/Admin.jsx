// import React from 'react'


// export const Admin = () => {
//     return (
//         <>
//         <div>Admin</div>
//         </>
//     )
// }

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { addTeachers } from "../Redux/Teacher/action"

import { Link } from "react-router-dom";



export function Admin() {
    const { teachers } = useSelector((store) => (store.teachers))

    const dispatch = useDispatch()

    const [page, setPage] = useState(1)
    const navigate = useNavigate();

    useEffect(() => {
        getData();

    }, [page])

    const getData = () => {
        axios.get(`https://backenddata123.herokuapp.com/teachers`,{
            params: {
                page:page,
                size:4
            }
        }).then((res) => {
            

            dispatch(addTeachers([...res.data]))
        })
    }

   


    return (
        <>
           

            <h1>Add Teacher</h1>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, marginTop: "20px" }} aria-label="simple table">
                    <TableHead >
                        <TableRow >
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Image</TableCell>
                            <TableCell  align="right">Edit</TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teachers.map((row) => (

                            <TableRow
                                // onClick={() => { handleRequest(row.class_id) }}
                                key={row._id}

                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row"> {row.name}

                                </TableCell>

                                <TableCell align="right">{row.gender}</TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="right"><img src={row.image} alt="" width="120px" /></TableCell>
                                <TableCell align="right"><Link to={`/edit/${row._id}`}><button>Edit</button></Link></TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Button style={{ margin: '20px' }} variant="contained" disabled={page === 1} onClick={() => { setPage(page - 1) }}>Prev</Button>
            <Button style={{ margin: '20px' }} variant="contained" onClick={() => { setPage(page + 1) }}>Next</Button>
        </>
    );
}


