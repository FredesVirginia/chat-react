import Register from "./pages/Register";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Toaster } from 'react-hot-toast';
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext"
import {
  BrowserRouter, 
  Routes ,
  Route , 
  Navigate,
  useNavigate
} from "react-router-dom";


function App() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
 console.log("EL user es " , currentUser)
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };



  return (
  
    <div className="bg-indigo-300 h-screen"  >
       <BrowserRouter>
      <Routes>
     
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />
    </div>
   
   
  );
}

export default App;
