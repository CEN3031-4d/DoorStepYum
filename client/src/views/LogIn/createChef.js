import React,{ Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import uuidv4 from 'uuid/v4';

class createChef extends Component{
	 constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: "",
	  chefName: '',
      chefBio: '',
	  chefExperience: '',
	  chefEmail: '',
	  chefPassword: '',
	  chefPrice: '',
	  chefPicture: '',
	  filepath: '',
	  image: '',
	  regError: ''
    };
	
	this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
	this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
   onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            if (this.state.chefPicture)
                this.setState({ filepath: uuidv4().concat('.png') });
            else
                this.setState({ filepath: '' })
        })
        if (e.target.files) {
            this.setState({ image: e.target.files[0]});
        }
        else
            this.setState({ image: '' });
    }
	
	    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.chefName && this.state.chefBio && this.state.chefEmail && this.state.chefPassword) {
            const newChef = {
                chefName: this.state.chefName,
                chefBio: this.state.chefBio,
                chefExperience: this.state.chefExperience,
                chefEmail: this.state.chefEmail,
                chefPassword: this.state.chefPassword,
                chefPrice: this.state.chefPrice,
                chefPicture: this.state.filepath
            }

            axios.post('https://yummy-doorstep.herokuapp.com/api/chef/add', newChef)
                .then(res => {
                    console.log(res.data);
                    this.props.history.push("/Chefs");
                })
                .catch(err => {
                    /*  If the axios method returns an error code, it passes error data back
                        through 'err.response'. A 'err.response.data.code' value of 11000 means
                        that the database addition could not be complete due to a duplicate data
                        value in a unique property.
                    */
                    if (err.response.data.code === 11000) {

                        /*  'err.response.data.errmsg' is a string that contains information about the
                            duplicate that caused the error. It has the form of
        
                            E11000 duplicate key error collection: <db>.<collection> index: <property>_1 dup key: { : <value> }
        
                            I used String.split here a couple of times to isolate the exact property that 
                            was duplicated. 
        
                            For example
        
                                var errMessage = 'E11000 duplicate key error collection: class.chefs index: chefName_1 dup key: { : "Test Person" }'
                                var response1 = errMessage.split('index: ')[1].split('_')[0];
                                var response2 = errMessage.split('index: chef')[1].split('_')[0];
                                
                                #expected values:
                                #response1 == 'chefName'
                                #response2 == 'Name'            
                        */
                        var errParse = err.response.data.errmsg.split('index: chef')[1].split('_')[0];
                        this.setState({ regError: 'Error: ' + errParse + ' is already in use' });
                    }
                    else
                        console.log(err.response);
                });
            console.log(this.state);
            /*
            NOTE: This block doesn't currently function due to the backend not properly receiving FormData
            if (this.state.filepath && this.state.image) {
                var form = new FormData();
                form.append('image', this.state.image, this.state.filepath)

                console.log(form.get('image'));

                axios.post("http://localhost:5000/api/chef/test", form,
                    {
                  headers: {
                    'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
                  }
                })
                    .then(res => {
                        console.log("Success!");
                    })
                    .catch(err => {
                        console.log(err.stack);
                    })
            }
            */
        }
        else {
            this.setState({ regError: 'Error: required field is missing' })
        }
    }

  
  handlePasswordChange(a) {
    this.setState({ password: a.target.value });
  }

  
  
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }
	render(){
		return (
		<div className="FormCenter">
		<p>{this.state.regError}</p>
			  <form className = "FormFields" onSubmit={this.handleSubmit}>
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
					<button className="FormField__Button mr-20" onClick={this.onSubmit}>Sign Up</button>
					<Link to = "/loginChef" className = "FormField__Link"> I already have an account </Link>
				</div>
				
				
			  </form>
			</div>
		
		);
	}
}

export default createChef;