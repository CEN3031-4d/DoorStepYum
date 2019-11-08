import React, { Component } from 'react';
import './CreateChef.css'
import axios from 'axios';

class CreateChef extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chefName: 'Aaron Person',
            chefBio: 'Example Bio',
            chefExperience: '5',
            chefEmail: 'TestEmail@Test.Email',
            chefPassword: 'password123',
            chefPrice: '40',
            chefPicture: 'testString'
        }
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
        const newChef = {
            chefName: this.state.chefName,
            chefBio: this.state.chefBio,
            chefExperience: this.state.chefExperience,
            chefEmail: this.state.chefEmail,
            chefPassword: this.state.chefPassword,
            chefPrice: this.state.chefPrice,
            chefPicture:this.state.chefPicture
        }

        axios.post('http://localhost:5000/api/chef/add', newChef)
            .then(res => console.log(res.data));

        console.log(newChef);

        this.setState({
            chefName: '',
            chefBio: '',
            chefExperience: '',
            chefEmail: '',
            chefPassword: '',
            chefPrice: '',
            chefPicture:''
        })
    }

    render() {
        return (
            <div className="createChef">
                <h3>Create New Chef</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="entryTable">
                        <tr>
                            <td>Name:</td>
                            <input type="text"
                                name="chefName"
                                value={this.state.chefName}
                                onChange={this.onChange}
                            />
                        </tr>
                        <tr>
                            <td>Bio: </td>
                            <td>
                                <input type="textarea"
                                    name="chefBio"
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
                            <input type="text"
                                name="chefPicture"
                                placeholder="Picture Filepath"
                                value={this.state.chefPicture}
                                onChange={this.onChange}
                            />
                        </tr>
                        <tr>
                            <td>
                                <input type="submit"
                                    name="submit"
                                    onSubmit={this.onSubmit}
                                />
                            </td>
                        </tr>
                    </div>



                </form>
            </div>
        )
    }
}
export default CreateChef;