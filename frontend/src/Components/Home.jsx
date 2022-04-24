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



export function BasicTable() {
    const { teachers } = useSelector((store) => (store.teachers))

    const dispatch = useDispatch()

    const [page, setPage] = useState(1)
    // const  [gen, setGen] = useState("female")
    const navigate = useNavigate();

    useEffect(() => {
        getData();

    }, [page])

   // console.log(page)

    const getData = () => {
        axios.get(`https://backenddata123.herokuapp.com/teachers`,{
            params: {
                 page:page,
                size:4
             }
            }
        ).then((res) => {
            //console.log(res.data)

            dispatch(addTeachers([...res.data]))
        })
    }

   

    const handleFilter = (e) =>{
        axios.get(`https://backenddata123.herokuapp.com/teachers`).then((res)=>{
            
           console.log(res.data)
           let data = res.data;
           let ans = data.filter((el)=>{
                return el.gender.includes(e.target.value)
           })
           //console.log(ans)
           if(ans){
               dispatch(addTeachers(ans))
           }
           if(e.target.value === ""){
               getData()
           }
        
       })
   }

   const handleChange = (e) =>{
    axios.get(`https://backenddata123.herokuapp.com/teachers`).then((res)=>{
        
       console.log(res.data)
       let data = res.data;
       let ans = data.filter((el)=>{
            return el.name.includes(e.target.value)
       })
       //console.log(ans)
       if(ans){
           dispatch(addTeachers(ans))
       }
       if(e.target.value === ""){
           getData()
       }
    
   })
}

    const handleSort = (sort) => {
        axios.get(`https://backenddata123.herokuapp.com/teachers`).then((res) => {
            let ageSort = res.data;
            //console.log(ageSort)
            if(sort == "asc") {
                const store = ageSort.sort((a, b) => {
                    return a.age - b.age
                })
                dispatch(addTeachers(store))
            }
            else {
                const store = ageSort.sort((a, b) => {
                    return b.age - a.age
                })
                dispatch(addTeachers(store))
            }

        
            
        })
    }

    const handleRequest = (id) => {

        navigate(`/classes/${id}`)

    }

    return (
        <>
            <div style={{ margin: '30px' }}>
            <input className="searchBox" placeholder="Search by Name" onChange={handleChange}  />
                <input className="searchBox" placeholder="Search by Gender" onChange={handleFilter}  /> 

                {/* <Button style={{marginRight:'20px'}} variant="contained" onClick={handleFilter}>Filter by Gender</Button> */}
               <Button variant="contained" onClick={()=>{handleSort("asc")}}>Sort Age by Asc</Button>
               <Button variant="contained" onClick={()=>{handleSort("dsc")}}>Sort Age by Desc</Button>
            </div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, marginTop: "20px" }} aria-label="simple table">
                    <TableHead >
                        <TableRow >
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Image</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teachers.map((row) => (

                            <TableRow
                                onClick={() => { handleRequest(row.class_id) }}
                                key={row._id}

                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row"> <Link to={`/classes/${row._id}`} style={{ textDecoration: "none", color: "black" }} >{row.name}</Link>

                                </TableCell>

                                <TableCell align="right"><Link to={`/classes/${row._id}`} style={{ textDecoration: "none", color: "black" }}>{row.gender}</Link></TableCell>
                                <TableCell align="right"><Link to={`/classes/${row._id}`} style={{ textDecoration: "none", color: "black" }}>{row.age}</Link></TableCell>
                                <TableCell align="right"><Link to={`/classes/${row._id}`} style={{ textDecoration: "none", color: "black" }}> <img src={row.image} alt="" width="120px" /> </Link></TableCell>

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


