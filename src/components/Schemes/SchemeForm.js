import React,{Component} from 'react';
import axios from 'axios';
import './Schemes.css';

class SchemeForm extends Component {

    constructor(props){
        super(props);

        this.state={
            name:''
        }
    }

    submitHandler=e=>{
        e.preventDefault()
        axios.post("http://localhost:9191/createScheme",this.state)
        .then(res => {
            console.log(res);
          })
    }

    changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    render(){
        const {name}=this.state
    return (
        <div>
            <form className="center-form" onSubmit={this.submitHandler}>
                                            <div className="form-group">
                                                <input type="text" className="form-control md-form" name="name"
                                                       placeholder="Enter Plan Name" value={this.name} onChange={this.changeHandler}/>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn theme-btn">
                                                    Add Scheme
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

export default SchemeForm