import React from 'react'
import { Route, Routes } from "react-router-dom";
import EnglishApplicationForm from "./EnglishApplicationForm "
import Profiles from "./Profiles"
import Login from "./Login"


const AllRoutes = () => {
  
  return (
   <Routes>
    <Route path="/" element={<EnglishApplicationForm></EnglishApplicationForm>}></Route>
    <Route path="/EnglishApplicationForm" element={<EnglishApplicationForm></EnglishApplicationForm>}></Route>

    <Route path="/Profiles" element={<Profiles></Profiles>}></Route>
    <Route path="/Login" element={<Login></Login>}></Route>

   
   </Routes>
  )
}

export default AllRoutes