import React,{Component} from 'react';
import './Levels.css';
import $ from 'jquery';

class LevelTable extends Component {
    state={
        levelData: null
    };

    async componentDidMount(){
        const url="http://localhost:9191/allLevels"
        const response=await fetch(url);
        this.setState({levelData : response.json()});
        this.$el=$(this.el)
        this.$el.DataTable(
            {
                data: this.state.levelData,
                columns:[
                    {title: "Name"},
                    {title: "Member"},
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
                </table>
            </div>
        </div>
    );
    }
}

export default LevelTable