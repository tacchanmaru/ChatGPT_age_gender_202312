import React, { useEffect, useState, useRef } from "react";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";

type Props = {
  setEmotionValue: React.Dispatch<React.SetStateAction<string>>|undefined;
  emotionValue: string;
  isDisable: boolean;
};

const emotionList = [
  "Angry",
  "Disgust",
  "Fear",
  "Surprise",
  "Happy",
  "Sad",
  "Neutral",
];
const emotionListJP = [
  "怒り",
  "嫌悪",
  "恐怖",
  "驚き",
  "喜び",
  "悲しみ",
  "平常",
];

const EmotionInput: React.FC<Props> = (props) => {
  const handleRadioChangeEmotion = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (props.setEmotionValue) props.setEmotionValue((event.target as HTMLInputElement).value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleRadioChangeEmotion}
        >
          {emotionList.map((m, i) => (
            <FormControlLabel
              checked={props.emotionValue === m}
              value={m}
              control={<Radio />}
              label={emotionListJP[i]}
              disabled={props.isDisable}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default EmotionInput;
