import React, { useEffect, useState, useRef } from "react";
import ValenceInput from "./ValenceInput";
import Button from "@mui/material/Button";


import { getDatabase, ref, set, push } from "firebase/database";
import { firebaseDb } from "../firebase/index.js";

type Props = {
  userID: string;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  pageNum: number;
};

const Concentration: React.FC<Props> = (props) => {
  const [progressNum, setProgressNum] = React.useState<number>(0);

  const [arousalValue, setArousalValue] = React.useState("");
  const [valenceValue, setValenceValue] = React.useState("");
  const [confidenceValue, setConfidenceValue] = React.useState("");
  const [emotionValue, setEmotionValue] = React.useState("");

  function sendDataAndNext() {
    push(ref(firebaseDb, "results"), {
      userID: props.userID,
      typeface: "Concentration Test",
      arousal: arousalValue,
      valence: valenceValue,
      confidence: confidenceValue,
      emotion: emotionValue,
    });
    setArousalValue("");
    setValenceValue("");
    setConfidenceValue("");
    setEmotionValue("");
    setProgressNum(0);
    props.setPageNum(props.pageNum+1);
  }

  return (
    <div className="picboxContainer">
      <h2>これは、あなたが集中して課題に取り組んでいるかを確認するための設問です。以下のメッセージの通りに答えてください。</h2>
      <div
        style={{
          margin: "64px 0px",
        }}
      >
        <div className="mycomment">
          {/* <img src={show_pic(fontNum, 0)} alt="" className="picbox" width="400px" /> */}
          <p
            style={{
              fontSize: 48,
              paddingLeft: 24,
            }}
          >
            以下の設問では最もポジティブな感情を選択してください。
          </p>
        </div>
      </div>
      <div>
        {progressNum == 0 && (
          <div>
            <h3>
              Q1: 相手はどれくらいネガティブまたはポジティブな気持ちだと思いますか？
            </h3>
            <ValenceInput
              setValenceValue={setValenceValue}
              valenceValue={valenceValue}
              isDisable={false}
              isTest={false}
            />
          </div>
        )}
        {valenceValue != "" && progressNum == 0 && (
          <div style={{textAlign:"right"}}>
          <Button
            variant="contained"
            color="primary"
            className="Button"
            onClick={() => {
              sendDataAndNext();
            }}
          >
            次に進む
            </Button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Concentration;
