import React,{ Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import uuidv4 from 'uuid/v4';

class createCust extends Component{
	 constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: "",
	  customerName: '',
	  customerEmail: '',
	  customerPassword: '',
	  customerCart: ''
    };
	
	this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
	this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
   onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value  
        })
       
    }
	
	    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.customerName && this.state.customerEmail && this.state.customerPassword) {
            const newCustomer = {
                customerName: this.state.customerName,
                customerEmail: this.state.customerEmail,
                customerPassword: this.state.customerPassword
            }

            axios.post('http://localhost:5000/api/customer/add', newCustomer)
                .then(res => {
                    console.log(res.data);
                   
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
                        var errParse = err.response.data.errmsg.split('index: customer')[1].split('_')[0];
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
					placeholder="Enter your full name" name="customerName"
                    value={this.state.customerName} onChange={this.onChange} />
				</div>
				
				
				<div className="FormField">
					<label className="FormField__Label" htmlFor="password"> Password </label>
					<input type={this.state.hidden ? "password" : "text"}
						id="password" 
						className ="FormField__Input" 
						value={this.state.password, this.state.customerPassword} 
						onChange={this.handlePasswordChange, this.onChange}
					
						placeholder="Enter your password" name="customerPassword" />
						
					<label className="FormField__CheckboxLabel">
						<input className = "FormField__Checkbox" type ="checkbox" name="hasAgreed" onClick={this.toggleShow}/> Show Password
					</label>
				</div>
				
				
				<div className="FormField">
					<label className="FormField__Label" htmlFor="email"> E-Mail Address </label>
					<input type="email" id="email" className ="FormField__Input" 
					placeholder="Enter your email" name="customerEmail" 
					 value={this.state.customerEmail} onChange={this.onChange}/>
				</div>
				
				<div className="FormField">
					<button className="FormField__Button mr-20" onClick={this.onSubmit}>Sign Up</button>
					<Link to = "/loginCust" className = "FormField__Link"> I already have an account </Link>
				</div>
				
				
			  </form>
			</div>
		
		);
	}
}

export default createCust;