import { Route, Routes } from 'react-router-dom';

import './App.css';

import About from './components/About/About';
import Admin from './components/Admin/Admin';
import Logout from './components/Logout/Logout';
import Contact from './components/Contact/Contact';
import Create from './components/Create/Create';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Impressum from './components/Impressum/Impressum';
import Product from './components/Product/Product';
import Socials from './components/Socials/Socials';
import RealEstate from './components/RealEstate/RealEstate';
import Portrait from './components/Portrait/Portrait';
import Footer from './components/Footer/Footer';

import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<RealEstate />} />
            <Route path='/portrait' element={<Portrait />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/create' element={<Create />} />
            <Route path='/home' element={<Home />} />
            <Route path='/impressum' element={<Impressum />} />
            <Route path='/product' element={<Product />} />
            <Route path='/socials' element={<Socials />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
