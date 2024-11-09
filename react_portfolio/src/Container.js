import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Container() {
  return (
    <div className="container">
      <Header />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Container;