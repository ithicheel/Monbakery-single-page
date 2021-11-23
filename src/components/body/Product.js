import React from 'react'
import Product_item from './Product_item'


let data1 = [
    {
        title:"Герман талх",
        price: 2000,
        img_url: require("../../img/bread/bread_1.jpg"),
    },
    {
        title:"Сүүтэй талх",
        price: 2500,
        img_url: require("../../img/bread/bread_2.jpg"),
    },
    {
        title:"Бегат",
        price: 4200,
        img_url: require("../../img/bread/bread_3.jpg"),
    },
    {
        title:"Бургер талх",
        price: 3200,
        img_url: require("../../img/bread/bread_4.jpg"),
    },
    {
        title:"Талх",
        price: 2000,
        img_url: require("../../img/bread/bread_5.jpg"),
    },
]
let data2 = [
    {
        title:"Зөөлөн бялуу",
        price: 2000,
        img_url: require("../../img/cake/cake_1.jpg"),
    },
    {
        title:"Бялуу",
        price: 2500,
        img_url: require("../../img/cake/cake_2.png"),
    },
    {
        title:"Бегат",
        price: 4200,
        img_url:require("../../img/cake/cake_3.jpg"),
    },
    {
        title:"Бургер талх",
        price: 3200,
        img_url:require("../../img/cake/cake_4.png"),
    },
    {
        title:"Талх",
        price: 2000,
        img_url:require("../../img/cake/cake_5.png"),
    },
    {
        title:"Бялуу",
        price: 2500,
        img_url:require("../../img/cake/cake_6.jpg"),
    },
    {
        title:"Бегат",
        price: 4200,
        img_url:require("../../img/cake/cake_7.jpg"),
    },
    {
        title:"Бургер талх",
        price: 3200,
        img_url:require("../../img/cake/cake_8.jpg"),
    },
    {
        title:"Талх",
        price: 2000,
        img_url:require("../../img/cake/cake_9.jpg"),
    },
]


function Product(props) {
    let datas;
    if(props.name == "Бялуу"){
        datas = data2;
    }else {
        datas = data1;
    }
    return (
        <div className="products">
            {datas.map((e, i)=> Product_item(e,i))}
        </div>
    )
}

export default Product
