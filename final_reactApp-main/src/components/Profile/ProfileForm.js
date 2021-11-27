import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import './Profiles.css';

const ProfileForm =()=> {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');      
    const [userId, setUserId] = useState('');     
    const [pid,setPId]=useState('');
    const [email,setEmail]=useState('');
    const [img,setImg]=useState('Choose File');
    const [data, setData] = useState([]);   
    const [isSubmit,setIsSubmit]=useState(false);

        useEffect(() => {
            debugger;
            const token =JSON.parse(sessionStorage.token);    
            setUserId(token.id)   
                setName(token.name);
                setPassword(token.password);
                setImg(token.img);
                setEmail(token.email);
                setPId(token.pid);               
            axios.get("http://localhost:9191/allUsers").then((Response) => {setData(Response.data)})            
          }, [])
          
  const submitHandler=(e)=>{
        e.preventDefault()
        if(name==''||password==''||pid==''||email==''||img==''){
            setIsSubmit(true);
            return;
        }
        debugger;
        {axios.put("http://localhost:9191/user/"+userId,{name,password,pid,email,img})
        .then((response) => {
            clearData();
          }, (error) => {
            console.log(error);
          });
        }
    }

    const clearData=()=>{
        const token =JSON.parse(sessionStorage.token);    
            setUserId(token.id)   
                setName(token.name);
                setPassword(token.password);
                setImg(token.img);
                setEmail(token.email);
                setPId(token.pid);      
        setIsSubmit(false)
    }

    const fileSelection=(e)=>{
        e.preventDefault()
        debugger;
        setImg(e.target.files[0].name);       
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
                                                <input type="text" className={"form-control md-form " + (email==''&&isSubmit ? 'er-msg' : '')}  name="email"
                                                       placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)}/>
                                            <span className={email==''&&isSubmit ? '' : 'd-none'}>Please enter email</span>
                                            </div>
                                            <div className="form-group">
                                                <img src={"assets/images/"+img} />
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
                                                <button type="submit" className="btn theme-btn">Update User</button>
                                                <button type="reset" className="btn btn-danger" onClick={clearData}>
                                                    Clear Data
                                                </button>
                                            </div>
                                        </form>   
        </div>
    )
}

export default ProfileForm