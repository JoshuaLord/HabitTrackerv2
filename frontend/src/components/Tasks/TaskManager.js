import React from 'react';
import axios from 'axios';
import {
    withRouter
} from "react-router-dom";

class TaskManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        };

        this.update_list = this.update_list.bind(this);
        this.on_checkbox_change = this.on_checkbox_change.bind(this);
    }

    componentDidMount() {
        this.update_list();
    }

    update_list() {
        axios.post('http://10.0.0.200:5000/tasks/generate-tasks', { habits: this.props.habits });

        axios.get('http://10.0.0.200:5000/tasks')
            .then(res => {
                this.setState({
                    tasks: res.data
                });
            });
    }

    on_checkbox_change = (e) => {
        let id = e.target.dataset.key;
        axios.patch('http://10.0.0.200:5000/tasks', { id: id, checked: e.target.checked });
    }

    render() {
        var table = <p>No tasks today!</p>

        if (this.state.tasks !== undefined && this.state.tasks.length > 0) {
            table = (
                <table className="table table-striped table-sm" id="tasks">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tasks.map((task) => {
                            return (
                                <tr key={task._id}>
                                    <td>{task.name}</td>
                                    <td>{task.date}</td>
                                    <td><input type="checkbox" id="complete" value="complete" data-key={task._id} onChange={this.on_checkbox_change}/></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            );
        }

        return (
        <>
            <div className="d-flex align-items-center mb-2">
                <span className="h2 pr-2">Tasks</span>
            </div>
            
            {table}
        </>
        );
    }
}
 
export default withRouter(TaskManager);