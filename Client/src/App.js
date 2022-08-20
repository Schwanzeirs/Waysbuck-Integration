import React, { useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "../src/pages/main";
import Cart from "./customer/cart"
import AddProduct from "./pages/admin/addProduct";
import AddToping from "./pages/admin/addToping";
import IncomeTransaction from "./pages/admin/IncomeTransaction";
import DetailProduct from './customer/detailProduct'
import DataDrink from "./components/DataDummy/DataDrink";
import Login from "./pages/login";
import Home from "./pages/landing";
import Profile from './customer/profile'
import { useContext } from "react";
import { Usercontext } from "./context/user-context";




function App() {
  const [user] = useContext(Usercontext)

  useEffect(() => {
    console.log(user);
  },[user])
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/main' element={<Main/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/add-drink' element={<AddProduct/>}/>
        <Route exact path='/add-toping' element={<AddToping/>}/>
        <Route exact path='/add-toping' element={<AddToping/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/admin' element={<IncomeTransaction/>}/>
        <Route exact path='/detail-drink/:id' element={< DetailProduct data ={DataDrink}/>}/>
     </Routes>
    </>
  );
}

export default App