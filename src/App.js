import React, { useContext } from "react";
import { ModeContext } from "./context/ModeContext";
import AppContainer from "./components/AppContainer";
import ShoppingApp from "./components/ShoppingApp";
import ModeSwitch from "./components/ModeSwitch";
import ModeContextProvider from "./context/ModeContext";

function App() {
  const { mode, setMode } = useContext(ModeContext);
  return (
    <ModeContextProvider mode={mode} setMode={setMode}>
      <AppContainer mode={mode}>
        <header className="App-header d-flex justify-content-between flex-wrap align-items-center mb-5">
          <h1>Ma liste des courses</h1>
          <ModeSwitch setMode={setMode} />
        </header>
        <ShoppingApp mode={mode} />
      </AppContainer>
    </ModeContextProvider>
  );
}

export default App;
