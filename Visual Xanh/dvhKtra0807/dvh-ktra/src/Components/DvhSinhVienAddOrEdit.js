
import axios from '../api/Dvhapi'
import React, { useState, useEffect } from 'react';

export default function DvhSinhVienAddOrEdit(onDvhClose, onDvhSubmitForm, renderStudent) {
  console.log(renderStudent);
  const [DvhMaSV, setDvhMaSV] = useState(0);
  const [DvhHoSV, setDvhHoSV] = useState("");
  const [DvhTenSV, setDvhTenSV] = useState("");
  const [DvhPhai, setDvhPhai] = useState("");
  const [DvhNgaySinh, setDvhNgaySinh] = useState("");
  const [DvhNoiSinh, setDvhNoiSinh] = useState("");
  const [DvhMaKH, setDvhMaKH] = useState("");
  const [DvhHocBong, setDvhHocBong] = useState("");
  const [DvhDiemTrungBinh, setDvhDiemTrungBinh] = useState("");

  useEffect(() => {
      if (renderStudent) {
          setDvhMaSV(renderStudent.MaSV);
          setDvhHoSV(renderStudent.HoSV);
          setDvhTenSV(renderStudent.TenSV);
          setDvhPhai(renderStudent.Phai);
          setDvhNgaySinh(renderStudent.NgaySinh);
          setDvhNoiSinh(renderStudent.NgaySinh);
          setDvhMaKH(renderStudent.NgaySinh);
          setDvhHocBong(renderStudent.HocBong);
          setDvhDiemTrungBinh(renderStudent.DiemTrungBinh);
      }
  }, [renderStudent]);
  const DvhHandleClose = () => {
      onDvhClose(false);
  }

  const DvhHandleSubmit = async (event) => {
      event.preventDefault();
      console.log(DvhMaSV, DvhHoSV, DvhTenSV, DvhPhai, DvhNgaySinh, DvhNoiSinh, DvhMaKH, DvhHocBong, DvhDiemTrungBinh);
      let DvhObjectStudent = {
          dvhMaSV: DvhMaSV,
          dvhHoSV: DvhHoSV,
          dvhTenSV: DvhTenSV,
          dvhPhai: DvhPhai,
          dvhNgaySinh: DvhNgaySinh,
          dvhNoiSinh: DvhNoiSinh,
          dvhMaKH: DvhMaKH,
          dvhHocBong: DvhHocBong,
          dvhDiemTrungBinh: DvhDiemTrungBinh,
      }
      const DvhRes = await axios.post("DvhSinhVien", DvhObjectStudent);
      onDvhSubmitForm(false);
  }
  return (
      <div className='border'>
          <div class="input-group mb-3">
              <span class="input-group-text" id="MaSV">MaSV</span>
              <input type="text" class="form-control"
                  name='MaSV' value={DvhMaSV} onChange={(ev) => setDvhMaSV(ev.target.value)}
                  placeholder="MaSV" aria-label="MaSV" aria-describedby="MaSV" />
          </div>

          <div class="input-group mb-3">
              <span class="input-group-text" id="HoSV">HoSV</span>
              <input type="text" class="form-control"
                  name='HoSV' value={DvhHoSV} onChange={(ev) => setDvhHoSV(ev.target.value)}
                  placeholder="HoSV" aria-label="HoSV" aria-describedby="HoSV" />
          </div>

          <div class="input-group mb-3">
              <span class="input-group-text" id="TenSV">TenSV</span>
              <input type="TenSV" class="form-control"
                  name='TenSV' value={setDvhTenSV} onChange={(ev) => setDvhTenSV(ev.target.value)}
                  placeholder="TenSV" aria-label="TenSV" aria-describedby="TenSV" />
          </div>
          <div class="input-group mb-3">
              <span class="input-group-text" id="Phai">Phai</span>
              <input type="Phai" class="form-control"
                  name='Phai' value={DvhPhai} onChange={(ev) => setDvhPhai(ev.target.value)}
                  placeholder="Phai" aria-label="Phai" aria-describedby="Phai" />
          </div>
          <div class="input-group mb-3">
              <span class="input-group-text" id="NoiSinh">NoiSinh</span>
              <input type="number" class="form-control"
                  name='NoiSinh' value={DvhNoiSinh} onChange={(ev) => setDvhNoiSinh(ev.target.value)}
                  placeholder="NoiSinh" aria-label="NoiSinh" aria-describedby="NoiSinh" />
          </div>
          <div class="input-group mb-3">
              <span class="input-group-text" id="MaKH">MaKH</span>
              <input type="number" class="form-control"
                  name='MaKH' value={DvhMaKH} onChange={(ev) => setDvhMaKH(ev.target.value)}
                  placeholder="MaKH" aria-label="MaKH" aria-describedby="MaKH" />
          </div>
          <div class="input-group mb-3">
              <span class="input-group-text" id="HocBong">HocBong</span>
              <input type="number" class="form-control"
                  name='HocBong' value={DvhHocBong} onChange={(ev) => setDvhHocBong(ev.target.value)}
                  placeholder="HocBong" aria-label="HocBong" aria-describedby="HocBong" />
          </div>
          <div class="input-group mb-3">
              <span class="input-group-text" id="DiemTrungBinh">DiemTrungBinh</span>
              <input type="number" class="form-control"
                  name='DiemTrungBinh' value={DvhDiemTrungBinh} onChange={(ev) => setDvhDiemTrungBinh(ev.target.value)}
                  placeholder="DiemTrungBinh" aria-label="DiemTrungBinh" aria-describedby="DiemTrungBinh" />
          </div>
          
          <button className='btn btn-primary' name='btnDvhSave' onClick={(ev) => DvhHandleSubmit(ev)}>Ghi lai</button>
          <button className='btn btn-danger' onClick={DvhHandleClose}>Dong</button>
      </div>
  )
}