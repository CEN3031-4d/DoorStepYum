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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


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
      time: '10:00',
      date: new Date(),
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

  onChangeTime = time => {
    this.setState({ time })
  }
  onChangeDate = date => {
    this.setState({ date })    
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitRequest = () => {
    var parsedBegin = this.state.date;
    parsedBegin.setHours(this.state.time.split(":")[0],this.state.time.split(":")[1]);
    var parsedEnd = new Date(parsedBegin.getTime() + this.state.hoursRequested*60*60*1000);
    let request = {
      customer: '5de36361b3778746e4c1e255',
      message: this.state.customerMessage,
      beginTime: parsedBegin,
      endTime: parsedEnd
    }

    axios.post('/api/chef/requests/add/' + this.state._id, request)
      .then(res => {
        console.log('Successful Request made')
      })
      .catch(err => {
        console.log(err)
      })

  }
  componentDidMount() {
    axios.get('/api/chef/find/' + this.props.match.params.id)
      .then(res => {
        this.setState(res.data);
        if (this.state.chefPicture) {
          axios.get('/api/chef/image', {
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
                  <Accordion allowZeroExpanded="true" allowMultipleExpanded="true">

                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Experience
                        </AccordionItemButton>
                      </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Experience text here
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Cuisine Style
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Cuisine style text here
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                </Accordion>
				<button onClick={this.openModal} class="btn btn-block btn-outline-success font-weight-normal">Request this Chef</button>
					
					<Modal
					  isOpen={this.state.modalIsOpen}
					  onAfterOpen={this.afterOpenModal}
					  onRequestClose={this.closeModal}
						  ariaHideApp={false}
					  style={customStyles}
					  contentLabel="Example Modal"
					>
				
					<div className = "App__Form" id="App__Form3">
						<div className = "FormCenter">
					
							  <h2 className="headerRequest" ref={subtitle => this.subtitle = subtitle}>Request {this.state.chefName} </h2>
						
							 <div className= "selectRequest">Pick a time to reserve {this.state.chefName}</div>
							  
									  <form className = "FormFields">
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
												<label id="hoursRequested" className="FormField__Label" htmlFor="experience"> Hours Requested </label>
												<input type="number" min="1" id="hoursRequested" className="FormField__Input"
													placeholder="Hours requested" name="hoursRequested"
											    />
											</div>
										  <div className="FormField">
											<label id="Msg" className="FormField__Label" htmlFor="email"> Write a Message </label>
											<textarea type="Msg" id="Msg" className ="FormField__Input" 
											placeholder="What would you like the chef to know?" name="customerMessage" 
											/>
										  </div>			
									  </form>
									  
										<button id= "SubmitRequestButton" class="btn btn-block btn-outline-success font-weight-normal">Submit Request</button>
										<button onClick={this.closeModal} class="btn btn-block btn-outline-success font-weight-normal">Close</button>
                    
              </div>
		        </div>
					</Modal>
          </div>
          </div>
          </div>
          <div class="col">
          <div class="card" id="carouselCard">
            <h2 align="center">Notable Dishes</h2>
              <Carousel width="500px" useKeyboardArrows={true} showIndicators={false} interval={3000} autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={false} showThumbs={false}>
                <div class="card" id="carouselItemCard">
                  <img src="https://i.imgur.com/VZ7qH8g.png" />
                  <h5 align="center">FOOD NAME</h5>
                  <button class="btn btn-outline-success">More about this food</button>
                </div>
                <div class="card" id="carouselItemCard">
                  <img src="https://i.imgur.com/VZ7qH8g.png" />
                  <h5>FOOD NAME</h5>
                  <button class="btn btn-outline-success">More about this food</button>
                </div>
                <div class="card" id="carouselItemCard">
                  <img src="https://i.imgur.com/VZ7qH8g.png" />
                  <h5>FOOD NAME</h5>
                  <button class="btn btn-outline-success">More about this food</button>
                </div>
              </Carousel>
          </div>
          </div>
          </div>
          </body>
    );
  }
}

export default ChefProfile;