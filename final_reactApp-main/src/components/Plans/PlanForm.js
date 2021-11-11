import React,{Component, useState} from 'react';
import axios from 'axios';
import './Plans.css';

const PlanForm =()=> {

   const [planName,priority]=useState();

  const submitHandler=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:9191/createPlan",this.state)
    }

  const changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    return (
        <div>
            <form className="center-form" onSubmit={submitHandler}>
                                            <div className="form-group">
                                                <input type="text" className="form-control md-form" name="name"
                                                       placeholder="Enter Plan Name" value={planName} onChange={changeHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control md-form" name="priority"
                                                       placeholder="Enter Plan Priority" value={priority} onChange={changeHandler}/>
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