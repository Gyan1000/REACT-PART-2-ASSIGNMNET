import "./DynamicButton.css";
import { useState } from "react";

function DynamicButton() {
  const [dynamicV, setDynamicV] = useState(0);
  const [dynamicColor, setDynamicColor] = useState("green");

  //    CODE FOR GENERATING COLOR
  const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += colors[Math.floor(Math.random() * colors.length)];
  }
  return (
    <div id="design">
      <span style={{ color: dynamicColor }}>{dynamicV}</span>

      <div className="btn">
        <button
          id="asc"
          onClick={() => {
            // INCREMENT THE VALUE
            setDynamicV(dynamicV + 1);

            //   SETTING COLOR DYNAMICALLY
            setDynamicColor(hex);
          }}
        >
          Ascending
        </button>

        <button
          id="des"
          onClick={() => {
            // DECREMENT THE VALUE
            setDynamicV(dynamicV - 1);

            //   SETTING COLOR DYNAMICALLY
            setDynamicColor(hex);
          }}
        >
          Descending
        </button>
      </div>
    </div>
  );
}

export default DynamicButton;
