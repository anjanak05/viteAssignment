import React from 'react'
import { Route, Routes } from "react-router-dom";
import EnglishApplicationForm from "./EnglishApplicationForm "
import Profiles from "./Profiles"

const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<EnglishApplicationForm></EnglishApplicationForm>}></Route>
    <Route path="/Profiles" element={<Profiles></Profiles>}></Route>
   
   </Routes>
  )
}

export default AllRoutes