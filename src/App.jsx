import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Nav /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<HomePage />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
