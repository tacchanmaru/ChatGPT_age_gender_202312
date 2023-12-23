import React, { useEffect, useState, useRef } from "react";
import Radio from "@mui/material/Radio";
import ValenceInput from "./ValenceInput";
import ArousalInput from "./ArousalInput";
import ConfidenceInput from "./ConfidenceInput";
import EmotionInput from "./EmotionInput";
import Button from "@mui/material/Button";


import { getDatabase, ref, set, push } from "firebase/database";
import { firebaseDb } from "../firebase/index.js";

type Props = {
  userID: string;
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  fontList: string[];
};

const Exam: React.FC<Props> = (props) => {
  const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // useEffect(() => {
  //   setFontArray(shuffle(fontArray));
  //   console.log("shuffled");
  // }, []);

  // const fontList = [
  //   "ab-yurumin",
  //   "ab-yogurt",
  //   "ab-tyuusyobokunenn",
  //   "ab-tsurumaru",
  //   "ab-tori-a",
  //   "ab-tombo-bold",
  //   "ab-tanteidan",
  //   "ab-suzume",
  //   "ab-24h",
  //   "ab-aki",
  // ];
  
  // const [fontArray, setFontArray] = React.useState([
  //   0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  // ]);
  const [fontNum, setFontNum] = React.useState<number>(0);
  const [progressNum, setProgressNum] = React.useState<number>(0);

  const [arousalValue, setArousalValue] = React.useState("");
  const [valenceValue, setValenceValue] = React.useState("");
  const [confidenceValue, setConfidenceValue] = React.useState("");
  const [emotionValue, setEmotionValue] = React.useState("");

  function sendDataAndNext() {
    push(ref(firebaseDb, "results"), {
      userID: props.userID,
      typeface: props.fontList[fontNum],
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
    if (fontNum < (props.fontList.length-1)) {
      setFontNum(fontNum + 1);
    } else {
      props.setPageNum(props.pageNum + 1);
      console.log(props.pageNum)
    }
  }

  // useEffect(() => {
  //   console.log(fontNum)
  //   console.log(props.fontList)
  //   console.log(props.fontList[fontNum])
  // },[fontNum])

  return (
    <div className="picboxContainer">
      <h2>
        これは、あなたの「プランAとプランBのどちらが良いと思う？」という問いかけに対して、相手から送信されたメッセージです。以下の質問に答えてください。
      </h2>
      <div
        style={{
          margin: "64px 0px",
        }}
      >
        <div className="mycomment">
          {/* <img src={show_pic(fontNum, 0)} alt="" className="picbox" width="400px" /> */}
          <p
            style={{
              fontFamily: props.fontList[fontNum],
              fontWeight: 400,
              fontStyle: "normal",
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
      <div>
        {progressNum == 0 && (
          <div>
            <h3>
              Q1:
              相手はどれくらいネガティブまたはポジティブな気持ちだと思いますか？
            </h3>
            <ValenceInput
              setValenceValue={setValenceValue}
              valenceValue={valenceValue}
              isDisable={false}
              isTest={false}
            />
          </div>
        )}
        {progressNum == 1 && (
          <div>
            <h3>Q2: 相手はどれくらい興奮していると思いますか？</h3>
            <ArousalInput
              setArousalValue={setArousalValue}
              arousalValue={arousalValue}
              isDisable={false}
              isTest={false}
            />
          </div>
        )}
        {progressNum == 2 && (
          <div>
            <h3>Q3: 相手はどれくらい自信があると思いますか？</h3>
            <ConfidenceInput
              setConfidenceValue={setConfidenceValue}
              confidenceValue={confidenceValue}
              isDisable={false}
            />
          </div>
        )}
        {progressNum == 3 && (
          <div>
            <h3>Q4: 相手の感情はどれが一番近いと思いますか？</h3>
            <EmotionInput
              setEmotionValue={setEmotionValue}
              emotionValue={emotionValue}
              isDisable={false}
            />
            {emotionValue != "" && (
              <div style={{ textAlign: "right" }}>
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
        )}
        {((valenceValue != "" && progressNum == 0) ||
          (arousalValue != "" && progressNum == 1) ||
          (confidenceValue != "" && progressNum == 2)) && (
          <div style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              className="Button"
              onClick={() => {
                setProgressNum(progressNum + 1);
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

export default Exam;
