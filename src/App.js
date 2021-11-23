import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/navbar/Navbar";
import Home_contact from "./components/home_contact/Home_contact";
import Showcase from "./components/showcase/Showcase";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Body />
      <Home_contact />
      <Footer />
    </div>
  );
}

export default App;
