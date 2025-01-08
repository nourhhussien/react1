// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
 import Contant from './components/Contant/Contant'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'

import Layout from './components/layout/Layout'
import Notfound from './components/NotFound/Notfound'

let routers =createBrowserRouter([

  {path:'/',  element:<Layout/>,children:[
    {path:'home'  , element:<Home/>},
  { index:true ,  element:<About/>},
  {path:'contant' , element:<Contant/>},
  {path:'profile' , element:<Profile/>},
  {path:'*' , element:<Notfound/>},

  ]}

])

function App() {

  return <>
      {/* <Home/> */}
      {/* <Contant/> */}
      {/* <Profile/> */}
    {/* <About/> */}


    <RouterProvider router={routers}></RouterProvider>
    </>
  
}

export default App
