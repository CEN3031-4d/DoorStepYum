import React, { Component } from 'react';
import axios from 'axios';
import Encoder from '../../components/Encoder/Encoder'
import './ChefProfile.css';

class ChefProfile extends Component {
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
          this.setState({ image: "/placeholder.png" })
      })
  }
  render() {
    return (
      <body is="dmx-app" id="index">
        <div class="container wappler-block">
          <div class="modal fade" id="bookChefModal" is="dmx-bs4-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title">Book this Chef</h3>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body"></div>
                <h3 class="font-weight-light">Question 1</h3>
                <select id="select1" class="custom-select">
                  <option value="1">Option One</option>
                  <option value="2">Option Two</option>
                  <option value="3">Option Three</option>
                </select>
                <h3 class="font-weight-lighter text-left">Question 2</h3>
                <select id="select2" class="custom-select">
                  <option value="1">Option One</option>
                  <option value="2">Option Two</option>
                  <option value="3">Option Three</option>
                </select>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button class="btn btn-outline-success font-weight-normal" data-toggle="modal" data-target="#bookChefModal">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="card">
                <img class="card-img-top rounded-bottom ml-0" alt="Card image cap" src="assets/images/ramsay.jpg" />
                <div class="card-body">
                  <h4 class="card-title">{this.state.chefName}&nbsp;
                <a href="#" class="badge badge-success">Pro</a>
                  </h4>
                  <p class="card-text">{this.state.chefBio}</p>
                  <a href="#" class="btn btn-block btn-outline-success font-weight-normal" data-toggle="modal" data-target="#bookChefModal">Book this Chef</a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 align-self-start">
              <h1 class="text-center font-weight-normal">Specialty Dishes
          </h1>
              <div class="row">
                <div class="col"><div id="specialityDishesCarousel" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src="assets/images/slideshow/cornishcod.jpg" alt="slide #1" />
                      <div class="carousel-caption d-none d-md-block w-auto">
                        <h5>Cornish Cod</h5>
                        <p>Classic English cod cooked in breadcrumbs</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="assets/images/slideshow/foiegras.jpg" alt="slide #2" />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Foie Gras</h5>
                        <p>Duck liver served with peppercorn mustard sauce</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="assets/images/slideshow/wellington2.jpg" alt="slide #3" />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Beef Wellington</h5>
                        <p>Gordon Ramsay's signature Beef Wellington</p>
                      </div>
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#specialityDishesCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#specialityDishesCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                </div>
              </div>
              <div class="row"><div class="col">
                <div class="accordion" id="accordion1">
                  <div class="card">
                    <div class="card-header" id="accordion1_headingOne">
                      <h5 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion1_collapseOne" aria-expanded="true" aria-controls="collapseOne">Specialization</button>
                      </h5>
                    </div>
                    <div id="accordion1_collapseOne" class="collapse" is="dmx-bs4-collapse" show="true" aria-labelledby="accordion1_headingOne" data-parent="#accordion1">
                      <div class="card-body">
                        Specialization text
                  </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="accordion1_headingTwo">
                      <h5 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#accordion1_collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Past Experience</button>
                      </h5>
                    </div>
                    <div id="accordion1_collapseTwo" class="collapse" is="dmx-bs4-collapse" aria-labelledby="accordion1_headingTwo" data-parent="#accordion1">
                      <div class="card-body">
                        Past experience text
                  </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="accordion1_headingThree">
                      <h5 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#accordion1_collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Reviews</button>
                      </h5>
                    </div>
                    <div id="accordion1_collapseThree" class="collapse" is="dmx-bs4-collapse" aria-labelledby="accordion1_headingThree" data-parent="#accordion1">
                      <div class="card-body">
                        Reviews
                  </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h1 class="text-center">Similar Chefs</h1>
              <div class="card-columns">
                <div class="card">
                  <img class="card-img-top" alt="Card image cap" src="assets/images/stockchef.jpg" />
                  <div class="card-body">
                    <h4 class="card-title">Chef #1&nbsp;
                  <a href="#" class="badge badge-success">Pro</a>
                    </h4>
                    <p class="card-text">Flavor text</p>
                    <a href="#" class="btn btn-primary">Go to this Chef</a>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" alt="Card image cap" src="assets/images/stockchef.jpg" />
                  <div class="card-body">
                    <h4 class="card-title">Chef #2&nbsp;
                  <a href="#" class="badge badge-info">Amatuer</a>
                    </h4>
                    <p class="card-text">Flavor text</p>
                    <a href="#" class="btn btn-primary">Go to this Chef</a>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" alt="Card image cap" src="assets/images/stockchef.jpg" />
                  <div class="card-body">
                    <h4 class="card-title">Chef #3&nbsp;
                  <a href="#" class="badge badge-danger">Restaraunt Chef</a>
                    </h4>
                    <p class="card-text">Flavor text</p>
                    <a href="#" class="btn btn-primary">Go to this Chef</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default ChefProfile;