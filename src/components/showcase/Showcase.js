<<<<<<< HEAD
import React from 'react';
import './showcase_style.css';
const datas = [
    {
        title: "Бяслагтай талх /том/",
        img_url: require("../../img/talh.png"),
    },
    {
        title: "Шоколадтай Бялуу /том/",
        img_url: require("../../img/cake/cake_2.png"),
    },
    {
        title: "Хар талх /дунд/",
        img_url: require("../../img/bread/bread_2.jpg"),
=======
import React, { useState } from "react";
import './showcase_style.css';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import styled from 'styled-components'



 export const ShowcaseDatas = [
    {
        title: "Бяслагтай талх",
        image: 'https://cdn.discordapp.com/attachments/725396765196550145/919585009487187998/talh.png',
    },
    {
        title: "Орео чийз бялуу",
        image: 'https://cdn.discordapp.com/attachments/725396765196550145/919629584067072010/78963-14_adobespark.png',
    },
    {
        title: "Багц талх /дунд/",
        image: 'https://cdn.discordapp.com/attachments/725396765196550145/919628292561186886/product-slider.png',
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
    }
]


<<<<<<< HEAD
function Showcase() {
    let start = 0;
    let img;
    let name;
    function change_showcase(){
        if(start <= 2){
            img = datas[start].img_url.default;
            name = datas[start].title;
            start++;
        }else {
            start = 0;
        }
        console.log(start)
    }
    setInterval(change_showcase(), 3000)
    return (
        <div className="showcase">
            <div className="text">
                <h3>Онцгойлох <br /> Бүтээгдэхүүн</h3>
                <p>{name}</p>
                <button className="showcase_btn">Захиалах</button>
            </div>
            <div className="images">
                <img src={img} />
            </div>
        </div>
=======
const Showcase = ({slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}
const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

// function Dots({ activeIndex, onclick, ShowcaseDatas }) {
//     return (
//       <div className="all-dots">
//         {ShowcaseDatas.map((slide, index) => (
//           <span
//             key={index}
//             className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
//             onClick={() => onclick(index)}
//           ></span>
//         ))}
//       </div>
//     );
//   }

console.log(current)
if(!Array.isArray(slides) || slides.length <= 0){
    return null;
}

    return (
       <section className='slider'>
           <ChevronLeftRoundedIcon className='btn-sh left-arrow' onClick={prevSlide} sx={{ fontSize: 50 }}/>
           <ChevronRightRoundedIcon className='btn-sh right-arrow' onClick={nextSlide} sx={{ fontSize: 50 }}/>
       {ShowcaseDatas.map((slide, index) => {
           return(
               <div className="showc">
                    <div className="shDesc">

                        <div className={index === current ? 'slide active ' : 'slide'} key={index}>
                        {index === current && (<p >Онцгойлох  Бүтээгдэхүүн</p>)}
                        </div>

                        <div className={index === current ? 'slide active ' : 'slide'} key={index}>
                        {index === current && (<h1 >{slide.title}</h1>)}
                        </div>

                        <div className={index === current ? 'slide active ' : 'slide'} key={index}>
                        {index === current && (<button className="showcase_btn">Захиалах</button> )}
                        </div>

                    </div>

                    <div className={index === current ? 'slide active ' : 'slide'} key={index}>
                    {index === current && (<img src ={slide.image} alt='showc'/>)}
                    </div>
                    
               </div>
           ) 
           
       })}
       </section>
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
        
    )
}

export default Showcase
