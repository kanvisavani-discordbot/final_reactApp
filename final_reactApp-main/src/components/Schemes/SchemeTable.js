import React,{Component} from 'react';
import './Schemes.css';
import $ from 'jquery';

class SchemeTable extends Component {
    state={
        schemeData: null
    };

    async componentDidMount(){
        const url="http://localhost:9191/allSchemes"
        const response=await fetch(url);
        this.setState({schemeData : response.json()});
        this.$el=$(this.el)
        this.$el.DataTable(
            {
                data: this.state.SchemeData,
                columns:[
                    {title: "Name"}
                ]
            }
        )
    }

    componentWillUnmount(){
    }
    
    render(){
    return (
        <div>
            <div className="dt-responsive table-responsive">
                <table width="100%" ref={el=>this.el=el} className="table table-striped table-bordered nowrap">
                </table>
            </div>
        </div>
    );
    }
}

export default SchemeTable