import './App.css'
import logoImage from './Images/RailAppLogo.png'
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'
import SignUp from './Signup'
import Navbar from './NavBar';
import Payment from './payment'
import RestaurantHome from './RestaurantHome'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import { OrderStatus } from './OrderStatus'
import Customer from './Customer'


function App() {

  return (
     <div>
      <Navbar/>
  <div className='grid-container'>
    <div className='item1'>
      <img alt='why' className='Logoimage' src={logoImage}/>
      <div className='header'>        
      <div className="Home">        
        <Routes>
            <Route path="/" element={<Home/>} />    
            <Route path="/Login" element={<Login/>}/>  
            <Route path="/LogOff" element={<Login/>}/>  
            <Route path="/Signup" element={<SignUp/>}/>  
            <Route path="/Payment" element={<Payment/>}/>   
            <Route path="/RestaurantHome" element={<RestaurantHome/>}/>  
            <Route path="/OrderStatus" element={<OrderStatus/>}/>  
            <Route path="/Customer" element={<Customer/>}/>  

        </Routes>
    </div>
      </div>
        <div className='parent'>
          <div className='div1'>
           
          </div>
        </div>
    </div>
    {/* <div className='item2'>
       <div className='sidenav'>
        <a  className='aboutAnchor' href='https://boeing.service-now.com/worklife'>About</a>
        <a href='https://boeing.service-now.com/worklife'>Services</a>
        <a href='https://boeing.service-now.com/worklife'>PNR Status</a>
        <a href='https://boeing.service-now.com/worklife'>Contact</a>
      </div> 
    </div> */}
       
    {/* <div className='item3'>
      <div className='orderFoodArea'>
        <h2>Order food from the comfort of your train seat online</h2>
        <p>Delicious food is a click away</p>
        
        <div className='tab'>
          <button className='tablinks' onClick={(e) => {
            
             var i, tabcontent, tablinks;
             tabcontent = document.getElementsByClassName('tabcontent');
             for (i = 0; i < tabcontent.length; i++) {
               tabcontent[i].style.display = 'none';
             }
             tablinks = document.getElementsByClassName('tablinks');
             for (i = 0; i < tablinks.length; i++) {
               tablinks[i].className = tablinks[i].className.replace(' active', '');
             }
             document.getElementById('PNR').style.display = 'block';
             e.currentTarget.className += ' active';
           
           }}>Order Via PNR</button>
          <button className='tablinks' onClick={(e) => {
            
            var i, tabcontent, tablinks;
             tabcontent = document.getElementsByClassName('tabcontent');
             for (i = 0; i < tabcontent.length; i++) {
               tabcontent[i].style.display = 'none';
             }
             tablinks = document.getElementsByClassName('tablinks');
             for (i = 0; i < tablinks.length; i++) {
               tablinks[i].className = tablinks[i].className.replace(' active', '');
             }
             document.getElementById('Train').style.display = 'block';
             e.currentTarget.className += ' active';
            }}>Order Via Train No.</button>
        </div>
        
        <div id='PNR' className='tabcontent'>
          <h3>Enter PNR number</h3>
          <input className='pnrInput' placeholder='PNR No.' type='text' height='100px' width='400px'/>
          <button className='OrderNowBtn' >Order Now!</button>
        </div>
        
        <div id='Train' className='tabcontent'>
          <h3>Enter Train number</h3>
          <input className='pnrInput' placeholder='Train No.' type='text' height='100px' width='400px'/>
          <button  className='OrderNowBtn'>Order Now!</button>
        </div>       
        
    </div> */}   

    
    <div className='item4'>
      <img alt='why' className='logoImageBottom' src={logoImage} />
      <p className='railcopyright' >Rail appetizer established 2022</p>
    </div>
  
  
   
  </div>
  

</div>
  );
}

export default App;



    


      
        
