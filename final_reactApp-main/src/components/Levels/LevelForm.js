import React,{Component} from 'react';
import axios from 'axios';
import './Levels.css';

class LevelForm extends Component {

    constructor(props){
        super(props);

        this.state={
            name:'',
            member:'',
            priority:''
        }
    }

    submitHandler=e=>{
        e.preventDefault()
        axios.post("http://localhost:9191/createLevel",this.state)
    }

    changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    render(){
        const {name,priority,member}=this.state
    return (
        <div>
            <form className="center-form" onSubmit={this.submitHandler}>
                                            <div className="form-group">
                                                <input type="text" className="form-control md-form" name="name"
                                                       placeholder="Enter Level Name" value={this.name} onChange={this.changeHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control md-form" name="priority"
                                                       placeholder="Enter Level Member" value={this.level} onChange={this.changeHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control md-form" name="priority"
                                                       placeholder="Enter Level Priority" value={this.priority} onChange={this.changeHandler}/>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn theme-btn">
                                                    Add Level
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

export default LevelForm