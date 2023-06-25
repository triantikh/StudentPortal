import React from "react";
import { Routes, Route } from "react-router-dom";
import Student from "./Routes/Student";
import AddStudent from "./Routes/AddStudent";
import EditStudent from "./Routes/EditStudent";
import NotFound from "./Routes/NotFound";
import NavBar from "./components/Navbar";
import Home from "./Routes/Home";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/add" element={<AddStudent/>} />
        <Route exact path="/student" element={<Student/>} />
        <Route exact path="/student/:id" element={<EditStudent/>} />
        <Route exact path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;