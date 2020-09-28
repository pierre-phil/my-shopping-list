import React from "react";
import AppContainer from "./components/AppContainer";
import ShoppingApp from "./components/ShoppingApp";
import ModeSwitch from "./components/ModeSwitch";
import ModeContextProvider from "./context/ModeContext";

function App() {
  return (
    <ModeContextProvider>
      <AppContainer>
        <header className="App-header mb-4">
          <h1 className="text-center">Ma liste des courses</h1>
          <ModeSwitch />
        </header>
        <ShoppingApp />
      </AppContainer>
    </ModeContextProvider>
  );
}

export default App;
