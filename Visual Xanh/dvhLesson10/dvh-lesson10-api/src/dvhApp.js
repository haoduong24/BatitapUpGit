import logo from './logo.svg';
import './App.css';
import axios from './api/dvhapi'
import { useEffect, useState } from 'react';
function dvhApp() {
  const [dvhListUsers,setdvhListUsers]= useState([]);
  //Doc du lieu tu api
  const dvhGetAllUsers= async ()=>{
    const dvhResponse = await axios.get("dvhUsers");
    console.log("Api Data:",dvhResponse.data);
  }

  useEffect(()=>{
    dvhGetAllUsers();
    console.log("State Data:",dvhListUsers);
  },[])

  return (
    <div className="container border my-3">
      <h1>Lam viec voi Mockapi</h1>
      <hr/>
      <dvhListUsers renderdvhListUsers={dvhListUsers}/>
    </div>
  );
}

export default dvhApp;
