import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AllChefs.css'
import axios from 'axios';


class AllChefs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chefs: []
        };
    }


    //This function is called when the component is mounted
    componentDidMount = () => {
        this.getChefs();
    }

    getChefs = () => {
        axios.get('https://yummy-doorstep.herokuapp.com/api/chef/getChefs')
            .then(res => {
                this.setState({ chefs: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    chefs = () => {
        return this.state.chefs.map((curChef, i) => {
            return (
                <tr className="chefRow" key={i}>
                    <td><Link className="chefLink" to={'Chefs/view/' + curChef._id}>{curChef.chefName}</Link></td>
                    <td><Link className="chefLink" to={'Chefs/edit/' + curChef._id}>Edit</Link></td>
                    <td><button onClick={() => this.deleteChef(curChef._id)}>Delete</button></td>
                </tr>
            )
            /* 
                This following two components make CRUD requests using ids, using different methods

                <Link className="chefLink" to={'Chefs/edit/' + curChef._id}>Edit</Link>
                    This link appends the _id of the target chef to the end of the URL that it redirects you to. Inside 
                    EditChef this property is accessed using 'this.props.match.params.id'. The property (id) is named in 
                    the pathname of the route in client/src/app.js ("/Chefs/edit/:id" in this case)

                <button onClick={() => this.deleteChef(curChef._id)}>Delete</button>
                    This button just passes the _id of the Chef entry to a function that makes the axios call directly.
                    The deleteChef method then appends _id to the end of the delete request endpoint.
                    
            */
        })
    }

    deleteChef = (id) => {

        axios.delete('https://yummy-doorstep.herokuapp.com/api/chef/delete/' + id)
            .then(res => {
                console.log(res.data);
                this.getChefs(); //This refreshed the data after a successful delete has occurred.
            })
            .catch((err) => {
                console.log(err);
            });

    }


    render() {
        return (
            <div className="chefsTab">
                <Link className="chefLink" to='Chefs/create'>Create Chefs</Link>
                <table style={{ marginTop: 20, width: 400 }}>
                    <thead>
                        <tr className="chefRow">
                            <th>Name</th>
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
export default AllChefs;