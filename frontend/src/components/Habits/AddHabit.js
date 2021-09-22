import React from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

class AddHabit extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            description: '',
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false
        };

        this.on_submit = this.on_submit.bind(this);
        this.on_input_change = this.on_input_change.bind(this);
        this.on_checkbox_change = this.on_checkbox_change.bind(this);
    }
    
    on_input_change = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    on_checkbox_change = (e) => {
        const state = this.state;
        state[e.target.id] = !state[e.target.id];
        this.setState(state);
    }

    on_submit = (e) => {
        e.preventDefault();

        const { 
            name,
            description,
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday
         } = this.state;

        axios.put('http://10.0.0.200:5000/habits', { 
            name,
            description,
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday
            })
            .then((result) => {
                console.log("Added Habit " + name);
                this.props.update_list();
            }).catch((error) => {
                console.log(error)
            });

        window.location.replace('/habits');        
    }

    render() {

        return (
            <>
                <h4>Add Habit</h4>
                <hr/>
                <form onSubmit={this.on_submit}>
                    <div className="row form-group">
                        <div className="col">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={this.on_input_change}/>
                        </div>
                        <div className="col">
                            <textarea type="text" className="form-control" id="description" name="description" placeholder="Description" onChange={this.on_input_change} rows="1"></textarea>
                        </div>
                    </div>
                    <u>Repeated On:</u>
                    <div className="row form-group col">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="monday" value="monday" onChange={this.on_checkbox_change}/>
                            <label className="form-check-label">Monday</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="tuesday" value="tuesday" onChange={this.on_checkbox_change}/>
                            <label className="form-check-label">Tuesday</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="wednesday" value="wednesday" onChange={this.on_checkbox_change}/>
                            <label className="form-check-label">Wednesday</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="thursday" value="thursday" onChange={this.on_checkbox_change}/>
                            <label className="form-check-label">Thursday</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="friday" value="friday" onChange={this.on_checkbox_change}/>
                            <label className="form-check-label">Friday</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="saturday" value="saturday" onChange={this.on_checkbox_change}/>
                            <label className="form-check-label">Saturday</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="sunday" value="sunday" onChange={this.on_checkbox_change}/>
                            <label className="form-check-label">Sunday</label>
                        </div>
                    </div>
                    <div className="row col">
                        <button type="submit" className="btn btn-primary mr-2">Submit</button>
                        <Link to={"/habits"} className={"btn btn-danger"}>Cancel</Link>
                    </div>
                </form>
            </>
        );
    }
}
 
export default AddHabit;