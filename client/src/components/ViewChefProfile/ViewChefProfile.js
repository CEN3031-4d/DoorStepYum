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
            chefRequests: [],
            chefCuisineTypes: [],
            chefCuisineCSV: '',
            image: ''
        }
    }
    componentDidMount() {
<<<<<<< HEAD
        axios.get('https://yummy-doorstep.herokuapp.com/api/chef/find/' + this.props.match.params.id)
=======
        axios.get('/api/chef/find/' + this.props.match.params.id)
>>>>>>> a1792b43a652d3a1894bb035677186340b28f4b9
            .then(res => {
                this.setState(res.data);

                let cuisineList = '';

                this.state.chefCuisineTypes.forEach((e) => {
                    cuisineList += e += ', '
                })
                cuisineList = cuisineList.substring(0, cuisineList.length - 2);
                this.setState({ chefCuisineCSV: cuisineList })

                if (this.state.chefPicture) {
<<<<<<< HEAD
                    axios.get('https://yummy-doorstep.herokuapp.com/api/chef/image', {
=======
                    axios.get('/api/chef/image', {
>>>>>>> a1792b43a652d3a1894bb035677186340b28f4b9
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
                    this.setState({ image: "/placeholder.png" })
            })
    }
    reservations = () => {
        return this.state.chefRequests.map((curReq, i) => {
            return (
                <tr className="chefRow" key={i}>
                    <td>{curReq.customer}</td>
                    <td>{curReq.message}</td>
                    <td>{curReq.beginTime}</td>
                    <td>{curReq.endTime}</td>
                </tr>
            )
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
                            <td>Cuisine Types</td>
                            <td>
                                {this.state.chefCuisineCSV}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody><tr>
                        <td>Requester ID</td>
                        <td>Message</td>
                        <td>Begin Time</td>
                        <td>End Time</td>
                    </tr>
                        {this.reservations()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ViewChefProfile