// import React from 'react'
import    avataaars   from '../images/avataaars.svg';
export default function About() {
  return<>
  
  <div className="d-flex justify-content-center align-items-center bg-home text-white py-3">
     
    <div>

    <img src={avataaars } alt="avatars"  className='p-5 m-2' />

    <h1 className="text-center  fs-1 fw-bolder text-uppercase ">start Framework</h1>
<div className="d-flex justify-content-center align-items-center">
      <div className="border-top  border-5 border-white w-25 my-3 "></div>
      <i className="fa-solid fa-star"></i>
    <div className="border-top  border-5 border-white w-25 my-3 "></div>
</div>
     <p className='text-center'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </div>
  
  
  
  
  
  </>
}
