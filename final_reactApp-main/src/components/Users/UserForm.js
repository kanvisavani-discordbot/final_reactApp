import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import './Users.css';

const UserForm =()=> {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');      
    const [userId, setUserId] = useState('');     
    const [pid,setPId]=useState('');
    const [email,setEmail]=useState('');
    const [img,setImg]=useState('Choose File');
    const [data, setData] = useState([]);
    const [isMode,setIsMode]=useState(true);    
    const [isSubmit,setIsSubmit]=useState(false);

        useEffect(() => {
            axios.get("http://localhost:9191/allUsers").then(Response => setData(Response.data))
          }, [])

  const submitHandler=(e)=>{
        e.preventDefault()
        if(name==''||password==''||pid==''||email==''||img==''){
            setIsSubmit(true);
            return;
        }
        debugger;
        if(isMode)
        {axios.post("http://localhost:9191/createUser",{name,password,pid,email,img})
        .then((response) => {
            clearData();
                axios.get("http://localhost:9191/allUsers").then((Response) => {setData(Response.data)})
          }, (error) => {
            console.log(error);
          });
    }
        else
        {axios.put("http://localhost:9191/user/"+userId,{name,password,pid,email,img})
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
        setName('')
        setPassword('')
        setEmail('')
        setImg('')
        setUserId('')
        setPId('')
        setIsSubmit(false)
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

    const fileSelection=(e)=>{
        e.preventDefault()
        debugger;
        setImg(e.target.files[0].name);       
    }

            const renderTable = () => {
                return data.map(user => {
                  return (
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.img}</td>
                      <td><i class="feather icon-trash btn del-btn" data-toggle="modal" onClick={e=> setUserId(user.id)} data-target="#delModal"></i></td>
                    </tr>
                  )
                })
              }

    return (
        <div>
            <form className="center-form" onSubmit={submitHandler}>
                                            <div className="form-group">
                                                <input type="text" className={"form-control md-form " + (name==''&&isSubmit ? 'er-msg' : '')} name="name"
                                                       placeholder="Enter User Name" value={name} onChange={e => setName(e.target.value)}/>
                                            <span className={name==''&&isSubmit ? '' : 'd-none'}>Please enter user name</span>
                                            </div>
                                            <div className="form-group">
                                            <input type="password" className={"form-control md-form " + (password==''&&isSubmit ? 'er-msg' : '')} name="name"
                                                       placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}/>
                                            <span className={password==''&&isSubmit ? '' : 'd-none'}>Please enter password</span>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className={"form-control md-form " + (email==''&&isSubmit ? 'er-msg' : '')}  name="email"
                                                       placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)}/>
                                            <span className={email==''&&isSubmit ? '' : 'd-none'}>Please enter email</span>
                                            </div>
                                            <div className="form-group">
                                            <input type="file" className={"form-control md-form " + (img==''&&isSubmit ? 'er-msg' : '')}  name="img" 
                                            onChange={fileSelection} />
                                            <span className={img==''&&isSubmit ? '' : 'd-none'}>Please enter image url</span>
                                            </div>
                                            <div className="form-group">
                                            <select name="pid" value={pid} onChange={e => setPId(e.target.value)} className={"form-control " + (pid==''&&isSubmit ? 'er-msg' : '')}>
                                            <option value="">Select Parent User</option>
                                            {data.map(user => {
                  return (
                    <option value={user.id}>{user.name}</option>
                  )
                })
              }
                                            
                                        </select>
                                        <span className={pid==''&&isSubmit ? '' : 'd-none'}>Please select parent user</span>
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
                        <th>Email</th>
                        <th>Image</th>
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
                            <button type="button" className="btn theme-btn" data-dismiss="modal" onClick={deleteData}>Yes</button>
                            <button type="reset" data-dismiss="modal" className="btn btn-danger">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserForm