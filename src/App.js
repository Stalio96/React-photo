import { Route, Routes } from 'react-router-dom';

import './App.css';

import About from './components/About/About';
import Admin from './components/Admin/Admin';
import Logout from './components/Logout/Logout';
import Contact from './components/Contact/Contact';
import Create from './components/Create/Create';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Socials from './components/Socials/Socials';
import Family from './components/Family/Family';
// import RealEstate from './components/RealEstate/RealEstate';
import Portrait from './components/Portrait/Portrait';
import Price from './components/Price/Price';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <div className="App">
        <Header />

        <main>
          <Routes>
            {/* <Route path='/' element={<RealEstate />} /> */}
            <Route path='/portrait' element={<Portrait />} />
            <Route path='family' element={<Family />}/>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/create' element={<Create />} />
            <Route path='/product' element={<Product />} />
            <Route path='/socials' element={<Socials />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/price' element={<Price />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
