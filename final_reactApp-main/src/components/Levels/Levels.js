import React from 'react';
import './Levels.css';
import DataTable from 'react-data-table-component';
import LevelForm from './LevelForm';
import LevelTable from './LevelTable';
import {Link} from 'react-router-dom';
import { Master } from '../Master';

export const Levels = () => {
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
                                <a href="#!">Levels</a>
                            </li>
                        </ul>
                    </div>
                    <div className="page-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Add Your Levels</h5>
                                    </div>
                                    <div className="card-body">
                                        <LevelForm/>
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