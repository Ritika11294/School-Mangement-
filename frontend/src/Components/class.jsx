import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios'
import { addClasses } from "../Redux/Classes/action";

export const Class = () => {
    const classes = useSelector((store) => (store.classes.classes))
    console.log(classes)

    const { id } = useParams();

    const dispatch = useDispatch();



    const getData = () => {
        console.log(id)

        axios.get(`https://backenddata123.herokuapp.com/classes/${id}`).then((res) => {


            console.log(res.data)
            dispatch(addClasses(res.data))
        })
    }



    useEffect(() => {
        getData()
    }, [])



    return (
        <>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, marginTop: "20px" }} aria-label="simple table">
                    <TableHead >
                        <TableRow >
                            <TableCell>Grades</TableCell>
                            <TableCell align="center">Subject</TableCell>
                            <TableCell align="right">Section</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>


                        <TableRow
                           
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{classes.grades}</TableCell>
                            {/* <TableCell align="right">{row.name}</TableCell> */}
                            <TableCell align="center">{classes.subject}</TableCell>
                            <TableCell align="right">{classes.section}</TableCell>

                        </TableRow>
                    
                    </TableBody>
                </Table>
            </TableContainer>

            {/* <table style={{border:"2px"}}>
            <thead>
                <tr>
                    <th>Grades</th>
                    <th>Subject</th>
                    <th>Section</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                  <td>{classes.grades}</td>
                  <td>{classes.subject.map((e)=> {
                    return ( <div>{e}</div>)
                  })}</td>
                  <td>{classes.section}</td>
              </tr>
            </tbody>
            
        </table> */}
        </>
    )
}