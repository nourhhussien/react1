// import React from 'react'

export default function Contant() {


  const namelabal = (event) => {
    const nameLabel = document.getElementById("nameLabel");

   
 
   if (event.target.value !== "") {
    nameLabel.classList.remove("d-none");
   } else {
     
    nameLabel.classList.add("d-none");
   }


   
 };

 const emaillabal = (event) => {
  const EmailLabel = document.getElementById("EmailLabel");

 

 if (event.target.value !== "") {
  EmailLabel.classList.remove("d-none");
 } else {
   
  EmailLabel.classList.add("d-none");
 }


 
};
  const labal = (event) => {
     const ageLabel = document.getElementById("ageLabel");

    
  
    if (event.target.value !== "") {
      ageLabel.classList.remove("d-none");
    } else {
      
      ageLabel.classList.add("d-none");
    }


    
  };

 const passwordlabal = (event) => {
    const passwordlabel = document.getElementById("passwordlabel");

   
 
   if (event.target.value !== "") {
    passwordlabel.classList.remove("d-none");
   } else {
     
    passwordlabel.classList.add("d-none");
   }


   
 };



  return <>
        <div className="py-3">
        <h1 className="text-center  fs-1 fw-bolder text-uppercase ">conatct section</h1>
<div className="d-flex justify-content-center align-items-center">
      <div className="border-top  border-5 border-black w-10 my-3 "></div>
      <i className="fa-solid fa-star"></i>
    <div className="border-top  border-5 border-black w-10 my-3 "></div>
</div>


<div className="container w-50">

<div className="mb-5">
        <label htmlFor="Name" className="form-label d-none main-color " id="nameLabel">userName:</label>
        <input type="text" className="form-control border-0 border-bottom  shadow-none " id="Name" placeholder="userName"onInput={namelabal} />
      </div>


      <div className="mb-5">
        <label htmlFor="Age" className="form-label d-none main-color" id="ageLabel">userAge:</label>
        <input type="text" className="form-control border-0 border-bottom shadow-none" id="Age" placeholder="userAge" onInput={labal}/>
      </div>

 <div className="mb-5">
        <label htmlFor="email" className="form-label d-none main-color" id="EmailLabel">userEmail:</label>
        <input type="email" className="form-control border-0 border-bottom  shadow-none" id="email" placeholder="userEmail" onInput={emaillabal}/>
      </div>

      <div className="mb-5">
        <label htmlFor="Password" className="form-label d-none main-color" id="passwordlabel">userPassword:</label>
        <input type="password" className="form-control border-0 border-bottom shadow-none" id="Password" placeholder="userPassword" onInput={passwordlabal}/>
      </div>


      <button className="btn btn-green" type="submit">Send Message</button>



  
</div>






        </div>
  
  </>
}
