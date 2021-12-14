import React, {useState} from 'react'
import "./navbar_style.css"
import { FaUser ,FaShoppingBag } from "react-icons/fa"
import Modal from '../modal'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


function Navbar_login_item(props, onClose) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <div onClick={() => setIsOpen(true)} className="navbar_login_item">
            <h3>{props.name}</h3>
            <i>{props.icon == "user" ? <FaUser /> : <FaShoppingBag /> }</i>
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}
        onRequestClose={() => setIsOpen(false)}>
            <div className='formLogin' >
          
          <div class="session">
            
              <div class="left">  
              </div>
              <form action="" class="log-in" autocomplete="off">
                
                  <h4>We are <span>MONBAKERY</span></h4>
                  <p>Тавтай Морил!</p>
                  <div class="floating-label">
                  <input placeholder="Email" type="text" name="email" id="email" autocomplete="off"/>
                  <label for="email">Email:</label>
                  </div>
                  <div class="floating-label">
                  <input placeholder="Password" type="password" name="password" id="password" autocomplete="off"/>
                  <label for="password">Password:</label>
                
                  </div>
                  <button className='loginBtn' type="submit" onClick="return false;">Log in</button>
                  
              </form>
          </div>
         
        </div> 
       
        </Modal>
        
        </>
    )
}

export default Navbar_login_item
