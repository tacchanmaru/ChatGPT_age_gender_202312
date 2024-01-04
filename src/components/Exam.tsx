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

  function resetColor() {
    const buttonLeft = document.getElementById("product-description-left");
    const buttonRight = document.getElementById("product-description-right");
    
    if(buttonLeft?.classList.contains("clicked")){
      buttonLeft?.classList.remove("clicked");
    }
    if(buttonRight?.classList.contains("clicked")){
      buttonRight?.classList.remove("clicked");
    }
  }

  return (
    <div className="picboxContainer">
      
      {progressNum === 0 && (
        <div>
          <h1>
            2つの商品説明文をよく読んでください。
          </h1>
          <p>
            <b>同じ商品の</b>説明文が2つ並んでいます。<b>2つの文章をよく読んでから、</b>次へ進んでください。<br/>
            次のページからは、<b>以下の商品説明文の比較に関する質問</b>に答えていただきます。<b>質問は全てで3つあります。</b>
          </p>
        </div>
      )}
      {progressNum !== 0 && (
        <div>
          <h1>
            質問文をよく読んで、回答してください。
          </h1>
          <p style={{ borderBottom: "2px dashed" }}> 
            <b>前のページと</b>同じ商品説明文が2つ並べてあります。<b>質問文を読んで、改めて商品説明文を比較をしてから、</b>どちらかの文章をクリックしてください。文章をクリックすると枠が青くなります。<b>選んだ方の枠が青くなっていることを確認してから、</b>次へを押してください。
          </p>
        </div>
      )}
      <div>
        {progressNum == 1 && (
          <h2 style={{ marginTop: "30px", textAlign: "center" }}>
            Q1: どちらの文章が商品を購入する意欲をより強く感じさせますか？
          </h2>
        )}
        {progressNum == 2 && (
          <h2 style={{ marginTop: "30px", textAlign: "center" }}>
            Q2: どちらの製品の説明がより複数の類似した言葉やフレーズを含み、例を挙げて根拠を含むなどの条件を満たすと感じますか？
          </h2>
        )}
        {progressNum == 3 && (
          <h2 style={{ marginTop: "30px", textAlign: "center" }}>
            Q3: どちらの文章が商品の説明をより詳細にしていると感じますか？
          </h2>
        )}
      </div>

      <ProductDescription
        userGender={props.userGender}
        dbCount={props.dbCount}
        attractiveValue={attractiveValue}
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
                resetColor();
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
                resetColor();
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