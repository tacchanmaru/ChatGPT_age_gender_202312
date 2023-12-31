import React, { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Checkbox, TextField } from "@mui/material";

type Props = {
  userID: string;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  setUserID: React.Dispatch<React.SetStateAction<string>>;
  param: string | (string | null)[] | null;
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
  function setUserIDAndSend() {
    fullScreen(document.documentElement);
    // props.setPageNum(() => props.pageNum + 1);
    props.setPageNum(2);
  }
  return (
    <div>
      <h1>フリマアプリ上商品説明文の書き方の読み手の商品に対する印象の研究</h1>
      <p>
        この実験は、Yahoo！クラウドソーシングを用いて行う実験です。Yahoo！クラウドソーシング以外からアクセスした人は、ページを閉じてください。
        過去にYahoo！クラウドソーシングにおいて、本研究にご参加いただいたことのある方はご参加いただけません。
      </p>
      <p>（以下、前ページと同じ内容）</p>
      <h2>▽この実験の目的・概要</h2>
      <p>
        この実験は「フリマアプリ上の取引におけるコミュニケーションの研究」の一環として実施されるものです。
      </p>
      <p>
        タスクでは、フリマアプリを模した実験サイト内で、さまざまな状況においてどのような判断を行うかを回答していただきます。
      </p>
      <p>
        また、年齢や性別などをおたずねするアンケートや、タスクに対する理解度や集中度を調べる質問にもお答えいただきます。
      </p>
      <p>
        タスクをしているときに少し疲れたり、飽きたりすることもあるかもしれませんが、基本的に強いストレスを感じるものではないと考えております。もし途中で不快になったときなどには、いつでも実験を中止できます（下記の「この実験への参加と途中辞退の自由」をご覧ください）。
      </p>
      <h2>▽この実験の所要時間</h2>
      <p>
        すべてのタスクを終えるのに個人差はありますが<b>3分程度</b>
        かかる見込みです。なお、制限時間は15分です。15分を経過すると報酬を受けられません。
      </p>
      <h2>▽この実験に参加いただける方</h2>
      <p>
        フリマアプリを利用したことがあり、18歳以上の日本語を母国語とする方で、3分程度、集中してまじめにタスクに取り組んでいただける方。「集中してまじめにタスクに取り組むこと」とは「質問文をよく読んで質問に回答すること」を意味します。
      </p>
      <h2>▽実験参加者にもたらされる利益および不利益</h2>
      <p>
        この研究が、皆様に即座に利益をもたらす可能性は、現在のところ低いと考えられます。しかし、この研究は、今後の心理学研究の発展に寄与する重要な基礎的知見をもたらすことが期待されています。
      </p>
      <h2>▽この実験への参加と途中辞退の自由</h2>
      <p>
        この実験への参加はあなたの自由意思にゆだねられています。たとえタスクを開始した後でも、いつでも理由の如何を問わず、参加を取りやめることができます。ただし、タスクをすべて完了しなかった場合には、作業承認されない（報酬が支払われない）ことをご了承ください。
      </p>
      <h2>▽この実験のデータの利用</h2>
      <p>
        本実験のデータはまとめて統計的に処理され、その結果は学会発表や学術雑誌およびデータベース上等で公表されます。ただし、本実験では、あなた個人を特定できるような情報は収集されませんので、あなた個人の情報が公開されることはありません。なお、本実験で得られたデータの分析や研究にあたっては、研究目的達成に必要な範囲内において、本データを、株式会社メルカリ（下記に示す研究従事者に限ります）と共同利用します。共同利用における管理責任者は東京大学です。
      </p>
      <h2>▽その他の注意事項</h2>
      <p>
        上記に記載されている本実験の参加・実施にかかわる条件を満たしていない場合は、募集内容どおりにタスクを完了したとはみなせず、作業承認できないことをご了承ください。
      </p>
      <h2>▽お問い合わせ</h2>
      <p>
        疑問点などがありましたら、次のメールアドレスまでご連絡ください。
        <br />
        ahautasaari [at] g.ecc.u-tokyo.ac.jp
        <br />
        Hautasaari Ari　東京大学 大学院情報学環 特任准教授
      </p>
      <h2>▽研究従事者</h2>
      <p>
        Hautasaari Ari（研究責任者）:　東京大学 大学院情報学環 特任准教授
        <br />
        中條麟太郎:　東京大学 大学院学際情報学府 修士課程
        <br />
        藤原未雪:　株式会社メルカリ Researcher
      </p>
      <p>
        <span style={{ color: "red" }}>
          <b>
            次に進むと、自動的にフルスクリーン表示になります。実験中はフルスクリーンを解除しないでください。
          </b>
        </span>
      </p>
      <p>
        <span style={{ color: "gray" }}>version202212162240</span>
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
      {props.userID != "" && (
        <div style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            className="button"
            onClick={setUserIDAndSend}
            disabled={!checkState}
            style={{ margin: "16px 0px" }}
          >
            次に進む
          </Button>
        </div>
      )}
    </div>
  );
};

export default Introduction;
