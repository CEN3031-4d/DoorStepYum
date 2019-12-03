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
import { RangeSlider } from 'reactrangeslider';


class BrowsebyChef extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chefs: [],
            chefImages: [],
            nameSearch: "",
            cuisineSearch: [],
            American: false
        };

    }

    handleChange = (event) => {
        if (event.target.type === 'checkbox') {
            if(event.target.checked)
            {
                this.state.cuisineSearch.push(event.target.name);
            }
            if(!event.target.checked)
            {
                this.state.cuisineSearch.splice(this.state.cuisineSearch.indexOf(event.target.name), 1)
            }
            this.setState({
                [event.target.name]: event.target.checked
            })
        }
        else {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    }

    componentDidMount = () => {
        this.getChefs();
    }

    getChefs = () => {
        axios.get('/api/chef/getChefs')
            .then(res => {
                this.setState({ chefs: res.data })
                this.state.chefs.map((curChef, i) => {
                    if (!curChef.chefImage)
                        this.state.chefs[i].image = "/placeholder.png"
                    axios.get('/api/chef/image', {
                        params: {
                            Bucket: "chefpictures",
                            Key: curChef.chefPicture
                        }
                    })
                        .then(res => {
                            this.state.chefs[i].image = Encoder.imageEncode(res.data.Body.data)
                            this.forceUpdate() //find a better way to accomplish this? --Ben
                        })
                        .catch(err => {
                            console.log(err, err.stack);
                        })
                })

            })
            .catch((err) => {
                console.log(err);
            });
    }
    chefs = () => {
        return this.state.chefs
            .filter(curChef => {
                return (curChef.chefName.toLowerCase().indexOf(this.state.nameSearch.toLowerCase()) >= 0 
                && this.state.cuisineSearch.every(val=>{return curChef.chefCuisineTypes.includes(val)}));
            })
            .map((curChef, i) => {
                return (
                    <div className="col-md-4">
                        <Card imgsrc={curChef.image} title={curChef.chefName} id={curChef._id} />
                    </div>
                )
            })
    }

    render() {
        return (
            <div>

                <table id="tablepage">
                    <tr id="tablepagecol">
                        <td id="tablepagerow">
                            <div class="wrapper" id="wrapper2">
                                <nav id="sidebar">
                                    <div class="row">
                                        <a id="button1" >Browse by Chef</a>
                                        <a id="button2" href="/BrowsebyDish">Browse by Dish</a>
                                    </div>

                                    <input type="search" id="searchbar" name="nameSearch" placeholder="Search..." value={this.state.nameSearch}
                                        onChange={this.handleChange} />


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
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-1" checked={this.state.American} onChange={this.handleChange} name="American" /><label class="form-check-label" for="formCheck-1">American</label></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-2" checked={this.state.Italian} onChange={this.handleChange} name="Italian" /><label class="form-check-label" for="formCheck-2">Italian</label></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-3" checked={this.state.Chinese} onChange={this.handleChange} name="Chinese" /><label class="form-check-label" for="formCheck-3">Chinese</label></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-4" checked={this.state.Thai} onChange={this.handleChange} name="Thai"/><label class="form-check-label" for="formCheck-4">Thai</label></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-5" checked={this.state.Japanese} onChange={this.handleChange} name="Japanese" /><label class="form-check-label" for="formCheck-5">Japanese</label></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-6" checked={this.state.Mexican} onChange={this.handleChange} name="Mexican" /><label class="form-check-label" for="formCheck-6">Mexican</label></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    

                                   

                                </nav>
                            </div>
                        </td>

                        <td>

                            <div className="DishCards">
                                <div className="container-fluid d-flex justify-content-center" id="containerfluid">
                                    <div className="row">
                                        {this.chefs()}
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