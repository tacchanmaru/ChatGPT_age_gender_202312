import React, { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Checkbox, TextField } from "@mui/material";


import ProductDescription from "./ProductDescription";

type Props = {
  userGender: string;
  pageNum: number;
  dbCount: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
};

const Exam1: React.FC<Props> = (props) => {
  const [checkState, setCheckState] = useState(false);

  const hndlChk1 = (event: any) => {
    setCheckState(event.target.checked);
  };

  return (
    <div className="picboxContainer">
      <h1>
        ２つの商品説明文をよく読んでください。
      </h1>
      <p> 
        同じ商品の説明文が２つ並んでいます。<b>左から順に商品説明文１、商品説明文２とします。</b>2つの文章をよく読んでから、次へ進んでください。
      </p>

      <ProductDescription
        userGender={props.userGender}
        dbCount={props.dbCount}
      />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onChange={hndlChk1} />}
          style={{ margin: "16px 0px" }}
          label={
            <span style={{ fontWeight: "bold", fontSize: "1.2em" }}>
              ２つの商品説明文についてよく読んだ。
            </span>
          }
        />
      </FormGroup>
      <div style={{ textAlign: "right" }}>
        <Button style={{ margin: "1em 0px" }}
          variant="contained"
          color="primary"
          className="Button"
          onClick={() => {
            props.setPageNum(props.pageNum + 1);
          }}
          disabled={checkState ? false : true
          }
        >
          次に進む
        </Button>
      </div>

    </div>
  );
};

export default Exam1;