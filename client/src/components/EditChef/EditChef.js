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

        axios.get('https://yummy-doorstep.herokuapp.com/api/chef/find/' + this.props.match.params.id)
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

        axios.post('https://yummy-doorstep.herokuapp.com/api/chef/update/' + this.props.match.params.id, newChef)
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
            <div className="entryTable">
                <Link to={'/Chefs'}>Return to Chefs</Link>
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
                                    <td>
                                        <input type="text"
                                            name="chefPicture"
                                            value={this.state.chefPicture}
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
export default EditChef;