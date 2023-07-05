import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Homepage } from './mycomponents/home.js'
import { Navbar } from './mycomponents/navbar'
import { Footer } from './mycomponents/footer'
import { Login } from './mycomponents/login'
import { Course } from './mycomponents/course'
import { Register } from './mycomponents/register'
import { Dashboard } from './mycomponents/dashboard'
import { Profile } from './mycomponents/myprofile'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { MyProvider } from './context';

// import Axios from "axios"
function App() {
  return (
    <>
      <Router>
        {/* <MyProvider> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<><Homepage /> <Footer /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<><Dashboard /> <Footer /></>} />
          <Route path="/course" element={<><Course /> <Footer /></>} />
          <Route path="/profile" element={<><Profile /> <Footer /></>} />
        </Routes>
        {/* </MyProvider> */}
      </Router>
    </>
  );
}
export default App;