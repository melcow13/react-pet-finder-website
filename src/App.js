import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainSection from './components/MainSection';



function App() {

  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element= {<MainSection/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
