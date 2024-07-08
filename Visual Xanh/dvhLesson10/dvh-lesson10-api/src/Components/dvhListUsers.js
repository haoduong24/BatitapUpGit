import React from "react";
export default function dvhListUsers(renderdvhListUsers, ondvhDelete){
    console.log("dvhListUsers:",renderdvhListUsers);
    // hien thi du lieu
    let dvhElementUser = renderdvhListUsers.map((dvhUser,index)=>{
        return(
            <tr key={index}>
                <td>{dvhUser.id}</td>
                <td>{dvhUser.UserName}</td>
                <td>{dvhUser.PassWord}</td>
                <td>{dvhUser.Email}</td>
                <td>{dvhUser.Phone}</td>
                <td>
                    <button className="btn btn-danger" onClick={dvhHandleDelete(dvhUser)}> Delete</button>
                </td>
            </tr>
        )
    })

    const dvhHandleDelete= async (param)=>{
        if(window.confirm('Ban co muon xoa khong')){
            const dvhRes = await axios.delete("dvhUser/"+param.id);
        }
        ondvhDelete();
    }
    return(
        <div className="row">
            <div className="col-md-12">
            <table className="table table-bordered">
                <thread>
                    <tr>
                        <th>id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chuc nang</th>
                    </tr>
                </thread>
                <body>
                    {dvhElementUser}
                </body>
            </table>

            </div>

        </div>
    )
}