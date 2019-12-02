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
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
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
      time: '',
      date: '',
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'gray';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  onChange = ctime => this.setState({ time: ctime })
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
                <button onClick={this.openModal} class="btn btn-block btn-outline-success font-weight-normal">Request this Chef</button>

                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  ariaHideApp={false}
                  style={customStyles}
                  contentLabel="Example Modal"
                >

                  <div className="App__Form" id="App__Form3">
                    <div className="FormCenter">

                      <h2 className="headerRequest" ref={subtitle => this.subtitle = subtitle}>Request {this.state.chefName} </h2>

                      <div className="selectRequest">Pick a time to reserve {this.state.chefName}</div>

                      <form className="FormFields">
                        <div>
                          <Calendar
                            onChange={this.onChange}
                            value={this.state.date}
                          />
                        </div>
                        <div className="TimePicker">
                          <TimePicker
                            onChange={this.onChange}
                            value={this.state.time}
                          />
                        </div>
                        <div className="FormField">
                          <label id="Msg" className="FormField__Label" htmlFor="email"> Write a Message </label>
                          <textarea type="Msg" id="Msg" className="FormField__Input"
                            placeholder="What would you like the chef to know?" name="customerMessage"
                          />
                        </div>
                      </form>

                      <button class="btn btn-block btn-outline-success font-weight-normal">Submit Request</button>
                      <button onClick={this.closeModal} class="btn btn-block btn-outline-success font-weight-normal">close</button>

                    </div>
                  </div>
                </Modal>

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