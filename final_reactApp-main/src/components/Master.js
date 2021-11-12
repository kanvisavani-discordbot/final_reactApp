import React from 'react';
import {Link} from 'react-router-dom';

export const Master = () => {
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
                        <li className="active">
                            <Link to="/plans">
						<span className="menu-icon">
							<i className="feather icon-unlock"></i>
						</span>
                                <span className="menu-txt">
							Plans
						</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/levels">
						<span className="menu-icon">
							<i className="feather icon-list"></i>
						</span>
                                <span className="menu-txt">
							Levels
						</span>
                            </Link>
                        </li>
                        <li>
                        <Link to="/schemes">
						<span className="menu-icon">
							<i className="feather icon-award"></i>
						</span>
                                <span className="menu-txt">
							Schemes
						</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
}