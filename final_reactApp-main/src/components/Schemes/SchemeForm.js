import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import './Schemes.css';

const SchemeForm =()=> {

    const [name, setschemeName] = useState(''); 
    const [schemeId, setschemeId] = useState(''); 
    const [data, setData] = useState([]);
    const [isMode,setIsMode]=useState(true);
    const [isSubmit,setIsSubmit]=useState(false);

        useEffect(() => {
            axios.get("http://localhost:9191/allSchemes").then(Response => setData(Response.data))
          }, [])

  const submitHandler=(e)=>{
        e.preventDefault()
        if(name==''){
            setIsSubmit(true);
            return;
        }
        if(isMode)
        {axios.post("http://localhost:9191/createScheme",{name})
        .then((response) => {
            clearData();
                axios.get("http://localhost:9191/allSchemes").then((Response) => {setData(Response.data)})
          }, (error) => {
            console.log(error);
          });
    }
        else
        {axios.put("http://localhost:9191/scheme/"+schemeId,{name})
        .then((response) => {
            clearData();
                axios.get("http://localhost:9191/allSchemes").then((Response) => {setData(Response.data)})
          }, (error) => {
            console.log(error);
          });
        }
    }

    const clearData=()=>{
        setIsSubmit(false)
        setIsMode(true)
        setschemeName('')
    }

    const deleteData=(e)=>{
       e.preventDefault()
       axios.delete("http://localhost:9191/schemes/"+schemeId)
       .then((response) => {
            clearData();
            axios.get("http://localhost:9191/allSchemes").then((Response) => {setData(Response.data)})
         }, (error) => {
           console.log(error);
         });
    }

    const updateData=(e,id)=>{
        e.preventDefault()
        setschemeId(id)
        axios.get("http://localhost:9191/schemes/"+schemeId)
        .then((response) => {
            setIsMode(false)
            setschemeName(response.data.name)
          }, (error) => {
            console.log(error);
          });
    }
            const renderTable = () => {
                return data.map(scheme => {
                  return (
                    <tr>
                      <td>{scheme.name}</td>
                      <td><i class="feather icon-edit-2 btn edit-btn" onClick={e=>updateData(e,scheme.id)}></i></td>
                      <td><i class="feather icon-trash btn del-btn" data-toggle="modal" onClick={e=> setschemeId(scheme.id)} data-target="#delModal"></i></td>
                    </tr>
                  )
                })
              }

    return (
        <div>
            <form className="center-form" onSubmit={submitHandler}>
                                            <div className="form-group">
                                                <input type="text" className={"form-control md-form " + (name==''&&isSubmit ? 'er-msg' : '')} name="name"
                                                       placeholder="Enter scheme Name" value={name} onChange={e => setschemeName(e.target.value)}/>
                                            <span className={name==''&&isSubmit ? '' : 'd-none'}>Please enter scheme name</span>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn theme-btn">
                                                    {isMode? 'Add Scheme' : 'Update Scheme' }
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
                            <div className="text-center"><h2>Are you sure to delete your scheme?</h2></div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn theme-btn" data-dismiss="modal" onClick={deleteData}>Yes</button>
                            <button type="reset" data-dismiss="modal" className="btn btn-danger">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchemeForm