import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/home/Index";
import Overview from "./pages/Token/Overview";
import { useEffect } from "react";
import Claim from "./pages/claim/Index";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Overview />} path="/token" />
        <Route element={<Claim />} path="/claim" />
      </Routes>
    </>
  );
};

export default App;
