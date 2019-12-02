import React, { Component } from 'react';
import './CreateDish.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';


class CreateDish extends Component {
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

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onUploadChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            if (this.state.dishPicture) {
                var fileExt = this.state.dishPicture.split('.');
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

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.dishName && this.state.dishDescription) {
            const newDish = {
                dishName: this.state.dishName,
                dishDescription: this.state.dishDescription,
                dishPrice: this.state.dishPrice,
                dishPicture: this.state.filepath,
                dishIngredients: this.state.dishIngrCSV.split(",")
            }

            axios.post('http://localhost:5000/api/dish/add', newDish)
                .then(res => {
                    console.log(this.state);
                    if (this.state.filepath && this.state.image) {
                        var form = new FormData();
                        form.append('bucket', 'yummydishes');
                        form.append('image', this.state.image)
                        form.append('filepath', this.state.filepath)

                        axios.post("http://localhost:5000/api/chef/image", form,
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

                    this.props.history.push("/Chefs");
                })
                .catch(err => {
                    /*  If the axios method returns an error code, it passes error data back
                        through 'err.response'. A 'err.response.data.code' value of 11000 means
                        that the database addition could not be complete due to a duplicate data
                        value in a unique property.
                    */
                    if (err.response.data.code === 11000) {

                        /*  'err.response.data.errmsg' is a string that contains information about the
                            duplicate that caused the error. It has the form of
        
                            E11000 duplicate key error collection: <db>.<collection> index: <property>_1 dup key: { : <value> }
        
                            I used String.split here a couple of times to isolate the exact property that 
                            was duplicated. 
        
                            For example
        
                                var errMessage = 'E11000 duplicate key error collection: class.chefs index: chefPassword_1 dup key: { : "Test Person" }'
                                var response1 = errMessage.split('index: ')[1].split('_')[0];
                                var response2 = errMessage.split('index: chef')[1].split('_')[0];
                                
                                #expected values:
                                #response1 == 'dishName'
                                #response2 == 'Name'            
                        */
                        var errParse = err.response.data.errmsg.split('index: dish')[1].split('_')[0];
                        this.setState({
                            regError: 'Error: ' + errParse + ' is already in use',
                            dishPicture: ''
                        });
                        console.log(this.state);
                    }
                    else
                        console.log(err.response);
                });
        }
        else {
            this.setState({ regError: 'Error: required field is missing' })
        }
    }

    render() {
        return (
            <div className="entryTable">
                <Link to={'/Chefs'}>Return to Backend</Link>
                <h3>Create New Dish</h3>
                <p>{this.state.regError}</p>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>
                                        <input type="text"
                                            name="dishName"
                                            value={this.state.dishName}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Description: </td>
                                    <td>
                                        <textarea
                                            name="dishDescription"
                                            rows="4"
                                            cols="50"
                                            value={this.state.dishDescription}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ingredients: </td>
                                    <td>
                                        <textarea
                                            name="dishIngrCSV"
                                            rows="4"
                                            cols="50"
                                            value={this.state.dishIngrCSV}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Price: </td>
                                    <td>
                                        <input type="number"
                                            name="dishPrice"
                                            value={this.state.dishPrice}
                                            onChange={this.onChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Picture:</td>
                                    <td>
                                        <input type="file"
                                            name="dishPicture"
                                            onChange={this.onUploadChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="submit"
                                            name="submit"
                                            onSubmit={this.onSubmit}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                </form>
            </div>
        )
    }
}
export default CreateDish;