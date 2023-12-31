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
  const [q1Answer, setQ1Answer] = React.useState("");
  const [q2Answer, setQ2Answer] = React.useState("");

  const handleRoleChange = (e: any) => {
    setQ1Answer(e.target.value);
  };
  const handlePurposeChange = (e: any) => {
    setQ2Answer(e.target.value);
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
      <h3>問1: タスク画面に並べられている２つの商品説明文はどのようなものですか？</h3>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={handleRoleChange}
        >
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="異なる商品の紹介文であり、内容・表現が共に異なる"
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="同じ商品の紹介文であり、内容・表現が共に異なる"
          />
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="同じ商品の紹介文であり、内容はほとんど同じだが表現が異なる"
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
            label="２つの商品説明文から、より魅力的な文章を選択する"
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="２つの商品説明文から、質問文の内容に従って片方を選択する"
          />
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="２つの商品説明文から、ランダムに片方を選択する"
          />
        </RadioGroup>
      </FormControl>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          color="primary"
          className="button"
          onClick={() => props.setPageNum(props.pageNum - 1)}
        >
          説明に戻る
        </Button>

        <Tooltip
          title={
            q1Answer == "3" && q2Answer == "2"
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
                q1Answer == "3" && q2Answer == "2" ? false : true
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
