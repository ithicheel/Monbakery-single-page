import React, {useState} from 'react'
import Product_dialog_box from '../dialog/Product_dialog_box'
import Product_item from './Product_item'


let data3 = [
    {
        title:"Герман талх",
        price: 2000,
        img_url: require("../../img/bread/bread_1.jpg"),
    },
    {
        title:"Багет талх сүүтэй",
        price: 2500,
        img_url: require("../../img/bread/bread_2.jpg"),
    },
    {
        title:"Үзэм хушгатай талх",
        price: 4200,
        img_url: require("../../img/bread/bread_3.jpg"),
    },
    {
        title:"Залгаа бөмбөлөг",
        price: 3200,
        img_url: require("../../img/bread/bread_4.jpg"),
    },
    {
        title:"Зөөлөн хар талх",
        price: 2000,
        img_url: require("../../img/bread/bread_5.jpg"),
    },
    {
        title:"Сармистай сухарь",
        price: 2000,
        img_url: require("../../img/bread/bread_6.jpg"),
    },
    {
        title:"Бургер талх        ",
        price: 2000,
        img_url: require("../../img/bread/bread_7.jpg"),
    },
    {
        title:"Kraft corn сэндвич талх        ",
        price: 2000,
        img_url: require("../../img/bread/bread_8.jpg"),
    },
    
   
]


let data2 = [
    {
        title:"Шоколадтай бялуу        ",
        price: 2000,
        img_url: require("../../img/cake/cake_1.jpg"),
    },
    {
        title:"Муссе цуглуулга        ",
        price: 2500,
        img_url: require("../../img/cake/cake_2.jpg"),
    },
    {
        title:"Жүржтэй муссе        ",
        price: 4200,
        img_url:require("../../img/cake/cake_3.jpg"),
    },
    {
        title:"Чийз бялуу        ",
        price: 3200,
        img_url:require("../../img/cake/cake_4.png"),
    },
    {
        title:"Алмондтай чийз бялуу        ",
        price: 2000,
        img_url:require("../../img/cake/cake_5.png"),
    },
    {
        title:"Давхраат бялуу        ",
        price: 2500,
        img_url:require("../../img/cake/cake_6.jpg"),
    },
    {
        title:"Тирамису ",
        price: 2500,
        img_url:require("../../img/cake/cake_7.jpg"),
    },
    {
        title:"Сонгодог бялуу        ",
        price: 2500,
        img_url:require("../../img/cake/cake_8.jpg"),
    },

]

let data1 = [
    {
        title:"Донат",
        price: 4200,
        img_url:require("../../img/bakery/bakery1.jpg"),
    },
    {
        title:"Эрдэнэшиш ",
        price: 3200,
        img_url:require("../../img/bakery/bakery2.jpg"),
    },
    {
        title:"Онцгой жимст",
        price: 2000,
        img_url:require("../../img/bakery/bakery3.jpg"),
    },
    {
        title:"Үзэмт кекс",
        price: 2000,
        img_url:require("../../img/bakery/bakery4.jpeg"),
    },
    {
        title:"Крем чийзтэй давхраат        ",
        price: 2000,
        img_url:require("../../img/bakery/bakery5.jpg"),
    },
    {
        title:"Рулет /хээтэй/   ",
        price: 2000,
        img_url:require("../../img/bakery/bakery6.jpg"),
    },
    {
        title:"Шанзтай давхраат        ",
        price: 2000,
        img_url:require("../../img/bakery/bakery7.jpg"),
    },
    {
        title:"Хас давхраат        ",
        price: 2000,
        img_url:require("../../img/bakery/bakery8.jpg"),
    },
]

let data4 = [
    {
        title:"Кокостой жигнэмэг        ",
        price: 4200,
        img_url:require("../../img/dessert/des1.jpg"),
    },
    {
        title:"Хясаан  жигнэмэг        ",
        price: 4200,
        img_url:require("../../img/dessert/des2.jpg"),
    },
    {
        title:"Боргоцойн  жигнэмэг        ",
        price: 4200,
        img_url:require("../../img/dessert/des3.jpg"),
    },
    {
        title:"Загасан   жигнэмэг        ",
        price: 4200,
        img_url:require("../../img/dessert/des4.jpg"),
    },
]

let data5 = [
    {
        title:"Milk       ",
        price: 4200,
        img_url:require("../../img/beverage/bev1.jpg"),
    },
    {
        title:"Cafe Latte        ",
        price: 4200,
        img_url:require("../../img/beverage/bev2.jpg"),
    },
    {
        title:"Americano       ",
        price: 4200,
        img_url:require("../../img/beverage/bev3.jpg"),
    },
    {
        title:"Milk tea",
        price: 4200,
        img_url:require("../../img/beverage/bev1.jpg"),
    },
]

function Product(props) {
    const [dialog_box, setDialog_box] = useState(false);
    const [product_data , setProduct_data] = useState("");
    const dialog_data = null;

    
    let datas;
    if(props.name == "Бялуу"){
        datas = data2;
    }else if(props.name == "Талх"){
        datas = data3;
    }else if(props.name == "Бакери"){
        datas = data1;
    }else if(props.name == "Амттан"){
        datas = data4;
    }else {
        datas = data5;
    }
    function change_dialog_box(e, name){
        setProduct_data(datas.filter(e => e.title.includes(name)))
        console.log(name)
        setDialog_box(e);
        
    }
    return (
        <div>
            {dialog_box && <Product_dialog_box 
                                change={change_dialog_box} 
                                data={product_data} 
                            />}
            <div className="products">
                {datas.map((e, i)=> {
                    return (
                        <Product_item 
                            el={e} 
                            ind={i} 
                            change={change_dialog_box}  
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Product
