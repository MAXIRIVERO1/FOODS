import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Form from './components/Form/Form';
import { Detail } from './components/Detail/Detail';
import { NavBar } from './components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';


function App() {

  const location = useLocation()
  
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <Routes>
      <Route
      path="/"
      element={<LandingPage />}
      />
      <Route
      path="/form"
      element={<Form />}
      />
      <Route
      path="/detail/:id"
      element={<Detail />}
      />
      <Route
      path="/home"
      element={<Home />}
      />
    </Routes>
    </div>
  );
}

export default App;
