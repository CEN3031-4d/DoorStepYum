import React, { Component } from 'react';
import Encoder from '../Encoder/Encoder';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ViewChefProfile.css'
class ViewChefProfile extends Component {
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
            image: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/chef/find/' + this.props.match.params.id)
            .then(res => {
                this.setState(res.data);
                if (this.state.chefPicture) {
                    axios.get('http://localhost:5000/api/chef/image', {
                        params: {
                            Bucket: "chefpictures",
                            Key: this.state.chefPicture
                        }
                    })
                        .then(res => {
                            this.setState({ image: Encoder.imageEncode(res.data.Body.data) })
                        })
                        .catch(err => {
                            console.log(err, err.stack);
                        })
                }
                else
                  this.setState({ image: "/placeholder.png"})
            })


    }
    render() {
        return (
            <div className="entryTable">
                <Link to={'/Chefs'}>Return to Chefs</Link>
                <table>
                    <tbody>
                        <tr>
                            <td>Name: </td> <td>{this.state.chefName}</td>
                        </tr>
                        <tr>
                            <td>Bio: </td><td>{this.state.chefBio}</td>
                        </tr>
                        <tr>
                            <td>Experience: </td> <td>{this.state.chefExperience}</td>
                        </tr>
                        <tr>
                            <td>Email: </td> <td>{this.state.chefEmail}</td>
                        </tr>
                        <tr>
                            <td>Password: </td> <td>{this.state.chefPassword}</td>
                        </tr>
                        <tr>
                            <td>Price: </td> <td>{this.state.chefPrice}</td>
                        </tr>
                        <tr>
                            <td>Picture Filepath: </td> <td>{this.state.chefPicture}</td>
                        </tr>
                        <tr>
                            <td>Picture: </td> <td><img src={this.state.image}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ViewChefProfile