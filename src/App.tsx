import React from "react";
import Home from "./pages/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SaveList from "./pages/SaveList/SaveList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavigationBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
