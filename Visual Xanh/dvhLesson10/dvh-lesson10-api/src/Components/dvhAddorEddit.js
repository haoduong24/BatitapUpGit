import React from "react"
export default function dvhAddorEddit(){
    return(
        <div className=" border">
            <form>
                <div className="input-group mb-3">
                <span class='input-group-text' id="bassic-addon1">ID</span>
                <input type="text" class="form-control" 
                name='id' value={''}
                placeholder="id" aria-label="id" aria-describedby="bassic-addon1"></input>
                </div>
                <div className="input-group mb-3">
                <span class='input-group-text' id="bassic-addon1">UserName</span>
                <input type="text" class="form-control" 
                name='UserName' value={''}
                placeholder="UserName" aria-label="UserName" aria-describedby="bassic-addon1"></input>
                </div>
                <div className="input-group mb-3">
                <span class='input-group-text' id="bassic-addon1">PassWord</span>
                <input type="password" class="form-control" 
                name='PassWord' value={''}
                placeholder="PassWord" aria-label="PassWord" aria-describedby="bassic-addon1"></input>
                </div>
                <div className="input-group mb-3">
                <span class='input-group-text' id="bassic-addon1">Email</span>
                <input type="email" class="form-control" 
                name='Email' value={''}
                placeholder="Email" aria-label="Email" aria-describedby="bassic-addon1"></input>
                </div>
                <div className="input-group mb-3">
                <span class='input-group-text' id="bassic-addon1">Phone</span>
                <input type="number" class="form-control" 
                name='Phone' value={''}
                placeholder="Phone" aria-label="Phone" aria-describedby="bassic-addon1"></input>
                </div>
                <button className="btn btn-primary" name='btndvhSave'>Ghi lai</button>
            </form>
        </div>
    )
}