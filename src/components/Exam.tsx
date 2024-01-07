import React, { useEffect, useState, useRef } from "react";
import { getDatabase, ref, set, push } from "firebase/database";
import { firebaseDb } from "../firebase/index.js";
import Button from "@mui/material/Button";

import ProductDescription from "./ProductDescription";
import determineDbPath from "./dbPath";

type Props = {
  userAge: string;
  userGender: string;
  userID: string;
  pageNum: number;
  dbCount: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  timeStamp: number;
};

const Exam: React.FC<Props> = (props) => {
  const [progressNum, setProgressNum] = React.useState<number>(0);

  const [attractiveValue, setAttractiveValue] = React.useState("");
  const [politeValue, setPoliteValue] = React.useState("");
  const [trustValue, setTrustValue] = React.useState("");

  const [examStartTime, setExamStartTime] = React.useState<number>(0);
  var examEndTime: number;

  useEffect(() => {
    let date = new Date();
    let dataTime = Math.floor( date.getTime() / 1000 );
    setExamStartTime(dataTime);
  }, []);


  // 商品idを返す関数
  const getProductID = () => {
    if (props.dbCount % 3 === 1) {
      return "1";
    } else if (props.dbCount % 3 === 2) {
      return "2";
    } else {
      return "3";
    }
  }

  function sendDataAndNext() {
    let date = new Date();
    examEndTime = Math.floor( date.getTime() / 1000 );

    const dbPath = determineDbPath(Number(props.userAge), props.userGender, "results");

    if (!dbPath) {
      // 年齢または性別が範囲外
      props.setPageNum(99);
      return;
    }
    else {
      var resultsDb = {
        userID: props.userID,
        timeStamp: props.timeStamp,
        productID: getProductID(),
        attractive: attractiveValue,
        polite: politeValue,
        trust: trustValue,
        task_Period: examEndTime - examStartTime,
      }

      console.log("resultsDb", resultsDb);
      push(ref(firebaseDb, dbPath), resultsDb);

      setAttractiveValue("");
      setPoliteValue("");
      setTrustValue("");

      props.setPageNum(props.pageNum + 1);
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

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
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
                scrollTop();
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
                scrollTop();
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
                scrollTop();
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