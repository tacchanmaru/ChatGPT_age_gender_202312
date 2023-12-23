import React, { useEffect, useState, useRef } from "react";
import Radio from "@mui/material/Radio";

type Props = {
  setValenceValue: React.Dispatch<React.SetStateAction<string>> | undefined;
  valenceValue: string;
  isDisable: boolean;
  isTest: boolean;
};

const ValenceInput: React.FC<Props> = (props) => {
  const valenceList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const samList = ["5", "4", "3", "2", "1"];
  const handleRadioChangeValence = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (props.setValenceValue)
      props.setValenceValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <div className="Scale">
        {samList.map((m, i) => (
          <img
            src={window.location.origin + "/img/v" + m + ".png"}
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
            <p>ネガティブ</p>
          </div>
        )}
        {valenceList.map((m, i) => (
          <Radio
            checked={props.valenceValue === m}
            onChange={handleRadioChangeValence}
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
            <p>ポジティブ</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValenceInput;
