import React, { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Tooltip from "@mui/material/Tooltip";

type Props = {
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  pageNum: number;
};

const Check: React.FC<Props> = (props) => {
  const [roleAnswer, setRoleAnswer] = React.useState("");
  const [purposeAnswer, setPurposeAnswer] = React.useState("");

  const [confidenceValue, setConfidenceValue] = React.useState("");

  const handleRoleChange = (e: any) => {
    setRoleAnswer(e.target.value);
  };
  const handlePurposeChange = (e: any) => {
    setPurposeAnswer(e.target.value);
  };

  return (
    <div>
      <h1>この実験であなたは何をしますか？</h1>
      <p>
        <br />
        以下の問いに正しく回答して、「本番に進む」をクリックすると、この後の実験に参加できます。
        <br />
        「説明に戻る」をクリックすると、「あなたにしていただきたいこと」のページに戻れます。
      </p>
      <h3>問1: あなたの役割は何ですか？</h3>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={handleRoleChange}
        >
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="フリマアプリで商品を出品する人"
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="フリマアプリで商品を購入する人"
          />
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="フリマアプリの管理者"
          />
        </RadioGroup>
      </FormControl>
      <h3>問2: あなたは何をしなければなりませんか？</h3>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={handlePurposeChange}
        >
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="出品者のプロフィールを見て、送信するコメントを選ぶ"
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="商品の説明を見て、送信するコメントを選ぶ"
          />
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="送信するコメントをランダムに選ぶ"
          />
        </RadioGroup>
      </FormControl>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          color="primary"
          className="button"
          onClick={() => props.setPageNum(props.pageNum - 3)}
        >
          説明に戻る
        </Button>

        <Tooltip
          title={
            roleAnswer == "2" && purposeAnswer == "1"
              ? ""
              : "全ての設問に正しい解答を選択すると、本番に進むことができます。"
          }
        >
          <span>
            <Button
              variant="contained"
              color="primary"
              className=""
              onClick={() => props.setPageNum(props.pageNum + 1)}
              disabled={
                roleAnswer == "2" && purposeAnswer == "1" ? false : true
              }
            >
              本番に進む
            </Button>
          </span>
        </Tooltip>
      </div>
    </div>
  );
};

export default Check;
