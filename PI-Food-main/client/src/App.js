import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Form from './components/Form/Form';


function App() {

  return (
    <div className="App">
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
      path="/home"
      element={<Home />}
      />
    </Routes>
    </div>
  );
}

export default App;
