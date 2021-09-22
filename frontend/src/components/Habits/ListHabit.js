import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ListHabit extends React.Component {
    constructor(props) {
        super(props);

        this.delete_habit = this.delete_habit.bind(this);
    }

    delete_habit() {
        axios.delete('http://10.0.0.200:5000/habits/' + this.props.habit._id)
            .then(res => {
                this.props.update_list();
            }).catch((error) => {
                console.log(error)
            });
    }

    render() {
        if (this.props.habit !== undefined) {
            let habit = this.props.habit;

            return (
                <>
                <tr>
                    <td>{habit.name}</td>
                    <td>{habit.description}</td>
                    <td><Link to={`/habits/edit/${habit._id}`} className={"btn btn-secondary"}>Edit</Link></td>
                    <td><button className="btn btn-danger" onClick={this.delete_habit}>Delete</button></td>
                </tr>
                <tr>
                    <td colSpan="4">
                        <div className="d-flex seven-cols justify-content-between">
                            <div className={`col-md-1 habit-day ${ habit.days[0] ? 'active-day' : ''}`}></div>
                            <div className={`col-md-1 habit-day ${ habit.days[1] ? 'active-day' : ''}`}></div>
                            <div className={`col-md-1 habit-day ${ habit.days[2] ? 'active-day' : ''}`}></div>
                            <div className={`col-md-1 habit-day ${ habit.days[3] ? 'active-day' : ''}`}></div>
                            <div className={`col-md-1 habit-day ${ habit.days[4] ? 'active-day' : ''}`}></div>
                            <div className={`col-md-1 habit-day ${ habit.days[5] ? 'active-day' : ''}`}></div>
                            <div className={`col-md-1 habit-day ${ habit.days[6] ? 'active-day' : ''}`}></div>
                        </div>
                    </td>
                </tr>
                </>
            );
        }
    }
}

export default ListHabit;