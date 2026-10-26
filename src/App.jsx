import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Packages from './pages/packages'
import Services from './pages/services'
import {Navbar, Footer} from './utils';
import Conversion from './pages/conversion';


const Layout = ()=> {

  return (
    <>
    <Navbar />
    <Outlet />
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/packages",
        element: <Services /> /* to <Packages /> later on */
      },
      {
        path: "/services",
        element: <Services />
      }, 

      {
        path: "/conversion",
        element: <Conversion />
      }
    ]
  }
])


export default function App() {
  return(
    <div>
    <RouterProvider router={router} />
    </div>
  )
}
