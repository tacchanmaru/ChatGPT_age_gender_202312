import React from "react";

import Button from "@mui/material/Button";

type Props = {
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  pageNum: number;
};

const Explanation: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>あなたにしていただきたいこと【重要!】</h1>
      <p>
        あなたはフリマアプリで<b>商品を購入したい</b>と思っています。
      </p>
      <p> 
        タスク画面の左右それぞれに<b>同じ商品</b>を紹介するための文章（商品説明文）が並べられています。２つの文章は<b>ほとんど同じ内容</b>ですが、<b>異なる表現</b>になっています。２つの文章を<b>よく読み、比較をした上で、</b>質問文の内容に従ってどちらかの文章を選んでください。
      </p>

      <div style={{ textAlign: "right" }}>
        <span>
          <Button
            variant="contained"
            color="primary"
            className=""
            onClick={() => props.setPageNum(props.pageNum + 1)}
            style={{ margin: "16px 0px" }}
          >
            次に進む
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Explanation;