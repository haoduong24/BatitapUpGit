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
    setdvhListUsers(dvhResponse.data)
  }

  useEffect(()=>{
    dvhGetAllUsers();
    console.log("State Data:",dvhListUsers);
  },[])

  const[dvhAddorEddit, setdvhAddorEddit] = useState(false);
  const dvhInitUser ={
    UserName:"Duong Hao",
    PassWord:"24/08/2004",
    Email: "haoduong2408@gmail.com",
    Phone: "0377004824",
    id: "2210900099"
  }
  const[dvhUser, setdvhUser] = useState(dvhInitUser);
  //ham xu ly nut them moi
  const dvhHandleAddNew =()=>{
    setdvhAddorEddit(true);
  }
  const dvhHandleCLose=(param)=>{
    setdvhAddorEddit(param);
  }
  const dvhHandleSubmit=(param)=>{
    setdvhAddorEddit(param);
    dvhGetAllUsers();
  }
  const dvhHandleDelete=()=>{
    dvhGetAllUsers();
  }
  let dvhElementForm = dvhAddorEddit===true?
  <dvhAddorEddit renderUsers={dvhUser}
  ondvhClose={dvhHandleClose}
  ondvhSubmitForm={dvhHandleSubmit}/>:"";
  return (
    <div className="container border my-3">
      <h1>Lam viec voi Mockapi</h1>
      <hr/>
      <dvhListUsers renderdvhListUsers={dvhListUsers} ondvhDelete={dvhHandleDelete}/>
      <button className='btn btn-primary'name='btndvhThemMoi' onClick={dvhHandleAddNew}>Them moi</button>
      <hr/>
      {dvhElementForm}
    </div>
  );
}

export default dvhApp;
