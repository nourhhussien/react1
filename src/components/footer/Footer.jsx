// import React from 'react'

export default function Footer() {
  return <>
  <div className="bg-navbar py-5 ">
  <div className="container text-center  text-white">
  <div className="row">
    <div className="col">
      <h3>LOCATION</h3>
      <p>2215 John Daniel Drive</p>
      <p>Clark, MO 65243</p>
    </div>
    <div className="col">
     <h3>AROUND THE WEB</h3>
     <div className="d-flex justify-content-center align-items-center">

     <i className="fa-brands fa-facebook text-white border p-1 m-2  rounded-circle"></i>
     <i className="fa-brands fa-twitter border p-1 m-2  rounded-circle"></i>
     <i className="fa-brands fa-linkedin border p-1 m-2  rounded-circle"></i>
     <i className="fa-solid fa-globe border p-1 m-2  rounded-circle"></i>


     </div>
    </div>
    <div className="col">
      <h3>ABOUT FREELANCER</h3>
      <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>
  </div>
</div>
  </div>
  

   <div className="bg-footer py-4 text-white text-center">
   Copyright © Your Website 2021
   </div>
  
  </>
}
