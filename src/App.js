import logo from './logo.svg';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

import Topheader from './Components/TopHeader/Topheader';
import Header from './Components/Header/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeStyle01 from './Components/Home/HomeStyle01/HomeStyle01';
import HomeStyle02 from './Components/Home/HomeStyle02/HomeStyle02';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';





function App() {
  return (
    <>
    <BrowserRouter>
    <Topheader/>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/homestyle01' element={<HomeStyle01/>}/>
    <Route path='/homestyle02' element={<HomeStyle02/>}/>
    <Route path='/about' element={<h2>about</h2>}/>
    <Route path='/classes' element={<h2>classes</h2>}/>
    <Route path='/teachers' element={<h2>teachers</h2>}/>
    <Route path='/pages' element={<h2>pages</h2>}/>
    <Route path='/blog' element={<h2>blog</h2>}/>
    <Route path='/shop' element={<h2>shop</h2>}/>
    <Route path='/contact' element={<h2>contact</h2>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
