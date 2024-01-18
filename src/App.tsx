import React from "react";
import Home from "./pages/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SaveList from "./pages/SaveList/SaveList";
import Footer from "./components/Footer/Footer";
import BrandPage from "./pages/BrandPage/BrandPage";

function App() {
  return (
    <>
      <NavigationBar />
      <BrandPage />
      <Footer />
    </>
  );
}

export default App;
