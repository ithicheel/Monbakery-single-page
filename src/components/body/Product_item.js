import React, {useState} from 'react';
import "./product_Style.css";

function Product_item(props) {
    function handler(e){
        let type_name = e.target.parentNode.parentNode.children[2].children[0].innerHTML;
        props.change(true, type_name)
    }
<<<<<<< HEAD
    // if(props.el.sell_is){
    //     console.log(props.target)
    // }
    return (
        //#region Hello
        <div key={props.ind} className="product_item" >
            <div className="product_item_sell product__item_sell"><h3>-20%</h3></div>
=======
    return (
        //#region Hello
        <div key={props.ind} className="product_item" >
            <div className="product__item_sell"><h3>-20%</h3></div>
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
            <div className="product_item_img" onClick={handler}>
                <img src={props.el.img_url.default} alt="Error" />
            </div>
            <div className="product_item_name">
                <h3>{props.el.title}</h3>
                <h2>{props.el.price}$</h2>
                <button>Захиалах</button>
            </div>
        </div>
        //#endregion
    )
}

export default Product_item
