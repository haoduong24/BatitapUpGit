import React from "react";
export default function dvhListUsers(renderdvhListUsers){
    console.log("dvhListUsers:",renderdvhListUsers);
    // hien thi du lieu
    let dvhElementUser = renderdvhListUsers.map((dvhUser,index)=>{
        return(
            <>
            <tr>
                <td>{dvhUser.id}</td>
                <td>{dvhUser.UserName}</td>
                <td>{dvhUser.PassWord}</td>
                <td>{dvhUser.Email}</td>
                <td>{dvhUser.Phone}</td>
                <td>...</td>
            </tr>
            </>
        )
    })
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