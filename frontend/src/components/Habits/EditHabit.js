import React from 'react';
import axios from 'axios';
import {
    Link,
    withRouter
} from "react-router-dom";

class EditHabit extends React.Component {

    constructor(props) {
        super(props);

        this.id = this.props.match.params.id;

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

        this.on_update = this.on_update.bind(this);
    }

    componentDidMount() {
        axios.get('http://10.0.0.200:5000/habits/' + this.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    description: res.data.description,
                    monday: res.data.days[0],
                    tuesday: res.data.days[1],
                    wednesday: res.data.days[2],
                    thursday: res.data.days[3],
                    friday: res.data.days[4],
                    saturday: res.data.days[5],
                    sunday: res.data.days[6],
                });
            }).catch((error) => {
                console.log(error);
            });
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

    on_update = (e) => {
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


        axios.patch('http://10.0.0.200:5000/habits/', { 
            name,
            description,
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday,
            id: this.id
            })
            .then((result) => {
                console.log("Updated Habit " + name);
                this.props.update_list();
            }).catch((error) => {
                console.log(error)
            });
            
        window.location.replace('/habits');        
    }

    render() {

        return (
            <>
                <h4>Edit Habit</h4>
                <hr/>
                <form onSubmit={this.on_update}>
                    <div className="row form-group">
                        <div className="col">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={this.on_input_change} value={this.state.name}/>
                        </div>
                        <div className="col">
                            <textarea type="text" className="form-control" id="description" name="description" placeholder="Description" onChange={this.on_input_change} value={this.state.description} rows="1"></textarea>
                        </div>
                    </div>
                    <u>Repeated On:</u>
                    <div className="row form-group col">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="monday" value="monday" checked={this.state.monday || false} onChange={this.on_checkbox_change}/>
                            <label className="form-check-label">Monday</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="tuesday" value="tuesday" checked={this.state.tuesday || false} onChange={this.on_checkbox_change}/>
                            <label className="form-check-label">Tuesday</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="wednesday" value="wednesday" checked={this.state.wednesday || false} onChange={this.on_checkbox_change}/>
                            <label className="form-check-label">Wednesday</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="thursday" value="thursday" checked={this.state.thursday || false} onChange={this.on_checkbox_change}/>
                            <label className="form-check-label">Thursday</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="friday" value="friday" checked={this.state.friday || false} onChange={this.on_checkbox_change}/>
                            <label className="form-check-label">Friday</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="saturday" value="saturday" checked={this.state.saturday || false} onChange={this.on_checkbox_change}/>
                            <label className="form-check-label">Saturday</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="sunday" value="sunday" checked={this.state.sunday || false} onChange={this.on_checkbox_change}/>
                            <label className="form-check-label">Sunday</label>
                        </div>
                    </div>
                    <div className="row col">
                        <button type="submit" className="btn btn-primary mr-2">Update</button>
                        <Link to={"/habits"} className={"btn btn-danger"}>Cancel</Link>
                    </div>
                </form>
            </>
        );
    }
}
 
export default withRouter(EditHabit);