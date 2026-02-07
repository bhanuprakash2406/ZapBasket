import React from 'react'
import apple from '../images/img-app-store.png'
import android from '../images/img-google-play.png'
import banner from '../images/banner-onlineapp.png'

const Download = () => {
  return (
    <div className='download'>
        <div className='group'>
            <p>Download ZapBasket App</p>
            <span>Online Orders made easy, fast and reliable</span>
            <div>
            <img src={apple} alt='apple' />
            <img src={android} alt='android' />
            </div>
        </div>
        <img src={banner} alt='banner' className='banner'/>
    </div>
  )
}

export default Download