import logo from './logo.svg';
import './App.css';

import React, { PureComponent } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Stories from './components/Stories/Stories';
import Contact from './components/Contact/Contact';

const myRouter = createBrowserRouter( [

{ path: '/' , element: <Layout /> , children:[

  { index: true , element: <Home /> },
  { path: '/home' , element: <Home /> },
  { path: '/about' , element: <About /> },
  { path: '/stories' , element: <Stories /> },
  { path: '/contact' , element: <Contact /> },

]}


] )

class App extends PureComponent {
  


  render() {
    return <>
    
   <RouterProvider router={myRouter} />
    
    </>
  }
}


export default App;
