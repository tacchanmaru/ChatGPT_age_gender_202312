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
        <b>出品者のプロフィールを見て、送信するコメントを選んでください。</b>
      </p>

      <div style={{ textAlign: "right" }}>
        <span>
          <Button
            variant="contained"
            color="primary"
            className=""
            onClick={() => props.setPageNum(4)}
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
