import Nav from './components/Nav';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Cart from './components/dropdowns/Cart';
import Form from './components/Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (

    <Router basename="/Pizza-React">
      <Form />
      <Nav />
      <Cart />
      <Routes>
        <Route path='/' element={<Home />} index/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer className="footer footer--light" />
    </Router>

  );
}

export default App;
