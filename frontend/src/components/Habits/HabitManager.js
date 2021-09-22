import React from 'react';
import axios from 'axios';
import {
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


import AddHabit from './AddHabit';
import EditHabit from './EditHabit';
import ListHabit from './ListHabit';
import TaskManager from '../Tasks/TaskManager';

class HabitManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            habits: []
        };

        this.update_list = this.update_list.bind(this);
    }

    componentDidMount() {
        this.update_list();
    }

    update_list() {
        axios.get('http://10.0.0.200:5000/habits')
            .then(res => {
                this.setState({
                    habits: res.data
                });
            });

    }

    render() {
        var table = <p>No habits exist at this time.</p>

        if (this.state.habits !== undefined && this.state.habits.length > 0) {
            table = (
                <table className="table table-striped table-sm" id="habits">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.habits.map((habit) => {
                            return <ListHabit key={habit._id} habit={habit} update_list={this.update_list}/>
                        })}
                    </tbody>
                </table>
            );
        }        

        return (
        <>
            <Switch>
                <Route exact path={this.props.match.path}>
                    <div className="d-flex align-items-center mb-2">
                        <span className="h2 pr-2">Habits</span>
                        <Link to={`${this.props.match.url}/create`} className={"btn btn-primary"}>Add Habit</Link>
                    </div>
                    
                    {table}

                    <TaskManager habits={this.state.habits} />
                </Route>

                <Route exact path={`${this.props.match.path}/create`}>
                    <AddHabit update_list={this.update_list} />
                </Route>

                <Route exact path={`${this.props.match.path}/edit/:id`}>
                    <EditHabit update_list={this.update_list} />
                </Route>
            </Switch>
        </>
        );
    }
}
 
export default withRouter(HabitManager);