import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";



function App() {
  return (
    <>
    
    <Navbar title="Patils" aboutText="About US"/>
    <div className="container">
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TextForm head="Enter Text Below"/>} />
        <Route path="/about" element={<About />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
           
      {/* <About/> */}
      {/* <TextForm head="Enter Text Below"/> */}
    </div> 
    
    </>
  );
}

export default App;
