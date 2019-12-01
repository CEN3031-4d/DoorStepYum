import React, { Component } from 'react';
import './BrowsebyDish.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import axios from 'axios'
import Encoder from '../../components/Encoder/Encoder'

import Card from './CardUI';

class BrowsebyDish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [],
            dishImages: []
        };
    }

    componentDidMount = () => {
        this.getDishes();
    }

    getDishes = () => {
        axios.get('http://localhost:5000/api/dish/getDishes')
            .then(res => {
                this.setState({ dishes: res.data })
                this.state.dishes.map((curDish, i) => {
                    if(!curDish.dishImage)
                    this.state.dishImages[i] = "/placeholder.png"
                    axios.get('http://localhost:5000/api/chef/image', {
                        params: {
                            Bucket: "yummydishes",
                            Key: curDish.dishPicture
                        }
                    })
                        .then(res => {
                            this.state.dishImages[i] = Encoder.imageEncode(res.data.Body.data)
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

    dish = () => {
        return this.state.dishes.map((curDish, i) => {
            return (
                <div className="col-md-4">
                    <Card imgsrc={this.state.dishImages[i]} title={curDish.dishName} id={curDish._id} />
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
                            <div class="wrapper">
                                <nav id="sidebar">
                                    <div class="row">
                                        <a id="button3" href="/BrowsebyChef" >Browse by Chef</a>
                                        <a id="button4" >Browse by Dish</a>
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
                                    <div class="range-slider">
                                    </div>


                                </nav>
                            </div>
                        </td>

                        <td>

                            <div className="DishCards">
                                <div className="container-fluid d-flex justify-content-center" id="containerfluid">
                                    <div className="row">
                                        {this.dish()}
                                    </div>
                                </div>
                            </div>

                        </td>
                    </tr>
                </table>

            </div>



        );
    }
}
export default BrowsebyDish;