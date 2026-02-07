import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import '../styleFiles/Footer.css'
import img from '../scriptFiles/images/leafs.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='main'>
            <div className='head'>
                <div className='title'>
                    <img src={img} alt='img' />
                    <p>ZapBasket</p>
                </div>
                <div className='icons'>
                    <FaFacebookF  className='icon'/>
                    <FaXTwitter className='icon'/>
                    <IoLogoInstagram className='icon'/>
                    <AiOutlineYoutube className='icon'/>
                    <FaWhatsapp className='icon'/>
                </div>
            </div>
            <div className='organic'>
                <p>ZapBasket</p>
                <ul>
                    <li>About us</li>
                    <li>Conditions</li>
                    <li>Our Journals</li>
                    <li>Careers</li>
                    <li>Affiliate Programme</li>
                    <li>Ultras Press</li>
                </ul>
            </div>
            <div className='organic'>
                <p>Quick Links</p>
                <ul>
                    <li>Offers</li>
                    <li>Discount Coupons</li>
                    <li>Stores</li>
                    <li>Track Order</li>
                    <li>Shop</li>
                    <li>Info</li>
                </ul>
            </div>
            <div className='organic'>
                <p>Customer Service</p>
                <ul>
                    <li>FAQ</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Returns & Refunds</li>
                    <li>Cookie Guidelines</li>
                    <li>Delivery Information</li>
                </ul>
            </div>
            <div className='subscribe'>
                <p>Subscribe Us</p>
                <span>Subscribe to our newsletter to get updates about our grand offers.</span>
                <div className='input'>
                    <input type='email' placeholder='Email Address' className='email'/>
                    <input type='submit' value='Subscribe' className='submit'/>
                </div>
            </div><br />
        </div>
        <p className='bottom'>© 2026 ZapBasket. All rights reserved.</p>
    </div>
  )
}

export default Footer