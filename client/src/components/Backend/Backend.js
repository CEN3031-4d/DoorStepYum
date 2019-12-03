import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Backend.css'
import axios from 'axios';


class Backend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chefs: [],
            customers: [],
            dishes: []
        };
    }


    //This function is called when the component is mounted
    componentDidMount = () => {
        this.getChefs();
        this.getCustomers();
        this.getDishes();
    }

    getChefs = () => {
        axios.get('/api/chef/getChefs')
            .then(res => {
                this.setState({ chefs: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    getCustomers = () => {
        axios.get('/api/customer/getCustomers')
            .then(res => {
                this.setState({ customers: res.data })
            })
            .catch((err) => {
                console.log(err);
            })
    }
    getDishes = () => {
        axios.get('/api/dish/getDishes')
            .then(res => {
                this.setState({ dishes: res.data })
            })
            .catch((err) => {
                console.log(err);
            })
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
        })
    }

    customers = () => {
        return this.state.customers.map((curCust, i) => {
            return (
                <tr className="chefRow" key={i}>
                    <td><Link className="chefLink" to={'Customers/view/' + curCust._id}>{curCust.customerName}</Link></td>
                    <td><Link className="chefLink" to={'Customers/edit/' + curCust._id}>Edit</Link></td>
                    <td><button onClick={() => this.deleteCust(curCust._id)}>Delete</button></td>
                </tr>
            )
        })
    }

    dishes = () => {
        return this.state.dishes.map((curDish, i) => {
            return (
                <tr className="chefRow" key={i}>
                    <td><Link className="chefLink" to={'Dishes/view/' + curDish._id}>{curDish.dishName}</Link></td>
                    <td><Link className="chefLink" to={'Dishes/edit/' + curDish._id}>Edit</Link></td>
                    <td><button onClick={() => this.deleteDish(curDish._id)}>Delete</button></td>
                </tr>
            )
        })
    }

    deleteChef = (id) => {
                    
        axios.delete('/api/chef/delete/' + id)
            .then(res => {
                console.log(res.data);
                this.getChefs(); //This refreshed the data after a successful delete has occurred.
            })
            .catch((err) => {
                console.log(err);
            });

    }

    deleteCust = (id) => {

        axios.delete('/api/customer/delete/' + id)
            .then(res => {
                console.log(res.data);
                this.getCustomers();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    deleteDish = (id) => {

        axios.delete('/api/dish/delete/' + id)
            .then(res => {
                console.log(res.data);
                this.getDishes();
            })
            .catch((err) => {
                console.log(err);
            });

    }


    render() {
        return (
            <div className="chefsTab">
                <Link className="chefLink" to='Chefs/create' style={{ marginTop: 20 }}>Create Chefs</Link>
                <table style={{ width: 400 }}>
                    <thead>
                        <tr className="chefRow">
                            <th>Chefs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.chefs()}
                    </tbody>
                </table>
                <table style={{ marginTop: 20, width: 400 }}>
                    <thead>
                        <tr className="chefRow">
                            <th>Customers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.customers()}
                    </tbody>
                </table>
                <Link className="chefLink" to='Dishes/create' style={{ marginTop: 20 }}>Create Dish</Link>
                <table style={{ width: 400 }}>
                    <thead>
                        <tr className="chefRow">
                            <th>Dishes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.dishes()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Backend;