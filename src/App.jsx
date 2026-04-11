import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import EmailDesignPage from "./pages/EmailDesignPage";
import GraphicDesignPage from "./pages/GraphicDesignPage";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<HomePage />} />
        <Route path="/email-design" element={<EmailDesignPage />} />
        <Route path="/email-design/:slug" element={<EmailDesignPage />} />
        <Route path="/graphic-design" element={<GraphicDesignPage />} />
        <Route path="/graphic-design/:slug" element={<GraphicDesignPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
