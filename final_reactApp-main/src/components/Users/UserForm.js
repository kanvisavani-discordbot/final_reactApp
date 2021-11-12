import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import './Users.css';

const UserForm =()=> {

    const [name, setplanName] = useState('');
    const [priority, setpriority] = useState('');      
    const [planId, setplanId] = useState(''); 
    const [data, setData] = useState([]);
    const [isMode,setIsMode]=useState(true);

        useEffect(() => {
            axios.get("http://localhost:9191/allPlans").then(Response => setData(Response.data))
          }, [])

  const submitHandler=(e)=>{
        e.preventDefault()
        debugger;
        if(isMode)
        {axios.post("http://localhost:9191/createPlan",{name,priority})
        .then((response) => {
            clearData();
                axios.get("http://localhost:9191/allPlans").then((Response) => {setData(Response.data)})
          }, (error) => {
            console.log(error);
          });
    }
        else
        {axios.put("http://localhost:9191/plan/"+planId,{name,priority})
        .then((response) => {
            clearData();
                axios.get("http://localhost:9191/allPlans").then((Response) => {setData(Response.data)})
          }, (error) => {
            console.log(error);
          });
        }
    }

    const clearData=()=>{
        setIsMode(true)
        setplanName('')
        setpriority('')
    }

    const deleteData=(e)=>{
       e.preventDefault()
       axios.delete("http://localhost:9191/plans/"+planId)
       .then((response) => {
            clearData();
            axios.get("http://localhost:9191/allPlans").then((Response) => {setData(Response.data)})
         }, (error) => {
           console.log(error);
         });
    }

    const updateData=(e,id)=>{
        e.preventDefault()
        setplanId(id)
        axios.get("http://localhost:9191/plans/"+planId)
        .then((response) => {
            setIsMode(false)
            setplanName(response.data.name)
            setpriority(response.data.priority)
          }, (error) => {
            console.log(error);
          });
    }
            const renderTable = () => {
                return data.map(plan => {
                  return (
                    <tr>
                      <td>{plan.name}</td>
                      <td>{plan.priority}</td>
                      <td><i class="feather icon-edit-2 btn edit-btn" onClick={e=>updateData(e,plan.id)}></i></td>
                      <td><i class="feather icon-trash btn del-btn" data-toggle="modal" onClick={e=> setplanId(plan.id)} data-target="#delModal"></i></td>
                    </tr>
                  )
                })
              }

    return (
        <div>
            <form className="center-form" onSubmit={submitHandler}>
                                            <div className="form-group">
                                                <input type="text" className="form-control md-form" name="name"
                                                       placeholder="Enter Plan Name" value={name} onChange={e => setplanName(e.target.value)}/>
                                            </div>
                                            <div className="form-group">
                                            <select name="priority" value={priority} onChange={e => setpriority(e.target.value)} className="form-control">
                                            <option value="">Select Priority</option>
                                            <option value="High">High</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn theme-btn">
                                                    {isMode? 'Add Plan' : 'Update Plan' }
                                                </button>
                                                <button type="reset" className="btn btn-danger" onClick={clearData}>
                                                    Clear Data
                                                </button>
                                            </div>
                                        </form>                                        
                                        <div className="dt-responsive table-responsive">
                <table width="100%" className="table table-striped table-bordered nowrap">
                    <thead>
                        <th>Name</th>
                        <th>Priority</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>{renderTable()}</tbody>
                </table>
            </div>
            <div className="modal fade" id="delModal" tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete Your Record</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="text-center"><h2>Are you sure to delete your plan?</h2></div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn theme-btn" onClick={deleteData}>Yes</button>
                            <button type="reset" data-dismiss="modal" className="btn btn-danger">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanForm