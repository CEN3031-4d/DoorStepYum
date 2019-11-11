import React from 'react';
import './BrowsebyChef.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function BrowsebyChef() {

    return (
        <div>
	    <header id="page-header"></header>
       
    <div class="wrapper">
    <nav id="sidebar"> 
        <div class = "row">
        <div class = "button1"><button class="btn btn-info active" type="button" style={{backgroundColor: 'darkgreen'}}>Browse by Chef</button></div>
        <div class= "button2"><a class="btn btn-info" type="button" style={{backgroundColor: 'green'}}><Link to="/BrowsebyDish" style={{textDecoration: 'none'}}>Browse by Dish</Link></a></div>
        </div>
        
        <div class ="searchwrapper">
        <input type="search" placeholder="Search..." style={{padding: '8px'}}/>
        </div>

        <div class = "filterheader">
        <h6>Filters</h6>
        </div>

        <h1 style={{fontSize: '13px', marginTop: '15px', marginLeft: '10%'}}>Cuisine Type</h1>
        
        <table class="table" id="tablecuisine">
                            <thead>
                                <tr></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-1"/><label class="form-check-label" for="formCheck-1">American</label></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-2"/><label class="form-check-label" for="formCheck-2">Italian</label></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-3"/><label class="form-check-label" for="formCheck-3">Chinese</label></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-4"/><label class="form-check-label" for="formCheck-4">Thai</label></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-5"/><label class="form-check-label" for="formCheck-5">Japanese</label></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-6"/><label class="form-check-label" for="formCheck-6">Mexican</label></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    <h1 class="h1style">Availability</h1>
                    <input type="date" style={{marginLeft: '10%', marginBottom: '30px'}} />
                    <h1 class="h1style">Years of Experience</h1>
                    <input id="slider" type="range" />
                    <h1 class="h1style">Price</h1>
                    <input id="slider" type="range" />
                    <h1 class="h1style">Rating</h1>
                    <input id="slider" type="range" />


    </nav>

    </div>
            
        </div>


    );
}
export default BrowsebyChef;