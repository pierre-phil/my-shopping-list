import React, { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

const ModeSwitch = () => {
  const { setMode, mode } = useContext(ModeContext);
  const hanleModeChange = () => {
    setMode((mode) => (mode === "dark" ? "light" : "dark"));
  };
  return (
    <div className="d-flex justify-content-center mb-4">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="activate"
          checked={mode === "dark"}
          // ici pour que la position du bouton soit enfoncée quand le mode est dark, pas enfoncé quand le mode est light
          onChange={hanleModeChange}
        />
        <label className="form-check-label" htmlFor="activate">
          {mode === "dark" ? "Dark mode" : "Light mode"}
        </label>
      </div>
    </div>
  );
};

export default ModeSwitch;
