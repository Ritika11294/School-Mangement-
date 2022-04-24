import * as React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Edit = () => {

const {id} = useParams();
  const [data,setdata] = React.useState({})


  const update = ()=>{
      axios.patch(`https://backenddata123.herokuapp.com/teachers/${id}`,data).then(function(res){
          alert("Updated ")
      })
  }

  const handleChange = (e)=>{
      const {id,value} = e.target
      console.log(id,value)
    setdata({...data,[id]:value})
    }










    return (
        <>
        <h1>Update</h1>
        <input type="text" id="name" placeholder="Enter Name" onChange={handleChange}/>
        <input type="text" id="age" placeholder="Enter Age" onChange={handleChange}/>
        <input type="text" id="gender" placeholder="Enter Gender" onChange={handleChange}/>
        <button onClick={update}>Update</button>
        </>
    )
}