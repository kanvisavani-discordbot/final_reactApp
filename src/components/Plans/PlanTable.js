import React,{Component} from 'react';
import './Plans.css';
import $ from 'jquery';

class PlanTable extends Component {
    state={
        planData: null
    };

    async componentDidMount(){
        const url="http://localhost:9191/allPlans"
        const response=await fetch(url);
        this.setState({planData : response.json()});
        this.$el=$(this.el)
        this.$el.DataTable(
            {
                data: this.state.planData,
                columns:[
                    {title: "Name"},
                    {title: "Priority"}
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
                    <tbody>
                        <tr>
                            <td>heppy</td>
                            <td>high</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
    }
}

export default PlanTable