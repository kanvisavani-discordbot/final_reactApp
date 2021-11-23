import React,{ useState } from 'react';
import {Link} from 'react-router-dom';

export const Master = () => {
    const [isPlanActive, setPlanActive] = useState("true");
    const [isLevelActive, setLevelActive] = useState("false");
    const [isSchemeActive, setSchemeActive] = useState("false");
    const [isUserActive, setUserActive] = useState("false");

    return (
        <div>            
            <div className="sd-main-wrapper">
                <nav className="sd-header-navbar">
                    <div className="header-wrapper">
                        <div className="header-logo">
                            <img className="img-fluid theme-logo" src="assets/images/logo.png" alt="Theme-logo"/>
                        </div>
                        <div className="header-container container-fluid">                            
                            <ul className="float-right list-unstyled">
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
                                            <Link to="/login">
                                                <i className="feather icon-log-out"></i>
                                                Logout
                                            </Link>
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
                        <li className={isPlanActive=="true" ? 'active' : null} onClick={
                            ()=>{
                            setLevelActive("false");
                            setPlanActive("true");
                            setSchemeActive("false");
                            }}>
                            <Link to="/plans">
						<span className="menu-icon">
							<i className="feather icon-unlock"></i>
						</span>
                                <span className="menu-txt">
							Plans
						</span>
                            </Link>
                        </li>
                        <li className={isLevelActive=="true" ? 'active' : null} onClick={
                            ()=>{
                            setLevelActive("true");
                            setPlanActive("false");
                            setSchemeActive("false");
                            setUserActive("false");
                            }}>
                            <Link to="/levels">
						<span className="menu-icon">
							<i className="feather icon-list"></i>
						</span>
                                <span className="menu-txt">
							Levels
						</span>
                            </Link>
                        </li>
                        <li className={isSchemeActive=="true" ? 'active' : null}  onClick={
                            ()=>{
                            setLevelActive("false");
                            setPlanActive("false");
                            setSchemeActive("true");
                            setUserActive("false");
                            }
                            }>
                        <Link to="/schemes">
						<span className="menu-icon">
							<i className="feather icon-award"></i>
						</span>
                                <span className="menu-txt">
							Schemes
						</span>
                            </Link>
                        </li>
                        <li className={isUserActive=="true" ? 'active' : null}  onClick={
                            ()=>{
                            setLevelActive("false");
                            setPlanActive("false");
                            setSchemeActive("false");
                            setUserActive("true");
                            }
                            }>
                        <Link to="/users">
						<span className="menu-icon">
							<i className="feather icon-user"></i>
						</span>
                                <span className="menu-txt">
							Users
						</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
}