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
       
          <div class="row">
            <div class="col-12 col-md-4">
              <div class="card" id="chefprofilecard">
                <img id="chefprofilepic" class="card-img-top rounded-bottom ml-0" alt="Card image cap" src={this.state.image} />
                <div class="card-body">
                  <h4 id="chefName" class="card-title">{this.state.chefName}&nbsp;
                  </h4>
                  <p id="bio" class="card-text">{this.state.chefBio}</p>
                  <div class="card">
                    <div class="card-header" id="accordion1_headingOne">
                      <h5 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion1_collapseOne" aria-expanded="true" aria-controls="collapseOne">Cusine Type</button>
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
                  <a href="#" id="requestbutton" class="btn btn-block btn-outline-success font-weight-normal" data-toggle="modal" data-target="#bookChefModal">Submit Booking Request</a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-8 align-self-start">
             
            
                  
                 
                </div>
              </div>
              
       
      </body>
    );
  }
}

export default ChefProfile;