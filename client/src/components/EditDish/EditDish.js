import React, { Component } from 'react';
import axios from 'axios';
import './EditDish.css'
import { Link } from 'react-router-dom'
import Encoder from '../Encoder/Encoder'
import uuidv4 from 'uuid/v4'

class EditChef extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishIngrCSV: '',
            dishIngredients: [],
            dishName: '',
            dishPrice: '',
            dishDescription: '',
            dishChef: '',
            dishPicture: '',
            image: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }



    componentDidMount() {

        axios.get('/api/dish/find/' + this.props.match.params.id)
            .then(res => {
                this.setState(res.data);
                let ingredientList = '';

                this.state.dishIngredients.forEach((e) => {
                    ingredientList += e += ','
                })
                ingredientList = ingredientList.substring(0, ingredientList.length - 1);
                this.setState({ dishIngrCSV: ingredientList })

            })
    }
    onChange = (e) => {
        if (e.target.type === 'file') {
            this.setState({
                [e.target.name]: e.target.value
            }, () => {
                if (this.state.newPicture) {
                    var fileExt = this.state.newPicture.split('.');
                    fileExt = fileExt[fileExt.length - 1]
                    this.setState({ filepath: uuidv4().concat('.', fileExt) });
                }
                else
                    this.setState({ filepath: '' })
            })
            if (e.target.files) {
                this.setState({ image: e.target.files[0] });
            }
            else
                this.setState({ image: '' });
        }
        else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newDish = {
            dishName: this.state.dishName,
            dishDescription: this.state.dishDescription,
            dishPrice: this.state.dishPrice,
            dishPicture: this.state.dishPicture,
            dishIngredients: this.state.dishIngrCSV.split(",")
        }

        if (this.state.filepath && this.state.image) {
            newDish.dishPicture = this.state.filepath;
        }

        axios.post('/api/dish/update/' + this.props.match.params.id, newDish)
            .then(res => {

                if (this.state.filepath && this.state.image) {
                    var form = new FormData();
                    form.append('bucket', 'yummydishes')
                    form.append('image', this.state.image)
                    form.append('filepath', this.state.filepath)
                    form.append('oldfilepath', this.state.dishPicture)

                    axios.post("/api/chef/image/update", form,
                        {
                            headers: {
                                'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
                            }
                        })
                        .then(res => {
                            console.log("Success!");
                        })
                        .catch(err => {
                            console.log(err.stack);
                        })
                }

                this.props.history.push('/Chefs');
            })
            .catch(err => {

                if (err.response.data.code === 11000) {
                    var errParse = err.response.data.errmsg.split('index: dish')[1].split('_')[0];
                    this.setState({ regError: 'Error: ' + errParse + ' is already in use' });
                }
                else
                    console.log(err.response);
            });
    }
    render() {
        return (
            <div className="App1" id="App1">
                <div className="App__Form" id="App__Form">
                    <Link to={'/Chefs'} id="link">Return</Link>
                    <h2 id='edittitle'>Edit Info</h2>
                    <div className="FormCenter">
                        <p>{this.state.regError}</p>
                        <form className="FormFields" onSubmit={this.onSubmit}>
                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="name"> Dish Name </label>
                                <input type="text" id="name" className="FormField__Input"
                                    placeholder="Enter your full name" name="dishName"
                                    value={this.state.dishName} onChange={this.onChange} />
                            </div>


                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="email"> Dish Description </label>
                                <textarea type="bio" id="bio" className="FormField__Input"
                                    placeholder="Write a short Biography" name="dishDescription"
                                    value={this.state.dishDescription} onChange={this.onChange} />
                            </div>

                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="email"> Dish Ingredients </label>
                                <textarea type="bio" id="bio" className="FormField__Input"
                                    placeholder="Write a short Biography" name="dishIngrCSV"
                                    value={this.state.dishIngrCSV} onChange={this.onChange} />
                            </div>

                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="experience"> Dish Price</label>
                                <input type="number" min="0" id="price" className="FormField__Input"
                                    placeholder="Enter your hourly rate" name="dishPrice"
                                    value={this.state.dishPrice} onChange={this.onChange} />
                            </div>


                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="experience"> Pictures </label>
                                <input type="file" id="picture" className="FormField__Input"
                                    name="newPicture"
                                    onChange={this.onChange} />
                            </div>

                            <div className="FormField">
                                <button className="FormField__Button mr-20" onClick={this.onSubmit}>Save Changes</button>
                            </div>


                        </form>
                    </div>
                </div>
                <div className="App__Aside" id="App__Aside"></div>
            </div>
        )
    }
}
export default EditChef;