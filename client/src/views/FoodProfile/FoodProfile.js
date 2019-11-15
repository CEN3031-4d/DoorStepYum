import React from 'react';
import './FoodProfile.css';

function FoodProfile() {
    return(
    <body is="dmx-app">
    <div class="container wappler-block pt-3 pb-3">
      <div class="modal" id="purchaseDishModal" is="dmx-bs4-modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-scrollable" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Purchase this Dish</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <p>$$$</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-success btn-block" data-toggle="modal" data-target="#purchaseDishModal">Purchase this Dish</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-8 col-lg-9">
          <div class="card">
            <div class="card-header">FOIE GRAS</div>
            <img class="card-img-top" alt="image not found" src="assets/images/1.jpg"/>
            <div class="card-body py-2 bg-dark">
              <p class="text-light">Foie gras is a specialty food product made of the liver of a duck or goose that has been especially fattened. By French law, foie gras is defined as the liver of a duck or goose fattened by force-feeding corn with a feeding tube, a process also known as gavage.</p>
              <button class="btn btn-block btn-lg btn-success" data-toggle="modal" data-target="#purchaseDishModal">Order this Dish</button></div>
          </div>
          <br></br>
          <h4>REVIEWS</h4>
          <p>SAMPLE REVIEWS HERE
          <form id="form1">
            <input id="text1" name="text1" type="text" class="form-control form-control-lg" placeholder="Write a review..."/>
          </form></p>
      </div>
      <div class="col-12 mb-3 col-md-4 col-lg-3">
        <div class="card">
          <div class="card-header" id="card1_heading">
            <h5 class="mb-0 text-center">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#card1_collapse" aria-expanded="true" aria-controls="collapse">
                Ingredients</button>
            </h5>
          </div>
          <div id="card1_collapse" class="collapse" is="dmx-bs4-collapse" show="true" aria-labelledby="card1_heading" data-parent="">
            <div class="card-body">
              INGREDIENTS
              INGREDIENTS
              INGREDIENTS
              INGREDIENTS
              INGREDIENTS
              INGREDIENTS
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-header text-center">Featured Chef</div>
              <img class="card-img-top" alt="Card image cap" src="assets/images/ramsay.jpg"/>
              <div class="card-body">
                <h5 class="card-title">Gordon Ramsay</h5>
                <p class="card-text">Gordon Ramsay's Foie Gras has won 3 Michelin Star Awards and has been feautred in several of his top-rated restaraunts.</p>
                <a href="#" class="btn btn-primary btn-block">Book this Chef</a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-deck"></div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <h1 class="text-center font-weight-light">Other Dishes like This</h1>
            <div class="card-columns">
              <div class="card">
                <div class="card-header">Beef Wellington</div>
                <img class="card-img-top" alt="image not found" src="assets/images/3.jpg"/>
                <div class="card-body py-2 bg-dark">
                  <button class="btn btn-block btn-lg btn-primary">Go to this Dish</button>
                </div>
              </div>
              <div class="card">
                <div class="card-header">Beef Welligton Again</div>
                <img class="card-img-top" alt="image not found" src="assets/images/3.jpg"/>
                <div class="card-body py-2 bg-dark">
                  <button class="btn btn-primary btn-block btn-lg">Go to this Dish</button>
                </div>
              </div>
              <div class="card">
                <div class="card-header">California Rolls</div>
                <img class="card-img-top" alt="image not found" src="assets/images/4.jpg"/>
                <div class="card-body py-2 bg-dark">
                  <button class="btn btn-block btn-lg btn-primary bg-primary">Go to this Dish</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</body>
    );
}

export default FoodProfile;