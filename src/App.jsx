import { Routes, Route, Navigate } from "react-router-dom";
import classNames from "classnames";

// Pages
import HomePage from "./Routes/Home";
import DetailPage from "./Routes/Detail";
import ContactPage from "./Routes/Contact";
import FavritesPage from "./Routes/Favs";

// Layout Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Context
import { useApp } from "./components/utils/global.context";

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
        <Route path="/favorites" element={<FavritesPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
