import { Route, Routes } from 'react-router-dom';

import './App.css';

import About from './components/About/About';
import Admin from './components/Admin/Admin';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Impressum from './components/Impressum/Impressum';
import Product from './components/Product/Product';
import Socials from './components/Socials/Socials';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <main>
        <Routes>
          <Route path='/about' element={<Admin />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/home' element={<Home />} />
          <Route path='/impressum' element={<Impressum />} />
          <Route path='/product' element={<Product />} />
          <Route path='/socials' element={<Socials />} />
          <Route path='/work' element={<Work />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
