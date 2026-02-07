import React from 'react'
import pharmacy from '../scriptFiles/images/pharmacy.png'
import '../styleFiles/SectionMain.css'
import mom from '../scriptFiles/images/mom.jpg'
import dog from '../scriptFiles/images/dog.jpg'
import personal from '../scriptFiles/images/personal.jpg'
import cleaning from '../scriptFiles/images/cleaning.jpg'
import pharma from '../scriptFiles/images/pharma.jpg'
import sauces from '../scriptFiles/images/sauces.jpg'
import snacks from '../scriptFiles/images/snacks.jpg'
import masala from '../scriptFiles/images/masala.jpg'
import rice from '../scriptFiles/images/rice.jpg'
import tea from '../scriptFiles/images/tea.jpg'
import sweet from '../scriptFiles/images/sweet.jpg'
import baby from '../scriptFiles/images/baby.jpg'
import dairy from '../scriptFiles/images/dairy.jpg'
import home from '../scriptFiles/images/home.jpg'
import pet from '../scriptFiles/images/pet.jpg'
import fruit from '../scriptFiles/images/fruit.jpg'
import cold from '../scriptFiles/images/cold.jpg'
import meet from '../scriptFiles/images/meet.jpg'
import Slice from '../scriptFiles/images/Slice.jpg'
import bakery from '../scriptFiles/images/bakery.jpg'

const SectionMain = () => {
  return (
    <div className='section'>
        <div className='head'>
            <div className="list first">
                <div>
                    <p>Pharmacy ay your doorstep!</p>
                    <span>Cough syrups, pain relief sprays & more</span><br />
                    <button className='btn'>Order Now</button>
                </div>
                    <img src={pharmacy} alt='Pharmacy'/>
            </div>
            <div className="list second">
                <div>
                    <p>Pet care supplies at your door</p>
                    <span>Food, treats. toys & more</span><br />
                    <button>Order Now</button>
                </div>
                    <img src={dog} alt='dog'/>
            </div>
            <div className="list third">
                <div>
                    <p>No time for a diaper run?</p>
                    <span>Get baby care essentials</span><br />
                    <button>Order Now</button>
                </div>
                    <img src={mom} alt='mom'/>
            </div>
        </div>
        <div className='listContainer'>
            <img src={personal} alt='personal'/>
            <img src={cleaning} alt='cleaning'/>
            <img src={pharma} alt='pharma'/>
            <img src={sauces} alt='sauces'/>
            <img src={snacks} alt='snacks'/>
            <img src={masala} alt='masala'/>
            <img src={rice} alt='rice'/>
            <img src={tea} alt='tea'/>
            <img src={sweet} alt='sweet'/>
            <img src={baby} alt='baby'/>
            <img src={dairy} alt='dairy'/>
            <img src={home} alt='home'/>
            <img src={pet} alt='pet'/>
            <img src={fruit} alt='fruit'/>
            <img src={cold} alt='cold'/>
            <img src={meet} alt='meet'/>
            <img src={Slice} alt='Slice'/>
            <img src={bakery} alt='bakery'/>
        </div>
    </div>
  )
}

export default SectionMain