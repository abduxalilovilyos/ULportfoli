import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import Navbar from './Navbar';
import Header from './Header';
import Post from './Post';
import Works from './Works';
import Footer from './Footer';
import "./responsive.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div className='site'>
  <Navbar />
  <Header />
  <Post />
  <Works />
  <Footer />
  </div>

);

