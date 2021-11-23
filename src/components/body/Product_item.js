import React, {useState} from 'react';
import "./product_Style.css";

function Product_item(props) {
    return (
        <div key={props.i} className="product_item">
            <div className="product_item_img">
                <img src={props.img_url.default} alt="Error" />
            </div>
            <div className="product_item_name">
                <h3>{props.title}</h3>
                <h2>{props.price}$</h2>
                <button>Захиалах</button>
            </div>
        </div>
    )
}

export default Product_item
