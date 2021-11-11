import React,{useState} from 'react';
import './Plans.css';
import $ from 'jquery';

const PlanTable =()=> {
    const [planData,setPlanData]=useState(0);
        const url="http://localhost:9191/allPlans"
        const response= fetch(url);
        setPlanData(response.json());
        this.$el=$(this.el)
        this.$el.DataTable(
            {
                data: planData,
                columns:[
                    {title: "Name"},
                    {title: "Priority"}
                ]
            }
        )
    
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
    )
}

export default PlanTable