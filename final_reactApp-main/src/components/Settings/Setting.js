import React from 'react';
import './Settings.css';
import SettingForm from './SettingForm';
import { Master } from '../Master';

export const Setting = () => {
    return (
        <div>
            <Master/>
            <div className="sd-main-body">
                <div className="sd-body-wrapper">
                    <div className="page-header">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#!">Setting</a>
                            </li>
                        </ul>
                    </div>
                    <div className="page-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Update Your Setting</h5>
                                    </div>
                                    <div className="card-body">
                                        <SettingForm/>
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