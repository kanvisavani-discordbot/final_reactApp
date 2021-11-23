import React, { useState, useEffect } from 'react';
import OrgChart from '@balkangraph/orgchart.js';
import axios from 'axios';
import { Master } from './components/Master';
import {Link} from 'react-router-dom';

const MyChart=(props) => {
        const [divRef, setDivRef] = useState(React.createRef()); 
        const [data, setData] = useState(''); 

        useEffect(() => {
            axios.get("http://localhost:9191/allUsers").then(Response => setData(Response.data))
             new OrgChart(divRef.current , {
                nodes:data,
                template: "ula",
                enableSearch: false,
                nodeBinding: {
                    field_0: "name",
                    field_1: "title",
                    img_0: "img"
                }
            });
          });
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
                <div className="sd-main-body">
                                    <div id="tree" ref={divRef}></div>
                                    </div>
                                </div>
        );
}

export default MyChart