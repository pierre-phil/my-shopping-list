import React, { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

const ModeSwitch = () => {
  const { setMode, mode } = useContext(ModeContext);
  const hanleModeChange = () => {
    setMode((mode) => (mode === "dark" ? "light" : "dark"));
  };
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="activate"
        onChange={hanleModeChange}
      />
      <label className="form-check-label" htmlFor="activate">
        {mode === "dark" ? "Mode clair" : "Mode sombre"}
      </label>
    </div>
  );
};

export default ModeSwitch;
