import React from 'react'
import axios from '../api/Dvhapi'

export default function DvhSinhVienList({ renderDvhSinhVienList, onDvhDelete  }) {
  console.log("DvhSinhVienList:", renderDvhSinhVienList);


  // Check if renderDvhListUsers is an array
  if (!Array.isArray(renderDvhSinhVienList)) {
      return <div>No data available</div>;
  }
  
  const DvhHandleDelete = async (param) => {
      if(window.confirm("Ban co muon xoa khong?")){
          const DvhRes = axios.delete("DvhSinhVien/"+param.MaSV);
      }
      onDvhDelete();
  }
  // Render the list of users
  let DvhElementStudent = renderDvhSinhVienList.map((DvhSinhVien, index) => {
      return (
          <>
              <tr key={index}>
                  <td>{DvhSinhVien.DvhMaSV}</td>
                  <td>{DvhSinhVien.DvhHoSV}</td>
                  <td>{DvhSinhVien.DvhTenSV}</td>
                  <td>{DvhSinhVien.DvhPhai}</td>
                  <td>{DvhSinhVien.DvhNgaySinh}</td>
                  <td>{DvhSinhVien.DvhNoiSinh}</td>
                  <td>{DvhSinhVien.DvhMaKH}</td>
                  <td>{DvhSinhVien.DvhHocBong}</td>
                  <td>{DvhSinhVien.DvhDiemTrungBinh}</td>
                  <td>
                      <button className='btn btn-success'>Edit</button>
                      <button className='btn btn-danger' onClick={DvhHandleDelete}>Remove</button>
                  </td>
              </tr>
          </>
      )
  })

  

  return (
      <div className='row'>
          <div className='col-md-12'>
              <table className='table table-bordered'>
                  <thead>
                      <th>MaSV</th>
                      <th>HoSV</th>
                      <th>TenSV</th>
                      <th>DvhPhai</th>
                      <th>NgaySinh</th>
                      <th>NoiSinh</th>
                      <th>MaKH</th>
                      <th>HocBong</th>
                      <th>DiemTrungBinh</th>
                      <th>Chuc Nang</th>
                  </thead>
                  <tbody>
                      {DvhElementStudent}
                  </tbody>
              </table>
          </div>
      </div>
  )
}