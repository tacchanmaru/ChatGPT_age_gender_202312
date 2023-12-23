import React, { useEffect, useState, useRef } from "react";
import Radio from "@mui/material/Radio";

type Props = {
  setArousalValue: React.Dispatch<React.SetStateAction<string>> | undefined;
  arousalValue: string;
  isDisable: boolean;
  isTest: boolean;
};

const ArousalInput: React.FC<Props> = (props) => {
  const arousalList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const samList = ["5", "4", "3", "2", "1"];

  const handleRadioChangeArousal = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (props.setArousalValue)
      props.setArousalValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <div className="Scale">
        {samList.map((m, i) => (
          <img
            src={window.location.origin + "/img/a" + m + ".png"}
            alt=""
            width="130"
            height="130"
            id={String(i)}
          />
        ))}
      </div>
      <div className="Scale">
        {props.isTest == false && (
          <div style={{ width: "120px" }}>
            <p>
              最も
              <br />
              落ち着いている
            </p>
          </div>
        )}
        {arousalList.map((m, i) => (
          <Radio
            checked={props.arousalValue === m}
            onChange={handleRadioChangeArousal}
            value={m}
            id={String(i)}
            name="radio-buttons"
            inputProps={{ "aria-label": m }}
            style={{ margin: "20.5px" }}
            disabled={props.isDisable}
          />
        ))}
        {props.isTest == false && (
          <div style={{ width: "120px" }}>
            <p>
              最も
              <br />
              興奮している
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArousalInput;
