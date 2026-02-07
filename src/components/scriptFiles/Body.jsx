import React from 'react'
import '../styleFiles/Body.css'
import { BsArrowRepeat } from "react-icons/bs";
import { GiFallingLeaf } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";

const Body = () => {
  return (
    <div className='container-body'>
        <div className='content'>
            <p><span>ZapBasket</span> Foods at your <span style={{color:'black'}}>Doorsteps</span></p>
            <div>
            <button className='first'>START SHOPPING</button>
            <button>JOIN NOW</button>
            </div>
        </div>
        <div className='stats'>
            <div className='group'>
                <h3>14K+</h3>
                <p>Product Varieties</p>
            </div>
            <div className='group'>
                <h3>50K+</h3>
                <p>Happy Customers</p>
            </div>
            <div className='group'>
                <h3>10+</h3>
                <p>Store Locations</p>
            </div>
        </div>
        <div className='details'>
            <div className='group one'>
                <BsArrowRepeat  className='ico'/>
                <div>
                    <span>Fresh from farm</span>
                    <p>Stock up on daily essentails. This ensures maximum freshness, nutrition, and quality.</p>
                </div>
            </div>
            <div className='group two'>
                <GiFallingLeaf className='ico' />
                <div>
                    <span>100% Organic</span>
                    <p>Our products are made with 100% organic ingredients, carefully grown using natural farming methods without harmful chemicals or pesticides.</p>
                </div>
                </div>
            <div className='group three'>
                <CiDeliveryTruck className='ico'/>
                <div>
                    <span>Free delivery</span>
                    <p>We offer free delivery on all orders, ensuring your fresh and organic products reach your doorstep without any extra cost.</p>
                </div>
                </div>
        </div>

    </div>
  )
}

export default Body