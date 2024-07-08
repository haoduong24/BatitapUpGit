import axios from '../api/dvhapi'
import React, { useEffect, useState } from "react"
export default function dvhAddorEddit(ondvhClose, ondvhSubmitForm, renderUser){
    console.log(renderUser);
    const [dvhid, setdvhid] = useState("");
    const [dvhUserName, setdvhUserName] = useState("");
    const [dvhPassword, setdvhPassword] = useState("");
    const [dvhEmail, setdvhEmail] = useState("");
    const [dvhPhone, setdvhPhone] = useState("");

useEffect(()=>{
    setdvhid(renderUser.id)
    setdvhUserName(renderUser.dvhUserName)
    setdvhPassword(renderUser.dvhPassword)
    setdvhEmail(renderUser.Email)
    setdvhPhone(renderUser.Phone)
},[renderUser])

    const dvhHandleCLose=()=>{
        ondvhClose(false);
    }

    const dvhHandleSubmit= async (event)=>{
        event.preventDefault();
        console.log(dvhid,dvhUserName,dvhPassword,dvhEmail,dvhPhone);
        // post to api
        let dvhObjUser = {
    UserName:dvhUserName,
    PassWord:dvhPassword,
    Email: dvhEmail,
    Phone: dvhPhone,
    id: dvhid
        }

        const dvhRes = await axios.post("dvhUser",dvhObjUser);
        
        ondvhSubmitForm(false)
    }
    return(
        <div className=" border">
            <form>
                <div className="input-group mb-3">
                <span class='input-group-text' id="bassic-addon1">ID</span>
                <input type="text" class="form-control" 
                name='id' value={dvhid} onChange={(ev)=>setdvhid(ev.target.value)}
                placeholder="id" aria-label="id" aria-describedby="bassic-addon1"></input>
                </div>
                <div className="input-group mb-3">
                <span class='input-group-text' id="bassic-addon1">UserName</span>
                <input type="text" class="form-control" 
                name='UserName' value={dvhUserName} onChange={(ev)=>setdvhUserName(ev.target.value)}
                placeholder="UserName" aria-label="UserName" aria-describedby="bassic-addon1"></input>
                </div>
                <div className="input-group mb-3">
                <span class='input-group-text' id="bassic-addon1">PassWord</span>
                <input type="password" class="form-control" 
                name='PassWord' value={dvhPassword} onChange={(ev)=>setdvhPassword(ev.target.value)}
                placeholder="PassWord" aria-label="PassWord" aria-describedby="bassic-addon1"></input>
                </div>
                <div className="input-group mb-3">
                <span class='input-group-text' id="bassic-addon1">Email</span>
                <input type="email" class="form-control" 
                name='Email' value={dvhEmail} onChange={(ev)=>setdvhEmail(ev.target.value)}
                placeholder="Email" aria-label="Email" aria-describedby="bassic-addon1"></input>
                </div>
                <div className="input-group mb-3">
                <span class='input-group-text' id="bassic-addon1">Phone</span>
                <input type="number" class="form-control" 
                name='Phone' value={dvhPhone} onChange={(ev)=>setdvhPhone(ev.target.value)}
                placeholder="Phone" aria-label="Phone" aria-describedby="bassic-addon1"></input>
                </div>
                <button className="btn btn-primary" name='btndvhSave' onClick={(ev)=>dvhHandleSubmit(ev)}>Ghi lai </button>
                <button className="btn btn-primary" onClick={dvhHandleCLose}>Dong</button>
            </form>
        </div>
    )
}