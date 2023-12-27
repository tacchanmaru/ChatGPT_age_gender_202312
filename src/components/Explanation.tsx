import React, { useEffect, useState, useRef } from "react";
import Radio from "@mui/material/Radio";
import ValenceInput from "./ValenceInput";
import ArousalInput from "./ArousalInput";
import ConfidenceInput from "./ConfidenceInput";
import EmotionInput from "./EmotionInput";
import Button from "@mui/material/Button";




type Props = {
  userAge: string;
  userGender: string;
  valenceValue: string;
  arousalValue: string;
  confidenceValue: string;
  emotionValue: string;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
};

const Explanation: React.FC<Props> = (props) => {
  const userAge = props.userAge;
  console.log(props.userAge);
  return (
    <div>
      <h1>実験の説明</h1>
      <p>
        この課題では、画面上に表示された次のようなメッセージを見て、質問に回答していただきます。
      </p>
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
        このメッセージは、あなたが「プランAとプランBのどちらが良いと思いますか？」と問いかけたことに対して、相手から送信されたものだと考えてください。
        <br />
        メッセージの内容は一定ですが、メッセージのフォントの形状は実験を進めるごとに変化していきます。
        <br />
        相手から送信されたメッセージを確認した上で、特にフォントに着目をして、表示される質問に順番に回答してください。
        <br />
        それぞれの質問に回答するたびに、画面下に「次に進む」ボタンが表示されます。ボタンを押して、次の質問に進んでください。
      </p>
      <p>表示される質問は以下の4つです。</p>
      <h3>
        Q1: 相手はどれくらいネガティブまたはポジティブな気持ちだと思いますか？
      </h3>
      <p>
        回答は以下の選択肢を用いて行います。
        <br/>
        5体の人形はそれぞれ表情が少しづつ異なっており、一番右が最もポジティブな状態を、一番左が最もネガティブな状態を示しています。
        <br />
        また9つの選択肢は、5体の人形に対応した5つの選択肢と、それぞれの人形の中間に位置する4つの選択肢からなります。
        <br/>
        9つの選択肢の中から最も適切だと思うものを選んでください。
      </p>
      <ValenceInput
        setValenceValue={void (() => {})}
        valenceValue={props.valenceValue}
        isDisable={true}
        isTest={false}
      />
      <h3>Q2: 相手はどれくらい興奮していると思いますか？</h3>
      <p>
        回答は以下の選択肢を用いて行います。
        <br />
        5体の人形は身体の中の図形（心臓の鼓動などをイメージ化したもの）で興奮状態を描いており、一番右が最も興奮している状態を、一番右が最も落ち着いている状態を示しています。
        <br />
        また9つの選択肢は、5体の人形に対応した5つの選択肢と、それぞれの人形の中間に位置する4つの選択肢からなります。
        <br/>
        9つの選択肢の中から最も適切だと思うものを選んでください。
      </p>
      <ArousalInput
        setArousalValue={void (() => {})}
        arousalValue={props.arousalValue}
        isDisable={true}
        isTest={false}
      />
      <h3>Q3: 相手はどれくらい自信があると思いますか？</h3>
      <p>
        回答は以下の選択肢を用いて行います。9つの選択肢の中から最も適切だと思うものを選んでください。
      </p>
      <ConfidenceInput
        setConfidenceValue={void (() => {})}
        confidenceValue={props.confidenceValue}
        isDisable={true}
      />
      <div>
        <h3>Q4: 相手の感情はどれが一番近いと思いますか？</h3>
        <p>
          回答は以下の選択肢を用いて行います。選択肢をよく読んで、7つの選択肢の中から最も適切だと思うものを選んでください。
        </p>
        <EmotionInput
          setEmotionValue={void (() => {})}
          emotionValue={props.emotionValue}
          isDisable={true}
        />
      </div>

      <div style={{ textAlign: "right" }}>
        <Button
          variant="contained"
          color="primary"
          className=""
          onClick={() => props.setPageNum(3)}
        >
          次に進む
        </Button>
      </div>
    </div>
  );
};

export default Explanation;
