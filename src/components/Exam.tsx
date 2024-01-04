import React, { useEffect, useState, useRef } from "react";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";

import ProductDescription from "./ProductDescription";

import { getDatabase, ref, set, push } from "firebase/database";
import { firebaseDb } from "../firebase/index.js";

type Props = {
  userAge: string;
  userGender: string;
  userID: string;
  pageNum: number;
  dbCount: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
};

const Exam: React.FC<Props> = (props) => {
  const [progressNum, setProgressNum] = React.useState<number>(0);

  const [attractiveValue, setAttractiveValue] = React.useState("");
  const [politeValue, setPoliteValue] = React.useState("");
  const [trustValue, setTrustValue] = React.useState("");


  // データベースパスを決定する関数
  const determineDbPath = (age: number, gender: string): string | null => {
    let dbPath = "results/";

    if (20 <= age && age <= 29) {
      dbPath += "20s";
    } else if (30 <= age && age <= 39) {
      dbPath += "30s";
    } else if (40 <= age && age <= 49) {
      dbPath += "40s";
    } else if (50 <= age && age <= 59) {
      dbPath += "50s";
    } else if (60 <= age && age <= 69) {
      dbPath += "60s";
    } else {
      return null; // 年齢が範囲外の場合、nullを返す
    }
   
    if (gender === "man") {
      dbPath += "-m";
    } else if (gender === "woman") {
      dbPath += "-w";
    } else {
      return null; // 性別が範囲外の場合、nullを返す
    }

    return dbPath;
  }

  function sendDataAndNext() {
    const dbPath = determineDbPath(Number(props.userAge), props.userGender);

    if (!dbPath) {
      // 年齢または性別が範囲外
      props.setPageNum(99);
      return;
    }
    else {
      push(ref(firebaseDb, dbPath), {
        userID: props.userID,
        attractive: attractiveValue,
        polite: politeValue,
        trust: trustValue,
      });
      setAttractiveValue("");
      setPoliteValue("");
      setTrustValue("");

      props.setPageNum(props.pageNum + 1);
      console.log(props.pageNum);
    }
  }


  return (
    <div className="picboxContainer">
      
      {progressNum === 0 && (
        <div>
          <h1>
            ２つの商品説明文をよく読んでください。
          </h1>
          <p>
            同じ商品の説明文が２つ並んでいます。<b>2つの文章をよく読んでから、</b>次へ進んでください。
          </p>
        </div>
      )}
      {progressNum !== 0 && (
        <div>
          <h1>
            質問文をよく読んで、回答してください。
          </h1>
          <p style={{ borderBottom: "2px dashed" }}> 
            同じ商品の説明文が2つ並んでいます。<b>2つの文章をよく読み、比較をした上で、</b>質問文の内容に従ってそれぞれどちらかの文章を選んでください。<b>質問文は全てで3つあります。</b>
          </p>
        </div>
      )}
      <div>
        {progressNum == 1 && (
          <h2 style={{ marginTop: "50px", textAlign: "center" }}>
            Q1: どちらの文章が商品を購入する意欲をより強く感じさせますか？
          </h2>
        )}
        {progressNum == 2 && (
          <h2 style={{ marginTop: "50px", textAlign: "center" }}>
            Q2: どちらの製品の説明がより複数の類似した言葉やフレーズを含み、例を挙げて根拠を含むなどの条件を満たすと感じますか？
          </h2>
        )}
        {progressNum == 3 && (
          <h2 style={{ marginTop: "50px", textAlign: "center" }}>
            Q3: どちらの文章が商品の説明をより詳細にしていると感じますか？
          </h2>
        )}
      </div>

      <ProductDescription
        userGender={props.userGender}
        dbCount={props.dbCount}
        progressNum={progressNum}
        setAttractiveValue={setAttractiveValue}
        setPoliteValue={setPoliteValue}
        setTrustValue={setTrustValue}
      />

      <div>
      {progressNum === 0 && (
          <div style={{ textAlign: "right" }}>
            <Button style={{ margin: "1em 0px" }}
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
        {progressNum === 1 && (
          <div style={{ textAlign: "right" }}>
            <Button style={{ margin: "1em 0px" }}
              variant="contained"
              color="primary"
              className="Button"
              onClick={() => {
                setProgressNum(progressNum + 1);
              }}
              disabled={ attractiveValue !== "" ? false : true
              }
            >
              次に進む
            </Button>
          </div>
        )}
        {progressNum == 2 && (  
          <div style={{ textAlign: "right" }}>
            <Button style={{ margin: "1em 0px" }}
              variant="contained"
              color="primary"
              className="Button"
              onClick={() => {
                setProgressNum(progressNum + 1);
              }}
              disabled={ politeValue !== "" ? false : true
              }
            >
              次に進む
            </Button>
          </div>
        )}
        {progressNum == 3 && (
          <div style={{ textAlign: "right" }}>
            <Button style={{ margin: "1em 0px" }}
              variant="contained"
              color="primary"
              className="Button"
              onClick={() => {
                sendDataAndNext();
              }}
              disabled={ trustValue !== "" ? false : true
              }
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