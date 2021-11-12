import React from 'react';
import './Schemes.css';
import DataTable from 'react-data-table-component';
import SchemeForm from './SchemeForm';
import SchemeTable from './SchemeTable';
import {Link} from 'react-router-dom';
import { Master } from '../Master';

export const Schemes = () => {
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
                                <a href="#!">Schemes</a>
                            </li>
                        </ul>
                    </div>
                    <div className="page-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Add Your Schemes</h5>
                                    </div>
                                    <div className="card-body">
                                        <SchemeForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="addModal" tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Level or Schemes</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="form-group">
                                    <div className="form-group">
                                        <label htmlFor="">Add Data</label>
                                        <select name="" id="" className="form-control">
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn theme-btn">Add Scheme</button>
                            <button type="reset" className="btn btn-danger">Reset</button>
                        </div>
                    </div>
                </div>
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
                            <div className="text-center"><h2>Are you sure to delete your scheme?</h2></div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn theme-btn">Yes</button>
                            <button type="reset" className="btn btn-danger">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}