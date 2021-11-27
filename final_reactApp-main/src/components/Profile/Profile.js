import React from 'react';
import './Profiles.css';
import ProfileForm from './ProfileForm';
import { Master } from '../Master';

export const Profile = () => {
    return (
        <div>
            <Master/>
            <div className="sd-main-body">
                <div className="sd-body-wrapper">
                    <div className="page-header">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#!">Profile</a>
                            </li>
                        </ul>
                    </div>
                    <div className="page-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Update Your Profile</h5>
                                    </div>
                                    <div className="card-body">
                                        <ProfileForm/>
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