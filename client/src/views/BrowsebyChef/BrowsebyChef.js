import React, { Component } from 'react';
import './BrowsebyChef.css';
import {
    BrowserRouter as Router,
    Redirect,
    Link
} from "react-router-dom";
import Card from './CardUI.js';
import axios from 'axios';
import Encoder from '../../components/Encoder/Encoder';


class BrowsebyChef extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chefs: [],
            chef1: '',
            chef2: '',
            chef3: '',
            chef4: '',
            chef5: '',
            chef0: '',
            text: "tes",
            image0: '',
            image1: '',
            image2: '',
            image3: '',
            image4: '',
            image5: '',
            id0: '',
            id1: '',
            id2: '',
            id3: '',
            id4: '',
            id5: ''
        };
    }


    componentDidMount = () => {
        this.getChefs();

    }

    getChefs = () => {
        axios.get('https://yummy-doorstep.herokuapp.com/api/chef/getChefs')
            .then(res => {
                this.setState({ chefs: res.data });
                axios.get('https://yummy-doorstep.herokuapp.com/api/chef/image', {
                    params: {
                        Bucket: "chefpictures",
                        Key: this.state.chefs[0].chefPicture
                    }
                })
                    .then(res => {
                        this.setState({ image0: Encoder.imageEncode(res.data.Body.data) })
                    })
                    .catch(err => {
                        console.log(err, err.stack);
                    })
                axios.get('https://yummy-doorstep.herokuapp.com/api/chef/image', {
                    params: {
                        Bucket: "chefpictures",
                        Key: this.state.chefs[1].chefPicture
                    }
                })
                    .then(res => {
                        this.setState({ image1: Encoder.imageEncode(res.data.Body.data) })
                    })
                    .catch(err => {
                        console.log(err, err.stack);
                    })
                axios.get('https://yummy-doorstep.herokuapp.com/api/chef/image', {
                    params: {
                        Bucket: "chefpictures",
                        Key: this.state.chefs[2].chefPicture
                    }
                })
                    .then(res => {
                        this.setState({ image2: Encoder.imageEncode(res.data.Body.data) })
                    })
                    .catch(err => {
                        console.log(err, err.stack);
                    })
                axios.get('https://yummy-doorstep.herokuapp.com/api/chef/image', {
                    params: {
                        Bucket: "chefpictures",
                        Key: this.state.chefs[3].chefPicture
                    }
                })
                    .then(res => {
                        this.setState({ image3: Encoder.imageEncode(res.data.Body.data) })
                    })
                    .catch(err => {
                        console.log(err, err.stack);
                    })
                axios.get('https://yummy-doorstep.herokuapp.com/api/chef/image', {
                    params: {
                        Bucket: "chefpictures",
                        Key: this.state.chefs[4].chefPicture
                    }
                })
                    .then(res => {
                        this.setState({ image4: Encoder.imageEncode(res.data.Body.data) })
                    })
                    .catch(err => {
                        console.log(err, err.stack);
                    })
                axios.get('https://yummy-doorstep.herokuapp.com/api/chef/image', {
                    params: {
                        Bucket: "chefpictures",
                        Key: this.state.chefs[5].chefPicture
                    }
                })
                    .then(res => {
                        this.setState({ image5: Encoder.imageEncode(res.data.Body.data) })
                    })
                    .catch(err => {
                        console.log(err, err.stack);
                    })




                this.setState({
                    chef0: this.state.chefs[0].chefName,
                    id0: this.state.chefs[0]._id,
                    chef1: this.state.chefs[1].chefName,
                    id1: this.state.chefs[1]._id,
                    chef2: this.state.chefs[2].chefName,
                    id2: this.state.chefs[2]._id,
                    chef3: this.state.chefs[3].chefName,
                    id3: this.state.chefs[3]._id,
                    chef4: this.state.chefs[4].chefName,
                    id4: this.state.chefs[4]._id,
                    chef5: this.state.chefs[5].chefName,
                    id5: this.state.chefs[5]._id
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }


    render() {
        return (
            <div>

                <table id="tablepage">
                    <tr id="tablepagecol">
                        <td id="tablepagerow">
                            <div class="wrapper">
                                <nav id="sidebar">
                                    <div class="row">
                                        <a id="button1" >Browse by Chef</a>
                                        <a id="button2" href="/BrowsebyDish">Browse by Dish</a>
                                    </div>

                                    <input type="search" id="searchbar" placeholder="Search..." />


                                    <div class="filterheader">
                                        <h6>Filters</h6>
                                    </div>

                                    <h1 style={{ fontSize: '13px', marginTop: '15px', marginLeft: '10%' }}>Cuisine Type</h1>

                                    <table class="table" id="tablecuisine">
                                        <thead>
                                            <tr></tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-1" /><label class="form-check-label" for="formCheck-1">American</label></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-2" /><label class="form-check-label" for="formCheck-2">Italian</label></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-3" /><label class="form-check-label" for="formCheck-3">Chinese</label></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-4" /><label class="form-check-label" for="formCheck-4">Thai</label></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-5" /><label class="form-check-label" for="formCheck-5">Japanese</label></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-6" /><label class="form-check-label" for="formCheck-6">Mexican</label></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <h1 class="h1style">Availability</h1>
                                    <input type="date" style={{ marginLeft: '10%', marginBottom: '30px' }} />
                                    <h1 class="h1style">Years of Experience</h1>
                                    <input id="slider" type="range" />
                                    <h1 class="h1style">Price</h1>
                                    <input id="slider" type="range" />
                                    <h1 class="h1style">Rating</h1>
                                    <input id="slider" type="range" />

                                </nav>
                            </div>
                        </td>

                        <td>

                            <div className="DishCards">
                                <div className="container-fluid d-flex justify-content-center" id="containerfluid">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <Card imgsrc={this.state.image0} title={this.state.chef0} id={this.state.id0}/>

                                        </div>
                                        <div className="col-md-4">
                                            <Card imgsrc={this.state.image1} title={this.state.chef1} id={this.state.id1}/>
                                        </div>
                                        <div className="col-md-4">
                                            <Card imgsrc={this.state.image2} title={this.state.chef2} id={this.state.id2} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="DishCards">
                                <div className="container-fluid d-flex justify-content-center" id="containerfluid">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <Card imgsrc={this.state.image3} title={this.state.chef3} id={this.state.id3}/>
                                        </div>
                                        <div className="col-md-4">
                                            <Card imgsrc={this.state.image4} title={this.state.chef4} id={this.state.id4}/>
                                        </div>
                                        <div className="col-md-4">
                                            <Card imgsrc={this.state.image5} title={this.state.chef5} id={this.state.id5} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </td>
                    </tr>
                </table>

            </div >
        );
    }
}
export default BrowsebyChef;