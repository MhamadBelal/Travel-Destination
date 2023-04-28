
import DataJson from './data/db.json';
import './App.css';
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home data={DataJson}/>} />
      <Route path='/city/:id' element={<TourDetails data={DataJson} />} />
    </Routes>
    </>
  );
}

export default App;
