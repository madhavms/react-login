import './App.css';
import Register from './components/Register';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
