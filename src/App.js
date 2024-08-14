import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Componets/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Componets/Footer';
import ShopPage from "./Pages/ShopPage";
import NewsPage from "./Pages/NewsPage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route >
          <Route path="/News" element={<NewsPage />} ></Route >
          <Route path="/contact" element={<ContactPage />}></Route >
          <Route path="/about" element={<AboutPage />}></Route >
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
