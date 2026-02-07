import { useState } from "react";
import './Extranal/Collection.css'
import { CiClock2 } from "react-icons/ci";
import { UseData } from "../UseContext";

function BestSelling() {
  const {products,counts,addItem,increase,decrease} = UseData()

   return (
      <div className="collection_list">
        <h2>Best Selling</h2>
        <div className="group">
          <div className="collection">
                  {products?.bestselling?.map(item => (
                      <div key={item.id} className="container">
                        <img src={item.img} alt={item.name}/>
                        <small><CiClock2 className="clock"/> 8 MINS</small>
                        <p>{item.name}</p>
                        <text>{item.qty}</text>
                        <div className="group_conatainer">
                          <span>₹{item.amount}</span>
                          {counts[item.id] ? (
                            <div className="button">
                              <button onClick={() => decrease(item.id)}>-</button>
                              <span>{counts[item.id]}</span>
                              <button onClick={() => increase(item.id)}>+</button>
                            </div>
                          ) : (
                            <button className="main" onClick={() => addItem(item.id)}>ADD</button>
                          )}
                        </div>  
                      </div>
                  ))}
            </div>
        </div>
      </div>
    );
}

export default BestSelling;
