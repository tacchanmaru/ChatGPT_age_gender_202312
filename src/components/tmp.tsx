import React, { useEffect, useState, useRef } from "react";
import { getDatabase, ref, set, push, get } from "firebase/database";
import { firebaseDb } from "../firebase/index.js";


type Props = {
  userID: string;
  dbCount: number;
  userAge: string;
  userGender: string;
  param: string | (string | null)[] | null;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
};

const Tmp: React.FC<Props> = (props) => {


  // データベースパスを決定する関数
  const determineDbPath = (age: number, gender: string): string | null => {
    let dbPath = "";

    if (20 <= age && age <= 29) {
      dbPath = "users/20s";
    } else if (30 <= age && age <= 39) {
      dbPath = "users/30s";
    } else if (40 <= age && age <= 49) {
      dbPath = "users/40s";
    } else if (50 <= age && age <= 59) {
      dbPath = "users/50s";
    } else if (60 <= age && age <= 69) {
      dbPath = "users/60s";
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

  const dbPath = determineDbPath(Number(props.userAge), props.userGender);
  
  useEffect(() => {
    console.log(dbPath)
    console.log(props.dbCount)
    }, []
  )

  // dbPathで指定したデータベースに登録されているデータの件数を取得する関数


  return (
    <div>
      <h1>テスト画面です</h1>
    </div>
  );
};

export default Tmp;