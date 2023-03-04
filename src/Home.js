import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import TrackOrder from './TrackOrder';


function Home() {
  const navigate = useNavigate();
  const [pnrShow, setStatus] = React.useState(true)

  const radioPNRHandler = (status) => {
    setStatus(status);
    console.log( "PNR" + status);
  };
  return (
    <div className="row">
      <div className="col-md-5">
        <h2>Order food Now!</h2>
        <p>Delicious food is just a click away</p>

        <div className="mb-3">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" defaultChecked={true} name="inlineRadioOptions" id="inlineRadio1" value="option1" onClick={(e) => radioPNRHandler(true)} />
            <label className="form-check-label" for="inlineRadio1">Order Via PNR</label>
          </div>

          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" defaultChecked={false} name="inlineRadioOptions" id="inlineRadio2" value="option2" onClick={(e) => radioPNRHandler(false)} />
            <label className="form-check-label" for="inlineRadio2">Order Via Train No.</label>
          </div>
        </div>

        { !pnrShow &&
        <div id='Train'>
          <h3>Enter Train number</h3>
          <input className="form-control" placeholder='Train No.' type='text' height='100px' width='400px' />
          <button className="btn btn-primary" onClick={() => {
            if(sessionStorage.getItem("CredentialsCustomer") !== null)
            navigate("/Customer")
          }}> Order Now!</button>
        </div>
}
{ pnrShow &&
        <div id='PNR'>
          <h3>Enter PNR number</h3>
          <input  className="form-control" placeholder='PNR No.' type='text' height='100px' width='400px' />
          {/* <button className='OrderNowBtn' >Order Now!</button> */}
          <button type="submit" onClick={() => {
            if(sessionStorage.getItem("CredentialsCustomer") !== null)
            navigate("/Customer")
          else
            navigate("/login")
          }} className="btn btn-primary">
            Order Now!
          </button>
        </div>
}


      </div>
      <div className="col-md-6">        
        <TrackOrder />
      </div>
    </div>
  );
}

export default Home;