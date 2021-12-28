import Navbar_login from "./Navbar_login";
import Navbar_logo from "./Navbar_logo"
import './navbar_style.css'

const Navbar = ()=> {
    return (
      
        <div className="navbar">
            <div className="nav">
            <Navbar_logo />
            <Navbar_login />
            </div>
        </div>
       
    )
}


export default Navbar;


