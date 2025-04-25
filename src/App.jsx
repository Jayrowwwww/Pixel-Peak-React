import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import Product_cards from './pages/products.jsx';
import About  from './pages/about.jsx';
import Contact from './pages/contact.jsx';

export default function App() {
  return (
      <>
      <Router>
        <Header/>   
          
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/products' element={<Product_cards />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          
        <Footer />
      </Router>
      </>
  );
}
