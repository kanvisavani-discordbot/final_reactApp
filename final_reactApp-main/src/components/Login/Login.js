import React, { useState } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    axios.post("http://localhost:9191/login",credentials)
        .then((response) => {
            debugger;
            return response.data;
          }, (error) => {
            console.log(error);
          });
        }

export const Login = ({ setToken }) => {
    const [mail, setUserName] = useState();
    const [pwd, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          mail,
          pwd
        });
        setToken(token);
      }

    return (
        <section className="login d-flex">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-sm-5">
                        <h1>Planting<br/> Relationship</h1>
                    </div>
                    <div className="col-sm-7">
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="text-center">
                                <img className="img-fluid" src="assets/images/logo-c.png" alt="" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control md-form" placeholder="Enter usesrname" onChange={e => setUserName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control md-form" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <div className="border-checkbox-section">
                                    <div className="border-checkbox-group border-checkbox-group-default">
                                        <input className="border-checkbox" type="checkbox" id="checkbox0"/>
                                            <label className="border-checkbox-label" htmlFor="checkbox0">Remember
                                                Me</label>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <Link to="/plans" type="button" className="btn theme-btn">
                                    Login Now
                                </Link>
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