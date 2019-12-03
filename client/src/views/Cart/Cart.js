import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './Cart.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: '',
    };
  }

  componentWillMount = () => {
    this.getCart();
  }

  getCart = () => {
    if (this.props.match.params.id) {
      Axios.get("http://localhost:5000/api/customer/find/" + this.props.match.params.id)
        .then(res => {
          this.setState({ customer: res.data })
        })
    }
  }

  nameLabel = () => {
    if (!this.props.match.params.id)
      return ("No Users Cart");
    else {
      return (this.state.customer.customerName + "'s Cart");
    }
  }

  cart = () => { 
    console.log()
    /*
    return this.state.customer.customerCart.map((curDish,i) => {
      return (
        <tr>
        <th scope="row" class="border-0">
          <div class="p-2">
            <img src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg" alt="" width="70" class="img-fluid rounded shadow-sm" />
            <div class="ml-3 d-inline-block align-middle">
              <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">Timex Unisex Originals</a></h5>
            </div>
          </div>
        </th>
        <td class="border-0 align-middle"><strong>$79.00</strong></td>
        <td class="border-0 align-middle"><strong>3</strong></td>
        <td class="border-0 align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a></td>
      </tr>
      )
    }) 
    */
  }

  render() {
    return (
      <div class="px-4 px-lg-0">

        <div class="col-12">
          <div class="h1 text-center">{this.nameLabel()}</div>
        </div>
        <div class="pb-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">


                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col" class="border-0 bg-light">
                          <div class="p-2 px-3 text-uppercase">Product</div>
                        </th>
                        <th scope="col" class="border-0 bg-light">
                          <div class="py-2 text-uppercase">Price</div>
                        </th>
                        <th scope="col" class="border-0 bg-light">
                          <div class="py-2 text-uppercase">Quantity</div>
                        </th>
                        <th scope="col" class="border-0 bg-light">
                          <div class="py-2 text-uppercase">Remove</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.cart()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="row py-5 p-4 bg-white rounded shadow-sm">
              <div class="col-lg-6">
                <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for chef</div>
                <div class="p-4">
                  <p class="font-italic mb-4">If you have special requests for the chef you can leave them in the box below</p>
                  <textarea name="" cols="30" rows="2" class="form-control"></textarea>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                <div class="p-4">
                  <p class="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                  <ul class="list-unstyled mb-4">
                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal </strong><strong>$390.00</strong></li>
                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Tax</strong><strong>$0.00</strong></li>
                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                      <h5 class="font-weight-bold">$400.00</h5>
                    </li>
                  </ul><a href="#" class="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }
} export default Cart;

