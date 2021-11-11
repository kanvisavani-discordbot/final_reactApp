import React,{Component, useState} from 'react';
import axios from 'axios';
import './Plans.css';

const PlanForm =()=> {

    const [name, setplanName] = useState('');
    const [priority, setpriority] = useState('');

  const submitHandler=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:9191/createPlan",{name,priority})
    }

    return (
        <div>
            <form className="center-form" onSubmit={submitHandler}>
                                            <div className="form-group">
                                                <input type="text" className="form-control md-form" name="name"
                                                       placeholder="Enter Plan Name" value={name} onChange={e => setplanName(e.target.value)}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control md-form" name="priority"
                                                       placeholder="Enter Plan Priority" value={priority} onChange={e => setpriority(e.target.value)}/>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn theme-btn">
                                                    Add Plan
                                                </button>
                                                <button type="reset" className="btn btn-danger">
                                                    Clear Data
                                                </button>
                                            </div>
                                        </form>
        </div>
    )
}

export default PlanForm