// import React from 'react'
import port2 from '../images/port2.png';
import port3 from '../images/port3.png';
import poert1 from '../images/poert1.png';

export default function Profile() {
  return <>
  
  <div className='py-3'>  

<h1 className="text-center  fs-1 fw-bolder text-uppercase ">portfolio component</h1>
<div className="d-flex justify-content-center align-items-center">
      <div className="border-top  border-5 border-black w-10 my-3 "></div>
      <i className="fa-solid fa-star"></i>
    <div className="border-top  border-5 border-black w-10 my-3 "></div>
</div>

<div className='container'>
<div className="row  g-5">


  <div className="col-lg-4  col-12 imgHover  ">

    <img className="w-100 rounded-2"   src={port2} alt="port1" />

    <div className='layout mx-4  rounded-2 d-flex justify-content-center align-items-center'>
    <i className="fa-solid fa-plus text-white fs-1"></i>
    </div>
  </div>
  
  
  <div className="col-lg-4  col-12 imgHover ">

    <img className="w-100 rounded-2"   src={port3} alt="port1" />

    <div className='layout mx-4  rounded-2 d-flex justify-content-center align-items-center'>
    <i className="fa-solid fa-plus text-white fs-1"></i>
    </div>
  </div>
  <div className="col-lg-4  col-12 imgHover  ">

<img className="w-100 rounded-2"   src={poert1} alt="port1" />

<div className='layout mx-4  rounded-2 d-flex justify-content-center align-items-center'>
<i className="fa-solid fa-plus text-white fs-1"></i>
</div>
</div>

<div className="col-lg-4  col-12 imgHover ">

    <img className="w-100 rounded-2"   src={port2} alt="port1" />

    <div className='layout mx-4  rounded-2 d-flex justify-content-center align-items-center'>
    <i className="fa-solid fa-plus text-white fs-1"></i>
    </div>
  </div>
  <div className="col-lg-4  col-12 imgHover ">

<img className="w-100 rounded-2"   src={poert1} alt="port1" />

<div className='layout mx-4  rounded-2 d-flex justify-content-center align-items-center'>
<i className="fa-solid fa-plus text-white fs-1"></i>
</div>
</div>
<div className="col-lg-4  col-12 imgHover ">

    <img className="w-100 rounded-2"   src={port3} alt="port1" />

    <div className='layout mx-4  rounded-2 d-flex justify-content-center align-items-center'>
    <i className="fa-solid fa-plus text-white fs-1"></i>
    </div>
  </div>

 </div>



 
</div>

 




</div>

  
  
  </>
}
