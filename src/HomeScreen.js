import React from 'react';
import './HomeScreen.css';
import Nav from './features/counter/Nav';
import Banner from './features/counter/Banner';
import Card from './features/counter/Card';
import Login from './features/counter/Login';



function HomeScreen() {
  return (
    <div className='homescreen'>
        
        <Nav/>
    
       <Banner/>

    <Card/>


    </div>

   
  )
}

export default HomeScreen