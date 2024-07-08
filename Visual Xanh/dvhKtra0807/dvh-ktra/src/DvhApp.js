import './App.css';
import axios from '../api/dvhapi'
import { useState , useEffect } from 'react';
import DvhSinhVienList from './Components/DvhSinhVienList';
import DvhSinhVienAddOrEdit from './Components/DvhSinhVienAddOrEdit';

const DvhApp = () => {
  const [dvhSinhVienList, setDvhSinhVienList] = useState([]);

  // doc du lieu tu api
  const DvhGetAllStudent = async () => {
    const DvhResponse = await axios.get("DvhSinhVien");
    console.log("Api Data:", DvhResponse.data);
    setDvhSinhVienList(DvhResponse.data);
  }

  useEffect(() => {
    DvhGetAllStudent();
    console.log("Day la State Data:", dvhSinhVienList);
  }, []); // Empty dependency array to run the effect only once

  const [dvhSinhVienAddOrEdit, setDvhSinhVienAddOrEdit] = useState(false);
  const DvhInitStudent = {
    DvhHoSV: "Dương",
    DvhTenSV: "Hào",
    DvhPhai: true,
    DvhNgaySinh: 24082004,
    DvhNoiSinh: "Ha Tay",
    DvhMaKH: "CNT1",
    DvhHocBong: "500",
    DvhDiemTrungBinh: "8",
    DvhMaSV: "2210900099"
  }

  const [dvhStudent, setDvhStudent] = useState(DvhInitStudent);
  //Ham xu ly them moi
  const DvhHandleAddNew = () => {
    setDvhSinhVienAddOrEdit(true);
  }

  const DvhHandleClose = (param) => {
    setDvhSinhVienAddOrEdit(param);
  }
  const DvhHandleSubmit = (param) => {
    DvhGetAllStudent();
    setDvhSinhVienAddOrEdit(param);
  }
  const DvhHandleDelete = () => {
    DvhGetAllStudent();
  };
  let DvhElementForm = dvhSinhVienAddOrEdit === true ? 
  <DvhSinhVienAddOrEdit renderStudent={dvhStudent} 
                        onDvhClose={DvhHandleClose}
                        onDvhSubmitForm={DvhHandleSubmit} /> : "";

  return (
    <div className='container border my-3'>
      <h1>Lam viec voi API</h1>
      <hr />
      <DvhSinhVienList renderDvhSinhVienList={dvhSinhVienList} onDvhDelete={DvhHandleDelete} />
      <button className='btn btn-primary' onClick={DvhHandleAddNew}>Them moi</button>
      <hr />
      {DvhElementForm}
    </div>
  )
}

export default DvhApp;