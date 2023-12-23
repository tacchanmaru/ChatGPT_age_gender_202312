import React, { useEffect, useState, useRef } from "react";
import Radio from '@mui/material/Radio';

type Props = {
    setConfidenceValue: React.Dispatch<React.SetStateAction<string>>|undefined;
    confidenceValue: string;
    isDisable: boolean;
};



const ConfidenceInput: React.FC<Props> = (props) => {
    const confidenceList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const handleRadioChangeConfidence = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(props.setConfidenceValue) props.setConfidenceValue((event.target as HTMLInputElement).value);
    };

    return (
      <div className='Scale'>
        <div style={{ width: "120px" }}>
          <p>全く<br />自信がない</p>
        </div>
      {confidenceList.map((m, i) => (
          <Radio
          checked={props.confidenceValue === m}
          onChange={handleRadioChangeConfidence}
          value={m}
          id={String(i)}
          name="radio-buttons"
          inputProps={{ 'aria-label': m }}
          style={{ margin: "20.5px" }}
          disabled={props.isDisable}
        />
      ))}
        <div style={{ width: "120px" }}>
          <p>非常に<br />自信がある</p>
        </div>
      </div>
    );}

export default ConfidenceInput;