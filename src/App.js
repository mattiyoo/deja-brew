import About from "./Components/About/About";
import CTA from "./Components/CTA/CTA";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Nav from "./Components/Nav/Nav";
import Service from "./Components/Service/Service";

function App() {
  return (
    <div className="container">
      <Nav />
      <Home />
      <About />
      <Menu />
      <Service />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
