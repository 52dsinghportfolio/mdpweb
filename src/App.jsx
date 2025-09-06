// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import RoutesLink from './routesLink';
import Footer from './components/footer';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';



// import Testimonial from './components/commonComponents/testimonial' 
// import { Button } from 'react-bootstrap';



function App() {


  return (
    <>
      <div> 

        <BrowserRouter>
          <Header />
          <RoutesLink />
          <Footer />
        </BrowserRouter>

        {/* <Testimonial />
        <Button>Hello</Button> */}
        
        
      </div>
    </>
  )
}

export default App
