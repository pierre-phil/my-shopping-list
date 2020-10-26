import React from "react";
import AppContainer from "./components/AppContainer";
import ShoppingApp from "./components/ShoppingApp";
import ModeSwitch from "./components/ModeSwitch";
import ModeContextProvider from "./context/ModeContext";
import Geolocation from "./components/Geolocation"
import Footer from "./components/Footer"


function App() {
  return (
    <ModeContextProvider>
      <AppContainer>
        <header className="App-header mb-4">
          <h1 className="text-center mb-4">my Shopping List</h1>
          <ModeSwitch />
        </header>
        <ShoppingApp />
        <Geolocation />
        
      </AppContainer>
      <Footer />
    </ModeContextProvider>
  );
}

export default App;
