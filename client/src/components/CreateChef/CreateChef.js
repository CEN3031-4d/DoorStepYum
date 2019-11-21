import React, { Component } from 'react';
import './CreateChef.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';


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
            chefPicture: '',
            filepath: '',
            image: '',
            regError: ''
        }
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

            axios.post('http://localhost:5000/api/chef/add', newChef)
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

    render() {
        return (
            <div className="entryTable">
                <Link to={'/Chefs'}>Return to Chefs</Link>
                <h3>Create New Chef</h3>
                <p>{this.state.regError}</p>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>
                                        <input type="text"
                                            name="chefName"
                                            value={this.state.chefName}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bio: </td>
                                    <td>
                                        <textarea
                                            name="chefBio"
                                            rows="4"
                                            cols="50"
                                            value={this.state.chefBio}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Experience: </td>
                                    <td>
                                        <input type="number"
                                            name="chefExperience"
                                            min="0"
                                            value={this.state.chefExperience}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email: </td>
                                    <td>
                                        <input type="email"
                                            name="chefEmail"
                                            value={this.state.chefEmail}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Password: </td>
                                    <td>
                                        <input type="password"
                                            name="chefPassword"
                                            value={this.state.chefPassword}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Price: </td>
                                    <td>
                                        <input type="number"
                                            name="chefPrice"
                                            value={this.state.chefPrice}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Picture:</td>
                                    <td>
                                        <input type="file"
                                            name="chefPicture"
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="submit"
                                            name="submit"
                                            onSubmit={this.onSubmit}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                </form>
            </div>
        )
    }
}
export default CreateChef;