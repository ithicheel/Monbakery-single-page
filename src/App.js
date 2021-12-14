import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/navbar/Navbar";
import Home_contact from "./components/home_contact/Home_contact";
import Showcase from "./components/showcase/Showcase";
import Sale from "./components/sale/sale";
import Location from "./components/location/location";

<<<<<<< HEAD
=======
import { ShowcaseDatas } from "./components/showcase/Showcase";

>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
function App() {
  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD
      <Showcase />
      <Body />
      <Sale />
      {/* <Location /> */}
=======
      <Showcase slides={ShowcaseDatas} />
      <Body />
      <Sale />
      <Location />
>>>>>>> f8b98112a7e40243cc05c00b25dbc6734bab573e
      <Home_contact />
     
      <Footer />
    </div>
  );
}

export default App;
