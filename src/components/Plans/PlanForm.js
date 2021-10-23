import React,{Component} from 'react';
import axios from 'axios';
import './Plans.css';

class PlanForm extends Component {

    constructor(props){
        super(props);

        this.state={
            id:'123',
            name:'',
            priority:''
        }
    }

    submitHandler=e=>{
        e.preventDefault()
        debugger;
        console.log('hi '+this.state)
        axios.post("http://localhost:6089/create",this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    render(){
        const {id,name,priority}=this.state
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
                                        </form>
        </div>
    )
    }
}

export default PlanForm