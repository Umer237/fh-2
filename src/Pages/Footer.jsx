import React from 'react'
import logo from '../img/FH.png'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';



import './Footer.css'

const Footer = () => {
  return (
<>
<div className='Footer'>
<img src={logo} alt="Logo" />
<h4>ONE STEP SOLUTION PROVIDER</h4>
<ul>
    <li><a href="/home">HOME</a></li>
    <li><a href="/about">ABOUT</a></li>
    <li><a href="/services">SERVICES</a></li>
    <li><a href="/contact">CONTACT</a></li>
    <li><a href="/team">TEAM</a></li>
    <li><a href="/portfolios">PORTFOLIOS</a></li>
</ul>
<div className="Logos">
    <div className='Logo'>
<FaFacebookF/>
</div>
<div className='Logo'>
<FaTwitter/>
</div>
<div className='Logo'>
<FaInstagram/>
</div>
<div className='Logo'>
<FaLinkedin/>
</div>
</div>
<div className="Footer-End">
  <h5>Copyright © 2021 FH Group OF Companies Inc. All rights reserved. Privary Policy | Term of Use | Business and Reflect</h5>
</div>
</div>
</>
  )
}

export default Footer