import React, { Component } from 'react';
import axios from 'axios';
import Encoder from '../../components/Encoder/Encoder'
import './FoodProfile.css';

class FoodProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishIngredients: [],
      dishName: '',
      dishPrice: '',
      dishDescription: '',
      dishChef: '',
      dishPicture: '',
      image: '',
      imageChef: ''
    }
  }
  

  componentDidMount() {
    axios.get('http://localhost:5000/api/dish/findFull/' + this.props.match.params.id)
      .then(res => {
        console.log(res.data);
        this.setState(res.data);
        if (this.state.dishPicture) {
          axios.get('http://localhost:5000/api/chef/image', {
            params: {
              Bucket: "yummydishes",
              Key: this.state.dishPicture
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
        if(this.state.dishChef.chefPicture){
        axios.get('http://localhost:5000/api/chef/image', {
            params: {
              Bucket: "chefpictures",
              Key: this.state.dishChef.chefPicture
            }
          })
            .then(res => {
              this.setState({ imageChef: Encoder.imageEncode(res.data.Body.data) })
            })
            .catch(err => {
              console.log(err, err.stack);
            })
        }
        else{
          this.setState({ image: "/placeholder.png" })
        }
      })
  }

  render() {
    return (
      <body is="dmx-app">
        <div class="container wappler-block pt-3 pb-3">
          <div class="modal" id="purchaseDishModal" is="dmx-bs4-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Purchase this Dish</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>$$$</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-success btn-block" data-toggle="modal" data-target="#purchaseDishModal">Purchase this Dish</button>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-8 col-lg-9">
              <div class="card" id="FoodCard">
                <div class="card-header">{this.state.dishName}</div>
				<div className = "overflow">
                <img class="card-img-top" alt="image not found" src={this.state.image} />
			    </div>
			   <div class="card-body py-2 bg-dark">
                  <p class="text-light">{this.state.dishDescription}</p>
                  <button class="btn btn-block btn-lg btn-success" data-toggle="modal" data-target="#purchaseDishModal">Order this Dish</button></div>
             
			  </div>
              <br></br>
              
            </div>
            <div class="col-12 mb-3 col-md-4 col-lg-3"> 
              <div class="row">
                <div class="col">
                  <div class="card">
                    <div class="card-header text-center">Featured Chef</div>
                    <img class="card-img-top" alt="Card image cap" src={this.state.imageChef} />
                    <div class="card-body">
                      <h5 class="card-title">{this.state.dishChef.chefName}</h5>
                      <p class="card-text">{this.state.dishDescription}</p>
                      <a href="#" class="btn btn-primary btn-block">Book this Chef</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="card1_heading">
                  <h5 class="mb-0 text-center">
                   <div class="card-body text-center">Ingredients</div>
					         <div class="card-body">
					           <div> {this.state.dishIngredients.join(", ")} </div>
			             </div>
                  </h5>
                </div>
                <div id="card1_collapse" class="collapse" is="dmx-bs4-collapse" show="true" aria-labelledby="card1_heading" data-parent="">
                  <div class="card-body">
                    INGREDIENTS
                    INGREDIENTS
                    INGREDIENTS
                    INGREDIENTS
                    INGREDIENTS
                    INGREDIENTS
					</div>
                </div>
              </div>
              <div class="card-deck"></div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col">

                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default FoodProfile;