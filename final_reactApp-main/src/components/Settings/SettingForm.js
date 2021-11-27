import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import './Settings.css';

const SettingForm =()=> {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');      
    const [userId, setUserId] = useState('');     
    const [pid,setPId]=useState('');
    const [email,setEmail]=useState('');
    const [img,setImg]=useState(''); 
    const [newPassword,setNewPassword]=useState('');
    const [ConfirmPassword,setConfirmPassword]=useState('');
    const [isSubmit,setIsSubmit]=useState(false);
    const [oldPassword,setOldPassword]=useState('');

    useEffect(() => {
        const token =JSON.parse(sessionStorage.token);    
        setUserId(token.id)   
            setName(token.name);
            setOldPassword(token.password);
            setImg(token.img);
            setEmail(token.email);
            setPId(token.pid);          
      }, [])       
          
  const submitHandler=(e)=>{
        e.preventDefault()
        if(password==''||newPassword==''||ConfirmPassword==''){
            setIsSubmit(true);
            return;
        }
        debugger;
        {axios.put("http://localhost:9191/user/"+userId,{name,newPassword,pid,email,img})
        .then((response) => {
            clearData();
          }, (error) => {
            console.log(error);
          });
        }
    }

    const clearData=()=>{
        setPassword('')
        setNewPassword('')
        setOldPassword('')
        setIsSubmit(false)
    }

    return (
        <div>
            <form className="center-form" onSubmit={submitHandler}>
                                            
                                            <div className="form-group">
                                            <input type="password" className={"form-control md-form " + (password==''&&isSubmit ? 'er-msg' : '')} name="name"
                                                       placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}/>
                                            <span className={password==''&&isSubmit ? '' : 'd-none'}>Please enter password</span>
                                            <span className={oldPassword==password&&isSubmit ? '' : 'd-none'}>Please enter old password</span>
                                            </div>
                                            <div className="form-group">
                                            <input type="password" className={"form-control md-form " + (newPassword==''&&isSubmit ? 'er-msg' : '')} name="name"
                                                       placeholder="Enter New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
                                            <span className={newPassword==''&&isSubmit ? '' : 'd-none'}>Please enter new password</span>
                                            <span className={newPassword==password&&isSubmit ? '' : 'd-none'}>Old and new passwords are same!!</span>
                                            </div>
                                            <div className="form-group">
                                            <input type="password" className={"form-control md-form " + (ConfirmPassword==''&&isSubmit ? 'er-msg' : '')} name="name"
                                                       placeholder="Enter Confirm Password" value={ConfirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                                            <span className={password==''&&isSubmit ? '' : 'd-none'}>Please confirm new password</span>
                                            <span className={newPassword==ConfirmPassword&&isSubmit ? '' : 'd-none'}>Confirm password is not matched with new password...</span>
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

export default SettingForm