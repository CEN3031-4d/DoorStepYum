import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Chefs.css'
import axios from 'axios';

const Chef = props => (
    <tr className="chefRow">
        <td>{props.chef.chefName}</td>
        <td>{props.chef.chefBio}</td>
        <td>{props.chef.chefExperience}</td>
        <td>{props.chef.chefEmail}</td>
        <td>{props.chef.chefPassword}</td>
        <td>{props.chef.chefPrice}</td>
        <td>{props.chef.chefPicture}</td>
    </tr>
)

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chefs: []
        };
    }


    //This function is called when the component is mounted
    componentDidMount = () => {
        axios.get('http://localhost:5000/api/chef')
            .then(res => {
                this.setState({ chefs: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    chefs = () => {
        return this.state.chefs.map((curChef, i) => {
            return <Chef chef={curChef} key={i}/>
        })
    }

    render() {
        return (
            <div className="chefsTab">
                <h1>Testing DB Connections here.</h1>
                <Link className="chefLink" to='Chefs/create'>Create Chefs</Link>
                <table style={{ marginTop: 20 }}>
                    <thead>
                        <tr className="chefRow">
                            <th>Name</th>
                            <th>Bio</th>
                            <th>Experience</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Price</th>
                            <th>Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.chefs()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Projects;