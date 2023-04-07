// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      <About/>
        {/* <TextForm head="enter you story" /> */}
      </div>
    </>
  );
}

export default App;
