import React from 'react'
import { BsList,BsSearch,BsBasket,BsPerson,BsChevronDown,BsXLg } from "react-icons/bs";
import logo from '../scriptFiles/images/leafs.png'
import '../styleFiles/Header.css'
import { useEffect, useState } from 'react';
import { GiFruitBowl,GiRoastChicken ,GiCirclingFish,GiSlicedBread,GiCoffeeCup  } from "react-icons/gi";
import { TbEggs,TbFridge,TbMoodKid  } from "react-icons/tb";
import { MdOutlineHealthAndSafety,MdOutlinePets  } from "react-icons/md";
import { FaPumpSoap } from "react-icons/fa";
import { UseData } from '../scriptFiles/UseContext';

const Header = () => {
    const {totalAmount=0,counts,products}=UseData()

    const sumOf = Object.values(products).reduce(
        (grandTotal, categoryArray) =>
    grandTotal + categoryArray.reduce((sum, item) => sum + (counts[item.id]||0),0),0);

    const texts = ["Curd", "Rice", "Fruits", "Panner", "Dals","Butter","Milk"];
    const [i, setI] = useState(0);

    useEffect(() => {
  const t = setInterval(() => setI((i + 1) % texts.length), 2000);
  return () => clearInterval(t);
}, [i]);
function toggleAddress(){
    const address = document.getElementById('address');
    address.classList.toggle('active')
}
function togglecollections(){
    const collections = document.querySelector('.collections');
    collections.classList.toggle('active')
}
  return (
    <div className='main-header'>
        <div className='container'>
        <div className='title'>
            <img src={logo} alt="Organic Store" /> 
            <h2>ZapBasket</h2>
            <BsList className='list' onClick={togglecollections} style={{cursor:'pointer'}}/>
            <div className='user-actions hidden'><BsPerson className='icon' /></div>
        </div>
        <div className='location'>
            <h3>Delivery in 8 minutes</h3>
            <p  onClick={toggleAddress}>Hydrabad 500001 <BsChevronDown className='icon'/></p>
            <div className='address' id='address'>
                <p>Change Location</p><br/>
                <div className='group'>
                    <span>Detect my Location</span>
                    <text>OR</text>
                    <input type="text" placeholder='Search Delivery Location' />
                </div> 
            </div>
        </div>
        <div className='search-bar'>
            <input type="text" placeholder={`Search ${texts[i]}`} />
            <BsSearch className='search' />
        </div>
        <div className='user-actions visiable'>
            <BsPerson className='icon' />
            {totalAmount? (
            <div className='cartData'>
                <BsBasket className='icon' />
                    <div className='cart1'>
                        <p>{sumOf} items</p> 
                        <p>₹ {totalAmount}</p>
                    </div>
            </div>) : <div className='cart'><BsBasket className='icon' /><p>My Cart</p></div>}
        </div>
        </div>
            <div className='collections'>
                <div className='group'>
                    <p>MENU</p>
                     <BsXLg onClick={togglecollections} style={{cursor:'pointer'}}/>
                </div>
                <ul>
                    <li><a href="#"><GiFruitBowl />Fruits and Vegetables</a></li>
                    <li><a href="#"><GiRoastChicken />Meat and Poultry</a></li>
                    <li><a href="#"><TbEggs />Dairy and Eggs</a></li>
                    <li><a href="#"><GiCirclingFish />Seafood</a></li>
                    <li><a href="#"><GiSlicedBread />Bakery and Bread</a></li>
                    <li><a href="#"><TbFridge />Frozen Foods</a></li>
                    <li><a href="#"><GiCoffeeCup />Breakfast Foods</a></li>
                    <li><a href="#"><TbMoodKid />Baby Foods And Formula</a></li> 
                    <li><a href="#"><MdOutlineHealthAndSafety />Health and Wellness</a></li>
                    <li><a href="#"><FaPumpSoap />Personal Care</a></li>
                    <li><a href="#"><MdOutlinePets />Pet Foods and Supplies</a></li>
                </ul>
            </div>
    </div>
  )
}

export default Header