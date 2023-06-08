import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Patils" aboutText="About US"/>
    <div className="container">
      
    <TextForm head="Enter Text Below"/>
    </div> 
    </>
  );
}

export default App;
