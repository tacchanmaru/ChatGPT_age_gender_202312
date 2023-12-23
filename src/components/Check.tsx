import React, { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import ArousalInput from "./ArousalInput";
import ValenceInput from "./ValenceInput";

type Props = {
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
};

const Check: React.FC<Props> = (props) => {
  const [answer, setAnswer] = React.useState("");
  const [arousalValue, setArousalValue] = React.useState("");
  const [valenceValue, setValenceValue] = React.useState("");

  const handleChange = (e: any) => {
    setAnswer(e.target.value);
  };
  return (
    <div>
      <h1>実験内容の確認</h1>
      <p>この次のページからは、以下のようなメッセージが表示されます。</p>
      <div
        style={{
          margin: "64px 0px",
        }}
      >
        <div className="mycomment">
          <p
            style={{
              fontSize: 48,
              paddingLeft: 24,
            }}
          >
            プランAについて
            <br />
            もう少し教えてください
          </p>
        </div>
      </div>
      <p>
        以下の設問は、実験内容を正しく理解しているかを確認するためのものです。<br/>全ての設問に正しい解答を選択した場合のみ、この後の実験に進むことができます。
      </p>
      <h3>
        Q:
        このメッセージは、あなたからのどのような問いかけに対する返答でしょうか。
      </h3>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="「プランAについてどう思う？」"
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="「プランAとプランBのどちらが良いと思う？」"
          />
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="「プランAは良くないと思うんだ」"
          />
        </RadioGroup>
      </FormControl>
      <h3>
        Q: 以下の選択肢の中から、最もポジティブな感情を表すものを選んでください
      </h3>
      <ValenceInput
        setValenceValue={setValenceValue}
        valenceValue={valenceValue}
        isDisable={false}
        isTest={true}
      />
      <h3>Q: 以下の選択肢の中から、最も落ち着いている感情を表すものを選んでください。</h3>
      <ArousalInput
        setArousalValue={setArousalValue}
        arousalValue={arousalValue}
        isDisable={false}
        isTest={true}
      />

      {answer == "2" && valenceValue=="9" && arousalValue=="1" && (
        <div style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            className="button"
            onClick={() => props.setPageNum(4)}
          >
            実験に進む
          </Button>
        </div>
      )}
    </div>
  );
};

export default Check;
