import React, { Component } from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";
import Encoder from '../../components/Encoder/Encoder'
import './ChefProfile.css';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import ModalPop from './ModalPop';
import TimePicker from 'react-time-picker';
import Calendar from 'react-calendar';
import ReactDOM from 'react-dom';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



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
      image: '',
	  time:'10:00',
	  date:new Date(),
	  modalIsOpen: false
    };
	this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
	
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

 onChange = time => this.setState({ time })
  onChange = date => this.setState({ date })
  
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
                 
				<button onClick={this.openModal}>Open Modal</button>
					<Modal
					  isOpen={this.state.modalIsOpen}
					  onAfterOpen={this.afterOpenModal}
					  onRequestClose={this.closeModal}
						  ariaHideApp={false}
					  style={customStyles}
					  contentLabel="Example Modal"
					>
			 
					  <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
					  <button onClick={this.closeModal}>close</button>
					  <div>I am a modal</div>
							  <form>
								<input />
								 <div>
									<Calendar
									  onChange={this.onChange}
									  value={this.state.date}
									/>
								 </div>
								  <div>
									<TimePicker
									  onChange={this.onChange}
									  value={this.state.time}
									/>
								  </div>
								<button>tab navigation</button>
								<button>stays</button>
								<button>inside</button>
								<button>the modal</button>
							  </form>
					</Modal>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 align-self-start">
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