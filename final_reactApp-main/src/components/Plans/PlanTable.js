import React,{useState} from 'react';
import './Plans.css';
import $ from 'jquery';

const PlanTable =()=> {
    const [planData,setPlandata]=useState(0);

        const url="http://localhost:9191/allPlans"
        const response= fetch(url);

    return (
        <div>
            <div className="dt-responsive table-responsive">
                <table width="100%" className="table table-striped table-bordered nowrap">
                    <thead>
                        <th>Name</th>
                        <th>Priority</th>
                    </thead>
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