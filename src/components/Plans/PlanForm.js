import React,{Component} from 'react';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Plans.css';

toast.configure()
class PlanForm extends Component {

    constructor(props){
        super(props);

        this.state={
            name:'',
            priority:''
        }
    }

    submitHandler=e=>{
        e.preventDefault()
        axios.post("http://localhost:9191/createPlan",this.state)
        .then(res=>{
            debugger;
            toast(res);
        })
    }

    changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    render(){
        const {name,priority}=this.state
    return (
        <div>
            <form className="center-form" onSubmit={this.submitHandler}>
                                            <div className="form-group">
                                                <input type="text" className="form-control md-form" name="name"
                                                       placeholder="Enter Plan Name" value={this.name} onChange={this.changeHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control md-form" name="priority"
                                                       placeholder="Enter Plan Priority" value={this.priority} onChange={this.changeHandler}/>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn theme-btn">
                                                    Add Plan
                                                </button>
                                                <button type="reset" className="btn btn-danger">
                                                    Clear Data
                                                </button>
                                            </div>
                                            <ToastContainer />
                                        </form>
        </div>
    )
    }
}

export default PlanForm