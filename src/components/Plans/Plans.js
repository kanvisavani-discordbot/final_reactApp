import React from 'react';
import './Plans.css';
import DataTable from 'react-data-table-component';
import PlanForm from './PlanForm';

export const Plans = () => {
    return (
        <div>
            <div className="sd-main-wrapper">
                <nav className="sd-header-navbar">
                    <div className="header-wrapper">
                        <div className="header-logo">
                            <img className="img-fluid theme-logo" src="assets/images/logo.png" alt="Theme-logo"/>
                        </div>
                        <div className="header-container container-fluid">
                            <ul className="float-left list-unstyled">
                                <li>
                                    <a href="#!">
                                        <i className="feather icon-search"></i>
                                    </a>
                                </li>
                            </ul>
                            <ul className="float-right list-unstyled">
                                <li className="notifications">
                                    <a className="bell-noti" href="#!">
                                        <i className="feather icon-bell"></i>
                                        <span className="badge sd-badge">2</span>
                                    </a>
                                    <ul>
                                        <li className="heading">
                                            NOTIFICATIONS<span className="badge sd-badge">5 New</span>
                                        </li>
                                        <li className="unread">
                                            <div className="media">
                                                <img className="mr-3 img-fluid" src="assets/images/user.png"
                                                     alt="Generic placeholder image" />
                                                    <div className="media-body">
                                                        <h5 className="mt-0">Media heading</h5>
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                        scelerisque ante sollicitudin.
                                                    </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <img className="mr-3 img-fluid" src="assets/images/user.png"
                                                     alt="Generic placeholder image"/>
                                                    <div className="media-body">
                                                        <h5 className="mt-0">Media heading</h5>
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                        scelerisque ante sollicitudin.
                                                    </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <img className="mr-3 img-fluid" src="assets/images/user.png"
                                                     alt="Generic placeholder image"/>
                                                    <div className="media-body">
                                                        <h5 className="mt-0">Media heading</h5>
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                        scelerisque ante sollicitudin.
                                                    </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="user-profile notifications">
                                    <a href="#!">
                                        <img src="assets/images/user.png" className="img-fluid" alt=""/>
                                            <span>John Doe</span>
                                            <i className="feather icon-chevron-down"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#!">
                                                <i className="feather icon-settings"></i>
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <i className="feather icon-user"></i>
                                                Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <i className="feather icon-log-out"></i>
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <aside>
                <nav className="sd-menu">
                    <div className="profile-header">
                        <img src="assets/images/user.png" className="img-fluid img-thumbnail" alt="User-image"/>
                            <div className="user-details">
                                <p>John Doe</p>
                                <i className="feather icon-chevron-down"></i>
                            </div>
                    </div>
                    <ul className="menu-item list-unstyled">
                        <li>
                            <a href="index.html">
						<span className="menu-icon">
							<i className="feather icon-clipboard"></i>
						</span>
                                <span className="menu-txt">
							Form Componenets
						</span>
                            </a>
                        </li>
                        <li className="active">
                            <a href="plans.html">
						<span className="menu-icon">
							<i className="feather icon-unlock"></i>
						</span>
                                <span className="menu-txt">
							Plans
						</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
						<span className="menu-icon">
							<i className="feather icon-list"></i>
						</span>
                                <span className="menu-txt">
							Levels
						</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
						<span className="menu-icon">
							<i className="feather icon-award"></i>
						</span>
                                <span className="menu-txt">
							Schemes
						</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
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
                                <a href="#!">Plans</a>
                            </li>
                        </ul>
                    </div>
                    <div className="page-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Add Your Plans</h5>
                                    </div>
                                    <div className="card-body">
                                        <PlanForm/>
                                        <div className="dt-responsive table-responsive">
                                            <DataTable id="simpletable"
                                                   className="table table-striped table-bordered nowrap">
                                                <thead>
                                                <tr>
                                                    <th>Plan Name</th>
                                                    <th>Priority</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                
                                                </tbody>
                                            </DataTable>
                                        </div>
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
                            <button type="button" className="btn theme-btn">Add Plan</button>
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
                            <div className="text-center"><h2>Are you sure to delete your plan?</h2></div>
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