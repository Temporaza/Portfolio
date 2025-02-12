import "./Toggle.css";
import { MdOutlineNightlight } from "react-icons/md";

export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <label htmlFor="check" onClick={handleChange}>
        <MdOutlineNightlight className="toggle-icon" />
      </label>
    </div>
  );
};
