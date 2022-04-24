// import { Classes } from "../Components/AddClass";
// import { AddTeachers } from "../Components/Teacher"
import { BasicTable } from "../Components/Home";
import ResponsiveAppBar from "../Components/Nav";

import { Routes, Route } from "react-router-dom";
import { Class } from "../Components/class"
import { Login } from "../Components/Login"
import { Admin } from "../Components/Admin";
import { Edit } from "../Components/Edit"



export const Routers = () => {

    return (
        <>
            <ResponsiveAppBar />


            <Routes>
                <Route path="/" element={<BasicTable />} />
                <Route path="/classes/:id" element={<Class />} />
                <Route path="/signup-login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/edit/:id" element={<Edit />} />


            </Routes>
        </>

    )

} 