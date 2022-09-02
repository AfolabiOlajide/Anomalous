import { Routes, Route } from 'react-router-dom';

import './app.scss';
import './index.scss'
// pages import
import HomePage from "./pages/home";
import MarketPlace from "./pages/marketPlace";
// components imports
import NavBar from "./components/navbar/NavBar"
import Footer from "./components/footer/Footer"
import TopBar from './components/topbar/TopBar';


function App() {
  return (
    <div className="app">
      <TopBar />
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/marketplace' element={<MarketPlace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
