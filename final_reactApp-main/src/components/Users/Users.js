import React from 'react';
import './Users.css';
import UserForm from './UserForm';
import { Master } from '../Master';

export const Users = () => {
    return (
        <div>
            <Master/>
            <div className="sd-main-body">
                <div className="sd-body-wrapper">
                    <div className="page-header">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">
                                    <i className="feather icon-home"></i>
                                </a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#!">Users</a>
                            </li>
                        </ul>
                    </div>
                    <div className="page-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Add Your Users</h5>
                                    </div>
                                    <div className="card-body">
                                        <UserForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    );
}