
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Shop from './components/Shop/Shop';
import SideBar from './components/SideBar/SideBar';
import Daily from './components/Daily/Daily';
import Clans from './components/Clans/Clans';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <SideBar/>
        <Daily/>
        <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/clans' element={<Clans/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
