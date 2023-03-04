import React from 'react';
import './App.css';
import './ToggleSwitch.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { OrderStatus } from './OrderStatus';
import TrackOrder from './TrackOrder';



function RestaurantHome() {

  return (

    <>
      <h3>Manage your Rail Restaurant Online</h3>
      <nav >
        <div className="form-check form-check-inline">
          <label>Go Live </label>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        
        <div className="form-check form-check-inline">
          <div className="mb-3">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" defaultChecked={true} name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label className="form-check-label" >Breakfast : 7am - 11 am</label>
            </div>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" defaultChecked={false} name="inlineRadioOptions" id="inlineRadio2" value="option2"  />
              <label className="form-check-label">Lunch : 12pm - 4 pm</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" defaultChecked={false} name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label className="form-check-label" >Snacks : 4pm - 7 pm</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" defaultChecked={false} name="inlineRadioOptions" id="inlineRadio2" value="option2"  />
              <label className="form-check-label" >Dinner : 7pm - 11 pm</label>
            </div>
          </div>
        </div>
        <div className="form-check form-check-inline">
          <button className="btn btn-primary btn-sm" target="_blank">Update/Add Menu</button>
        </div>
      </nav>
      <div className="form-check form-check-inline">

       
          <div className="form-check form-check-inline">
            <OrderStatus/>
          </div>
          <div className="form-check form-check-inline">
            <TrackOrder/>
          </div>

        
      </div>
    </>
  );
}

export default RestaurantHome;