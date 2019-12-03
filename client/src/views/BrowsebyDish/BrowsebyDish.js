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
            dishImages: [],
            nameSearch: ''
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
                    if (!curDish.dishImage)
                        this.state.dishImages[i] = "/placeholder.png"
                    axios.get('http://localhost:5000/api/chef/image', {
                        params: {
                            Bucket: "yummydishes",
                            Key: curDish.dishPicture
                        }
                    })
                        .then(res => {
                            this.state.dishes[i].image = Encoder.imageEncode(res.data.Body.data)
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
        return this.state.dishes
            .filter(curDish => {
                return curDish.dishName.toLowerCase().indexOf(this.state.nameSearch.toLowerCase()) >= 0;
            })
            .map((curDish, i) => {
                return (
                    <div className="col-md-4">
                        <Card imgsrc={curDish.image} title={curDish.dishName} id={curDish._id} />
                    </div>
                )
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
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
                                        <a id="button3" href="/BrowsebyChef" >Browse by Chef</a>
                                        <a id="button4" >Browse by Dish</a>
                                    </div>

                                    <input type="search" id="searchbar" name="nameSearch" placeholder="Search..." value={this.state.nameSearch}
                                        onChange={this.handleChange} />
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