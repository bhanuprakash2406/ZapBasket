import { createContext, useContext, useState } from "react";
// Arrived Images
import baby from './images/Just arrived/baby.jpg'
import cat from './images/Just arrived/cat.jpg'
import dove from './images/Just arrived/dove.jpg'
import himalaya from './images/Just arrived/himalaya.jpg'
import ketchup from './images/Just arrived/ketchup.jpg'
import maggi from './images/Just arrived/maggi.jpg'
import mammy from './images/Just arrived/mammy.jpg'
import pedigree from './images/Just arrived/pedigree.jpg'
import red from './images/Just arrived/red.jpg'
import taj from './images/Just arrived/taj.jpg'

// Best Selling Images
import banana from './images/best sellling/banana.jpg'
import bread from './images/best sellling/bread.jpg'
import chife from './images/best sellling/chife.jpg'
import coco750 from './images/best sellling/coco750.jpg'
import egg from './images/best sellling/egg.jpg'
import graps from './images/best sellling/graps.jpg'
import milk from './images/best sellling/milk.jpg'
import pean from './images/best sellling/pean.jpg'
import potato from './images/best sellling/potato.jpg'
import soda from './images/best sellling/soda.jpg'

// Featured Products
import amul from './images/Featured products/amul.jpg'
import cadbury from './images/Featured products/cadbury.jpg'
import dark from './images/Featured products/dark.jpg'
import kulfi from './images/Featured products/kulfi.jpg'
import redbull from './images/Featured products/redbull.jpg'
import ritebite from './images/Featured products/ritebite.jpg'
import rocher from './images/Featured products/rocher.jpg'
import water from './images/Featured products/water.jpg'
import yogabar from './images/Featured products/yogabar.jpg'
import yogurt from './images/Featured products/yogurt.jpg'

// Most Popular Products
import batter from './images/Most popular products/batter.jpg'
import cake from './images/Most popular products/cake.jpg'
import chicken from './images/Most popular products/chicken.jpg'
import chocos from './images/Most popular products/chocos.jpg'
import corn from './images/Most popular products/corn.jpg'
import fish from './images/Most popular products/fish.jpg'
import ravva from './images/Most popular products/id ravva.jpg'
import mutton from './images/Most popular products/mutton.jpg'
import praws from './images/Most popular products/praws.avif'
import yippe from './images/Most popular products/yippe.jpg'

const GiftContext = createContext({
  totalAmount: 0,
  products: {
    arrived: [],
    bestselling: []
  },
  counts: {}
})


export const GiftProvider = ({children}) => {

    const products = {
      arrived:[
        { id: 1, img:baby,name: "Baby Wash",qty:"200 g",amount:195 },
        { id: 2, img:cat,name: "Cat Food",qty:"80 g",amount:40 },
        { id: 3, img:dove,name: "Baby Body Wash",qty:"450 ml",amount:330 },
        { id: 4, img:himalaya,name: "Himalaya Soap",qty:"4 x 75 g",amount:150 },
        { id: 5, img:ketchup,name: "Tomato Ketchup",qty:"190 g",amount:70 },
        { id: 6, img:maggi,name: "Masala Instant Noodles",qty:"95 g",amount:26 },
        { id: 7, img:mammy,name: "Baby Diaper",qty:"56 pcs",amount:650 },
        { id: 8, img:pedigree,name: "Puppy Food",qty:"5 kg",amount:351 },
        { id: 9, img:red,name: "Red Label Tea",qty:"100 g",amount:60 },
        { id: 10, img:taj,name: "Taj Mahal Tea",qty:"500 g",amount:500 }
      ],
      bestselling:[
        { id: 11, img:banana,name: "Banana",qty:"6 pcs",amount:20 },
        { id: 12, img:bread,name: "Bread",qty:"80 g",amount:30 },
        { id: 13, img:chife,name: "Potato Chips",qty:"45 g",amount:40 },
        { id: 14, img:coco750,name: "Coco Cola",qty:"750 ml",amount:75 },
        { id: 15, img:egg,name: "Eggs",qty:"6 pcs",amount:36 },
        { id: 16, img:graps,name: "Fresh Graps",qty:"100 g",amount:60 },
        { id: 17, img:milk,name: "Cow Milk",qty:"500 ml",amount:65 },
        { id: 18, img:pean,name: "Peanuts",qty:"45 g",amount:35 },
        { id: 19, img:potato,name: "Potato",qty:"500 g",amount:60 },
        { id: 20, img:soda,name: "Soda",qty:"450 g",amount:50 }
        ],
      featured:[
        { id: 21, img:amul,name: "Amul Ice Cream",qty:"450 g",amount:320 },
        { id: 22, img:cadbury,name: "Cadbury Chocolate",qty:"80 g",amount:80 },
        { id: 23, img:dark,name: "Dark Chocolate",qty:"45 g",amount:40 },
        { id: 24, img:kulfi,name: "Kulfi Ice Cream",qty:"25 g",amount:35 },
        { id: 25, img:redbull,name: "Redbull Drink",qty:"250 ml",amount:50 },
        { id: 26, img:ritebite,name: "Ritebite Bar",qty:"100 g",amount:60 },
        { id: 27, img:rocher,name: "Rocher",qty:"100 g",amount:65 },
        { id: 28, img:water,name: "Water",qty:"10 ltr",amount:90 },
        { id: 29, img:yogabar,name: "Yogabar",qty:"50 g",amount:60 },
        { id: 30, img:yogurt,name: "Yogurt",qty:"45 g",amount:50 }
        ],
        popular:[
        { id: 31, img:batter,name: "Iddly Batter",qty:"250 g",amount:30 },
        { id: 32, img:cake,name: "Chocolate Cake",qty:"250 g",amount:280 },
        { id: 33, img:chicken,name: "Fresh Chicken",qty:"450 g",amount:240 },
        { id: 34, img:chocos,name: "Kulfi Ice Cream",qty:"25 g",amount:35 },
        { id: 35, img:corn,name: "Sweet Corn",qty:"250 g",amount:150 },
        { id: 36, img:fish,name: "Fish",qty:"200 g",amount:160 },
        { id: 37, img:ravva,name: "Ravva",qty:"100 g",amount:65 },
        { id: 38, img:mutton,name: "Mutton",qty:"450 g",amount:490 },
        { id: 39, img:praws,name: "Praws",qty:"250 g",amount:260 },
        { id: 40, img:yippe,name: "Yippe",qty:"45 g",amount:50 }
        ],
      
      };
    

    const [counts, setCounts] = useState({});

const addItem = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: 1
    }));
  };

  const increase = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  };

  const decrease = (id) => {
    setCounts(prev => {
      const newCount = prev[id] - 1;
      if (newCount <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: newCount };
    });
  };
const totalAmount = Object.values(products).reduce(
  (grandTotal, categoryArray) =>
    grandTotal + categoryArray.reduce((sum, item) => {
      const qty = counts[item.id] || 0;
      return sum + qty * item.amount; }, 0),0 );
  
    return(
        <GiftContext.Provider value={{products,counts,addItem,increase,decrease,totalAmount}}>
            {children} 
        </GiftContext.Provider>
    )
}
export const UseData = () => useContext(GiftContext)