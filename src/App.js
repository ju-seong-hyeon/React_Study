import React, {Componenet} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Component/Header';
import Main from './Component/Main';
import Product from './Component/Product';
import NotFound from './Component/NotFound';
import Map from './Maps/map';
import json1 from "./Maps/data.json";
import Count from "./Reducer/Count";
import UseEffectTest from "./Hook/UseEffectTest"

function App() {
    const names = [
        ["갓대희", 19],
        ["김대희", 29],
        ["한대희", 39]
    ]
    const names1 = [
        {userName : "Blue", num : 1},
        {userName : "Yellow", num : 2},
        {userName : "Black", num : 3}
    ]
    const nameList = names.map((v) => (<Map name={v[0]} age = {v[1]}/>))
    const nameList1 = names1.map((v) => (<Map name = {v.userName} age = {v.num}/>))
    let nameV = names1.filter(v => v.num <=2);
    nameV = nameV.map((v) => (<Map name = {v.userName} age = {v.num}/>))
  return (
    <div>
        <UseEffectTest/>
    {/*
        <Count/>

        {nameList}
        {nameList1}
        {nameV}
        {json1.DongWon.map(v=>(
            <h3 key = {v.name}> Hello, {v.name}({v.num}) </h3>
        ))}


    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path = "/" element ={<Main/>}></Route>
            <Route path = "/product/:productId" element = {<Product/>}></Route>
            <Route path = "*" element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
    */}

    </div>
  );
}

export default App;
