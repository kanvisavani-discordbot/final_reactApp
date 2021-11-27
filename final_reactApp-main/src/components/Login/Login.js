import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';


export const Login = ({ setToken }) => {
    const [mail, setUserName] = useState('');
    const [pwd, setPassword] = useState('');
    const [isSubmit,setIsSubmit]=useState(false);

    const handleSubmit = async e => {
        e.preventDefault();

        if(mail==''||pwd==''){
            setIsSubmit(true);
        }
        axios.get("http://localhost:9191/login/"+mail+"/"+ pwd)
        .then((response) => {
            setToken(response.data);    
          }, (error) => {
            console.log(error);
          })    
      }

    return (
        <section className="login d-flex">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-sm-5">
                        <h1>Planting<br/> Relationship</h1>
                    </div>
                    <div className="col-sm-7">
                        <form className="login-form">
                            <div className="text-center">
                                <img className="img-fluid" src="assets/images/logo-c.png" alt="" />
                            </div>
                            <div className="form-group">
                                <input type="text" className={"form-control md-form " + (mail==''&&isSubmit ? 'er-msg' : '')} placeholder="Enter usesrname" onChange={e => setUserName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className={"form-control md-form " + (pwd==''&&isSubmit ? 'er-msg' : '')} placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <span className={!isSubmit ? 'd-none' : 'er-msg'}>Credentials are not valid</span>
                            </div>
                            <div className="text-center">
                                <button onClick={handleSubmit} type="button" className="btn theme-btn">
                                    Login Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }