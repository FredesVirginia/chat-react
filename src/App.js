import Register from "./pages/Register";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Toaster } from 'react-hot-toast';
import {
  BrowserRouter, 
  Routes ,
  Route
} from "react-router-dom";


function App() {
  return (
  
    <div className="bg-indigo-300 h-screen"  >
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />
    </div>
   
   
  );
}

export default App;
