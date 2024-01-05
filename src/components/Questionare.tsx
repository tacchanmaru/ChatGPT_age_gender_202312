import React, { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

import { getDatabase, ref, set, push, runTransaction, child, get } from "firebase/database";
import { firebaseDb } from "../firebase/index.js";



type Props = {
  yahooAge: string | (string | null)[] | null;
  yahooGender: string | (string | null)[] | null;
  userID: string;
  setDbCount: React.Dispatch<React.SetStateAction<number>>;
  userAge: string;
  userGender: string;
  pageNum: number;
  setUserAge: React.Dispatch<React.SetStateAction<number>>;
  setUserGender: React.Dispatch<React.SetStateAction<string>>;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  timeStamp: number;
};

const Introduction: React.FC<Props> = (props) => {

  const [checkState, setCheckState] = useState(false);

  const [fleaMarketExperience, setFleaMarketExperience] = React.useState("");
  const [fleaMarketDuration, setFleaMarketDuration] = React.useState("");
  const inputRef = useRef<HTMLInputElement>();
  const [inputError, setInputError] = useState(false);

  const fleaMarketOptions = ["なし", "買うだけ", "売るだけ", "両方"];
  const fleaMarketDurationOptions = ["なし", "1ヶ月未満", "3ヶ月未満", "半年未満", "1年未満", "3年未満", "3年以上"];

  const handleChangeGender = (event: SelectChangeEvent) => {
    props.setUserGender(event.target.value as string);
  };
  const handleChangeAge = (e: any) => {
    if (inputRef.current) {
      const ref = inputRef.current;
      if (!ref.validity.valid) {
        setInputError(true);
      } else {
        setInputError(false);
        props.setUserAge(e.target.value);
      }
    } 
  };

  const hndlChk1 = (event: any) => {
    setCheckState(event.target.checked);
  };

  const  flooredAge = (age: number) => {
    // 切り捨て
    return String(Math.floor(age / 10) * 10);
  }

  // データベースパスを決定する関数
  const determineDbPath = (age: number, gender: string): string | null => {
    let dbPath = "users/";

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

  // ユーザーデータを送信する関数
  function setUserIDAndSend() {
    const dbPath = determineDbPath(Number(props.userAge), props.userGender);

    // console.log(dbPath)
    if (!dbPath) {
      // 年齢または性別が範囲外
      props.setPageNum(99);
      return;
    }
    if (props.yahooAge !== flooredAge(Number(props.userAge)) || props.yahooGender !== props.userGender) {
      // クラウドソーシングと、年齢または性別が異なる
      console.log(flooredAge(Number(props.yahooAge)));
      props.setPageNum(99);
      return;
    }
    if (fleaMarketDuration === "なし" || fleaMarketExperience === "なし") {
      // 年齢または性別が範囲外 or フリマアプリの利用無し
      props.setPageNum(99);
      return;
    }
    else {
      push(ref(firebaseDb, dbPath), {
        timeStamp: props.timeStamp,
        userID: props.userID,
        userAge: props.userAge,
        userGender: props.userGender,
        fleaMarketExperience: fleaMarketExperience,
        fleaMarketDuration: fleaMarketDuration,
      }).then((snapshot) => {
        get(child(ref(firebaseDb), dbPath)).then((snapshot) => {
          props.setDbCount(Object.keys(snapshot.val()).length);
          props.setPageNum(() => props.pageNum + 1);
        })
      });
    }
  }


  return (
    <div>
      <h1>参加者情報の入力</h1>
      <p>
        この実験は、Yahooクラウドソーシングを用いて行う実験です。Yahooクラウドソーシング以外からアクセスした人は、ページを閉じてください。
      </p>
      <p>
        Yahooクラウドソーシングからアクセスした人は、年齢、性別、フリマアプリの利用有無、フリマアプリの利用期間をそれぞれ入力してから、画面下の「次に進む」ボタンを押してください。
      </p>
      <p>
        <span style={{ color: "gray" }}>version20231231</span>
          
      </p>
      <TextField
        id="outlined-basic"
        label="年齢"
        variant="outlined"
        inputProps={{ maxLength: 2, pattern: "^[0-9]+" }}
        onChange={(e) => handleChangeAge(e)}
        error={inputError}
        inputRef={inputRef}
        helperText="半角数字で入力してください"
        fullWidth
        style={{ margin: "1em 0px" }}
      ></TextField>
      <FormControl fullWidth style={{ margin: "1em 0px" }}>
        <InputLabel id="demo-simple-select-label">性別</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.userGender}
          label="性別"
          onChange={handleChangeGender}
        >
          <MenuItem value={"man"}>男性</MenuItem>
          <MenuItem value={"woman"}>女性</MenuItem>
          <MenuItem value={"others"}>どちらでもない / 回答しない</MenuItem>
        </Select>
      </FormControl>
      {/* フリマアプリの利用有無の入力コントロール */}
      <FormControl fullWidth style={{ margin: "1em 0px" }}>
        <InputLabel id="flea-market-experience-label">フリマアプリの利用有無</InputLabel>
        <Select
          labelId="flea-market-experience-label"
          id="flea-market-experience-select"
          value={fleaMarketExperience}
          label="フリマアプリの利用有無"
          onChange={(event) => setFleaMarketExperience(event.target.value)}
        >
          {fleaMarketOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* フリマアプリ利用期間の入力コントロール */}
      <FormControl fullWidth style={{ margin: "1em 0px" }}>
        <InputLabel id="flea-market-duration-label">フリマアプリ利用期間</InputLabel>
        <Select
          labelId="flea-market-duration-label"
          id="flea-market-duration-select"
          value={fleaMarketDuration}
          label="フリマアプリ利用期間"
          onChange={(event) => setFleaMarketDuration(event.target.value)}
        >
          {fleaMarketDurationOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {(props.userAge !== "" && props.userGender !== "" &&fleaMarketDuration !== "" && fleaMarketExperience !== "") && (   
        <div>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={hndlChk1} />}
              style={{ margin: "16px 0px" }}
              label={
                <span style={{ fontWeight: "bold", fontSize: "1.2em" 
                }}>
                  正しい情報を入力した。
                </span>
              }
            />
          </FormGroup>
        </div>
      )}
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
      
    </div>
  );
};

export default Introduction;