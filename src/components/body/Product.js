import React, {useState} from 'react'
import Product_dialog_box from '../dialog/Product_dialog_box'
import Product_item from './Product_item'


let data1 = [
    {
        title:"Герман талх",
        price: 2000,
        img_url: require("../../img/bread/bread_1.jpg"),
<<<<<<< HEAD
        sell_is: true,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Сүүтэй талх",
        price: 2500,
        img_url: require("../../img/bread/bread_2.jpg"),
<<<<<<< HEAD
        sell_is: false,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Бегат",
        price: 4200,
        img_url: require("../../img/bread/bread_3.jpg"),
<<<<<<< HEAD
        sell_is: false,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Бургер талх",
        price: 3200,
        img_url: require("../../img/bread/bread_4.jpg"),
<<<<<<< HEAD
        sell_is: true,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Талх",
        price: 2000,
        img_url: require("../../img/bread/bread_5.jpg"),
<<<<<<< HEAD
        sell_is: true,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Герман талх",
        price: 2000,
        img_url: require("../../img/bread/bread_1.jpg"),
<<<<<<< HEAD
        sell_is: false,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Сүүтэй талх",
        price: 2500,
        img_url: require("../../img/bread/bread_2.jpg"),
<<<<<<< HEAD
        sell_is: true,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Бегат",
        price: 4200,
        img_url: require("../../img/bread/bread_3.jpg"),
<<<<<<< HEAD
        sell_is: true,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Бургер талх",
        price: 3200,
        img_url: require("../../img/bread/bread_4.jpg"),
<<<<<<< HEAD
        sell_is: true,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Талх",
        price: 2000,
        img_url: require("../../img/bread/bread_5.jpg"),
<<<<<<< HEAD
        sell_is: false,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Герман талх",
        price: 2000,
        img_url: require("../../img/bread/bread_1.jpg"),
<<<<<<< HEAD
        sell_is: false,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Сүүтэй талх",
        price: 2500,
        img_url: require("../../img/bread/bread_2.jpg"),
<<<<<<< HEAD
        sell_is: false,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Бегат",
        price: 4200,
        img_url: require("../../img/bread/bread_3.jpg"),
<<<<<<< HEAD
        sell_is: true,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Бургер талх",
        price: 3200,
        img_url: require("../../img/bread/bread_4.jpg"),
<<<<<<< HEAD
        sell_is: true,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Талх",
        price: 2000,
        img_url: require("../../img/bread/bread_5.jpg"),
<<<<<<< HEAD
        sell_is: true,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Герман талх",
        price: 2000,
        img_url: require("../../img/bread/bread_1.jpg"),
<<<<<<< HEAD
        sell_is: false,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Сүүтэй талх",
        price: 2500,
        img_url: require("../../img/bread/bread_2.jpg"),
<<<<<<< HEAD
        sell_is: false,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    },
    {
        title:"Бегат",
        price: 4200,
        img_url: require("../../img/bread/bread_3.jpg"),
<<<<<<< HEAD
        sell_is: true,
=======
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
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

let data3 = [
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
    const [dialog_box, setDialog_box] = useState(false);
    const [product_data , setProduct_data] = useState("");
    const dialog_data = null;
<<<<<<< HEAD
=======

    
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    let datas;
    if(props.name == "Бялуу"){
        datas = data2;
    }else if(props.name == "Талх"){
        datas = data3;
    }else {
        datas = data1;
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
