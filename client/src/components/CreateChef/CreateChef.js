import React, { Component } from 'react';
import './CreateChef.css'

class CreateChef extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chefName: '',
            chefBio: '',
            chefExperience: '',
            chefEmail: '',
            chefPassword: '',
            chefPrice: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        //Comeback when backend is connected
        console.log('Form submitted:');
        console.log(`Chef Name: ${this.state.chefName}`);
        console.log(`Chef Bio: ${this.state.chefBio}`);
        console.log(`Chef Experience: ${this.state.chefExperience}`);
        console.log(`Chef Email: ${this.state.chefEmail}`);

        this.setState({
            chefName: '',
            chefBio: '',
            chefExperience: '',
            chefEmail: '',
            chefPassword: '',
            chefPrice: '',
        })
    }

    render() {
        return (
            <div className="createChef">
                <h3>Create New Chef</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name: </label>
                        <input type="text"
                            name="chefName"
                            value={this.state.chefName}
                            onChange={this.onChange}
                        /><br></br>
                        <label>Bio: </label>
                        <input type="textarea"
                            name="chefBio"
                            value={this.state.chefBio}
                            onChange={this.onChange}
                        /><br></br>
                        <label>Experience: </label>
                        <input type="number"
                            name="chefExperience"
                            min="0"
                            value={this.state.chefExperience}
                            onChange={this.onChange}
                        /><br></br>
                        <label>Email: </label>
                        <input type="email"
                            name="chefEmail"
                            value={this.state.chefEmail}
                            onChange={this.onChange}
                        /><br></br>
                        <label>Password: </label>
                        <input type="password"
                            name="chefPassword"
                            value={this.state.chefPassword}
                            onChange={this.onChange}
                        /><br></br>
                        <label>Price: </label>
                        <input type="text"
                            name="chefPrice"
                            value={this.state.chefPrice}
                            onChange={this.onChange}
                        /><br></br>
                        <input type="submit"
                            name="submit"
                            onSubmit={this.onSubmit}
                            />
                    </div>



                </form>
            </div>
        )
    }
}
export default CreateChef;