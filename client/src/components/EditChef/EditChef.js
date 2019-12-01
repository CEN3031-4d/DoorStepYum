import React, { Component } from 'react';
import axios from 'axios';
import './EditChef.css'
import { Link } from 'react-router-dom'
import Encoder from '../Encoder/Encoder'

class EditChef extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chefName: '',
            chefBio: '',
            chefExperience: '',
            chefEmail: '',
            chefPassword: '',
            chefPrice: '',
            chefPicture: '',
            regError: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }



    componentDidMount() {

        axios.get('http://localhost:5000/api/chef/find/' + this.props.match.params.id)
            .then(res => {
                this.setState(res.data);
            })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newChef = {
            chefName: this.state.chefName,
            chefBio: this.state.chefBio,
            chefExperience: this.state.chefExperience,
            chefEmail: this.state.chefEmail,
            chefPassword: this.state.chefPassword,
            chefPrice: this.state.chefPrice,
            chefPicture: this.state.chefPicture
        }

        axios.post('http://localhost:5000/api/chef/update/' + this.props.match.params.id, newChef)
            .then(res => {
                console.log(res.data);
                this.props.history.push('/Chefs');
            })
            .catch(err => {

                if (err.response.data.code === 11000) {
                    var errParse = err.response.data.errmsg.split('index: chef')[1].split('_')[0];
                    this.setState({ regError: 'Error: ' + errParse + ' is already in use' });
                }
                else
                    console.log(err.response);
            });
    }
    render() {
        return (
            <div className = "App1" id="App1">
            <div className = "App__Form" id="App__Form">
            <Link to={'/Chefs'} id="link">Return</Link>
            <h2 id='edittitle'>Edit Info</h2>
            <div className="FormCenter">
		    <p>{this.state.regError}</p>
			  <form className = "FormFields" onSubmit={this.onSubmit}>
				<div className="FormField">
					<label className="FormField__Label" htmlFor="name"> Full Name </label>
					<input type="text" id="name" className ="FormField__Input" 
					placeholder="Enter your full name" name="chefName"
                    value={this.state.chefName} onChange={this.onChange} />
				</div>
				
				
				<div className="FormField">
					<label className="FormField__Label" htmlFor="password"> Password </label>
					<input type={this.state.hidden ? "password" : "text"}
						id="password" 
						className ="FormField__Input" 
						value={this.state.password, this.state.chefPassword} 
						onChange={this.handlePasswordChange, this.onChange}
					
						placeholder="Enter your password" name="chefPassword" />
						
					<label className="FormField__CheckboxLabel">
						<input className = "FormField__Checkbox" type ="checkbox" name="hasAgreed" onClick={this.toggleShow}/> Show Password
					</label>
				</div>
				
				
				<div className="FormField">
					<label className="FormField__Label" htmlFor="email"> E-Mail Address </label>
					<input type="email" id="email" className ="FormField__Input" 
					placeholder="Enter your email" name="chefEmail" 
					 value={this.state.chefEmail} onChange={this.onChange}/>
				</div>
				
				
				<div className="FormField">
					<label className="FormField__Label" htmlFor="email"> Biography </label>
					<textarea type="bio" id="bio" className ="FormField__Input" 
					placeholder="Write a short Biography" name="chefBio" 
					 value={this.state.chefBio} onChange={this.onChange}/>
				</div>
				
				
				<div className="FormField">
					<label className="FormField__Label" htmlFor="experience"> Years of Experience </label>
					<input type="number" min="0"id="experience" className ="FormField__Input" 
					placeholder="Enter how many years of Experience" name="chefExperience" 
					value={this.state.chefExperience} onChange={this.onChange}/>
				</div>
				
				<div className="FormField">
					<label className="FormField__Label" htmlFor="experience"> Hourly Rate </label>
					<input type="number" min="0"id="price" className ="FormField__Input" 
					placeholder="Enter your hourly rate" name="chefPrice" 
					value={this.state.chefPrice} onChange={this.onChange}/>
				</div>
				
				
				<div className="FormField">
					<label className="FormField__Label" htmlFor="experience"> Pictures </label>
					<input type="file" id="picture" className ="FormField__Input" 
				     name="chefPicture" 
				    onChange={this.onChange}/>
				</div>
				
				<div className="FormField">
					<button className="FormField__Button mr-20" onClick={this.onSubmit}>Save Changes</button>
				</div>
				
				
			  </form>
              </div>
			</div>
            <div className = "App__Aside" id = "App__Aside"></div>
            </div>
        )
    }
}
export default EditChef;