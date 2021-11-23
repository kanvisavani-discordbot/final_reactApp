import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import './Users.css';

const UserForm =()=> {

    const [fullName, setUserName] = useState('');
    const [password, setPassword] = useState('');      
    const [userId, setUserId] = useState(''); 
    const [data, setData] = useState([]);
    const [isMode,setIsMode]=useState(true);

        useEffect(() => {
            axios.get("http://localhost:9191/allUsers").then(Response => setData(Response.data))
          }, [])

  const submitHandler=(e)=>{
        e.preventDefault()
        debugger;
        if(isMode)
        {axios.post("http://localhost:9191/createUser",{fullName,password})
        .then((response) => {
            clearData();
                axios.get("http://localhost:9191/allUsers").then((Response) => {setData(Response.data)})
          }, (error) => {
            console.log(error);
          });
    }
        else
        {axios.put("http://localhost:9191/user/"+userId,{fullName,password})
        .then((response) => {
            clearData();
                axios.get("http://localhost:9191/allUsers").then((Response) => {setData(Response.data)})
          }, (error) => {
            console.log(error);
          });
        }
    }

    const clearData=()=>{
        setIsMode(true)
        setUserName('')
        setPassword('')
    }

    const deleteData=(e)=>{
       e.preventDefault()
       axios.delete("http://localhost:9191/users/"+userId)
       .then((response) => {
            clearData();
            axios.get("http://localhost:9191/allUsers").then((Response) => {setData(Response.data)})
         }, (error) => {
           console.log(error);
         });
    }

    const updateData=(e,id)=>{
        e.preventDefault()
        setUserId(id)
        axios.get("http://localhost:9191/users/"+userId)
        .then((response) => {
            setIsMode(false)
            setUserName(response.data.fullName)
            setPassword(response.data.password)
          }, (error) => {
            console.log(error);
          });
    }
            const renderTable = () => {
                return data.map(user => {
                  return (
                    <tr>
                      <td>{user.fullName}</td>
                      <td>{user.password}</td>
                      <td><i class="feather icon-trash btn del-btn" data-toggle="modal" onClick={e=> setUserId(user.id)} data-target="#delModal"></i></td>
                    </tr>
                  )
                })
              }

    return (
        <div>
            <form className="center-form" onSubmit={submitHandler}>
                                            <div className="form-group">
                                                <input type="text" className="form-control md-form" name="name"
                                                       placeholder="Enter User Name" value={fullName} onChange={e => setUserName(e.target.value)}/>
                                            </div>
                                            <div className="form-group">
                                            <input type="password" className="form-control md-form" name="name"
                                                       placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}/>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn theme-btn">
                                                    {isMode? 'Add User' : 'Update User' }
                                                </button>
                                                <button type="reset" className="btn btn-danger" onClick={clearData}>
                                                    Clear Data
                                                </button>
                                            </div>
                                        </form>                                        
                                        <div className="dt-responsive table-responsive">
                <table width="100%" className="table table-striped table-bordered nowrap">
                    <thead>
                        <th>Name</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>{renderTable()}</tbody>
                </table>
            </div>
            <div className="modal fade" id="delModal" tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete Your Record</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="text-center"><h2>Are you sure to delete your user?</h2></div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn theme-btn" onClick={deleteData}>Yes</button>
                            <button type="reset" data-dismiss="modal" className="btn btn-danger">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserForm