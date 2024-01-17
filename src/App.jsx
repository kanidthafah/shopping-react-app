import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer className="absolute bottom-0 right-0 left-0" />
      
    </>
  )
}

export default App
