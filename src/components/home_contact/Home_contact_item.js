import React, {useState, useEffect} from 'react'
import "./Home_contact_style.css";
import {HiPaperAirplane, HiOutlineShoppingCart} from "react-icons/hi"
import {GiEarthAmerica} from "react-icons/gi"
import Modal from '../header/modal';
import Location from '../location/location';
import AOS from "aos";
import "aos/dist/aos.css";

function Home_contact_item(props, onClose) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    const [isOpen, setIsOpen] = useState(false)

    function home_contact_icon(name){
        if(name == "airplane") return  <HiPaperAirplane size="50px" />;
        if(name == "earth") return  <GiEarthAmerica size="50px"  onClick={() => setIsOpen(true)}/>;
        if(name == "shopping") return  <HiOutlineShoppingCart size="50px" />;
    }
    return (
        <>
        <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
      className="home_contact_item">
            <i>{home_contact_icon(props.keys)}</i>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}
        onRequestClose={() => setIsOpen(false)}>
            <Location />
        </Modal>
        </>
        
    )
}

export default Home_contact_item
