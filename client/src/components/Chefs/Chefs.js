import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Chefs.css'

class Projects extends Component {
    render() {
        return (
            <div className="chefsTab">
                <h1>Testing DB Connections here.</h1>
                <Link className="topnav-link" to='Chefs/create'>Create Chefs</Link>
                <Link className="topnav-link" to='Chefs/edit'>Edit Chefs</Link>
            </div>
        )
    }
}
export default Projects;