// import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return <>

  <nav className="navbar navbar-expand-lg bg-navbar  py-4 ">
  <div className="container">
    <Link className="navbar-brand text-uppercase fw-bolder fs-2 text-white" to={'/'}>Start Framework    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav  ms-auto ">
        <li className="nav-item">
          <Link className="nav-link active text-white fw-bolder mx-3 fs-5" aria-current="page" to={'home'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-bolder  mx-3 fs-5" to={'profile'}>portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-bolder  mx-3 fs-5" to={'contant'} >contact</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

  
  </>
}
