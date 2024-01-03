import React, { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Checkbox, TextField } from "@mui/material";

type Props = {
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  pageNum: number;
};

const Introduction: React.FC<Props> = (props) => {
  const [checkState, setCheckState] = useState(false);

  function fullScreen(target: any) {
    //Chrome15+, Safari5.1+, Opera15+
    if (target.webkitRequestFullscreen) {
      target.webkitRequestFullscreen();
    }
    //FF10+
    else if (target.mozRequestFullScreen) {
      target.mozRequestFullScreen();
    }
    //IE11+
    else if (target.msRequestFullscreen) {
      target.msRequestFullscreen();
    }
    // HTML5 Fullscreen API仕様
    else if (target.requestFullscreen) {
      target.requestFullscreen();
    }
    // 未対応
    else {
      alert("ご利用のブラウザはフルスクリーン操作に対応していません");
    }
  }
  const hndlChk1 = (event: any) => {
    setCheckState(event.target.checked);
  };
  function forceFullScrean() {
    fullScreen(document.documentElement);
    props.setPageNum(() => props.pageNum + 1);
  }
  return (
    <div>
      <h1>フリマアプリ上商品説明文の書き方の読み手の商品に対する印象の研究</h1>
      <p>
        本実験は、Yahoo！クラウドソーシングを用いて行う実験です。Yahoo！クラウドソーシング以外からアクセスした人は、ページを閉じてください。
        過去にYahoo！クラウドソーシングにおいて、本研究にご参加いただいたことのある方はご参加いただけません。
      </p>
      <p>（以下、前ページと同じ内容）</p>
      <h2>▽本実験の概要</h2>
      <p>
        本実験の目的はフリマアプリにおける商品説明文の書き方が読み手の商品に対する印象に与える影響を調査することです。
      </p>
      <p>
        タスクでは、実験サイト内で商品説明文が２つ提示され、設問の内容に従ってどちらか一方を選択していただきます。
      </p>
      <p>
        また、年齢や性別、フリマアプリ経験などをおたずねするアンケートや、タスクに対する理解度や集中度を調べる質問にもお答えいただきます。
      </p>
      <p>
        タスクをしているときに少し疲れたり、飽きたりすることもあるかもしれませんが、基本的に強いストレスを感じるものではないと考えております。もし途中で不快になったときなどには、いつでも実験を中止できます（下記の「本実験への参加と途中辞退の自由」をご覧ください）。
      </p>
      <h2>▽タスクの所要時間</h2>
      <p>
        タスクを終えるのに個人差はありますが3分程度かかる見込みです。なお、制限時間は15分です。15分を経過すると報酬を受けられません。
      </p>
      <h2>▽本実験に参加いただける方</h2>
      <p>
        20歳以上の日本語を母国語とする方で、フリマアプリの利用経験があり、3分程度、集中してまじめにタスクに取り組んでいただける方。「集中してまじめにタスクに取り組むこと」は「質問文をよく読んで質問に回答すること」を含みます。
      </p>
      <h2>▽本実験の参加者にもたらされる利益および不利益</h2>
      <p>
        本研究が、皆様に即座に利益をもたらす可能性は、現在のところ低いと考えられます。しかし、本研究は、今後の心理学研究の発展に寄与する重要な基礎的知見をもたらすことが期待されています。
      </p>
      <h2>▽本実験への参加と途中辞退の自由</h2>
      <p>
        本実験への参加はあなたの自由意思にゆだねられています。たとえタスクを開始した後でも、いつでも理由の如何を問わず、参加を取りやめることができます。ただし、タスクをすべて完了しなかった場合には、作業承認されない（報酬が支払われない）ことをご了承ください。
      </p>
      <h2>▽本実験のデータの利用</h2>
      <p>
        本実験のデータはまとめて統計的に処理され、その結果は学会発表や学術雑誌、データベース上などで公開される予定です。ただし、本実験では、あなた個人を特定できるような情報は収集されませんので、あなた個人の情報が公開されることはありません。
      </p>
      <h2>▽その他の注意事項</h2>
      <p>
        上記に記載されている本実験の参加・実施にかかわる条件を満たしていない場合は、募集内容どおりにタスクを完了したとはみなせず、作業承認できないことをご了承ください。
      </p>
      <h2>▽お問い合わせ</h2>
      <p>
        疑問点などがありましたら、次のメールアドレスまでご連絡ください。
        <br />
        tatsu-mase [at] g.ecc.u-tokyo.ac.jp
        <br />
        欄木達也（東京大学工学部学部４年）
      </p>
      <h2>▽研究従事者</h2>
      <p>
        欄木達也（東京大学工学部学部４年）
        <br />
        Ari Hautasaari（東京大学大学院情報学環）
        <br />
        畑田 裕二（東京大学大学院情報学環）
        <br />
        苗村健（東京大学大学院情報学環）
      </p>
      <p>
        <span style={{ color: "red" }}>
          <b>
            次に進むと、自動的にフルスクリーン表示になります。実験中はフルスクリーンを解除しないでください。
          </b>
        </span>
      </p>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onChange={hndlChk1} />}
          style={{ margin: "16px 0px" }}
          label={
            <span style={{ fontWeight: "bold", fontSize: "1.2em" }}>
              以上の内容に同意する
            </span>
          }
        />
      </FormGroup>
      <div style={{ textAlign: "right" }}>
        <Button
          variant="contained"
          color="primary"
          className="button"
          onClick={forceFullScrean}
          disabled={!checkState}
          style={{ margin: "16px 0px" }}
        >
          次に進む
        </Button>
      </div>
    </div>
  );
};

export default Introduction;
