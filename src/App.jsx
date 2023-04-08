import { Routes, Route, Navigate } from "react-router-dom";
import classNames from "classnames";

// Pages
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";
import ContactPage from "./pages/Contact";
import FavoritesPage from "./pages/Favorites";

// Layout Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Context
import { useApp } from "./context/AppContext";

const namespace = 'app';

function App() {
  const { theme } = useApp();
  const componentClassNames = classNames("app", {
    [`${namespace}--dark`]: theme === 'dark'
  });

  return (
    <div className={componentClassNames}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favs" element={<FavoritesPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
