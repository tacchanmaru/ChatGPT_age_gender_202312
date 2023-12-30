import "./App.css";
import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


import Explanation from "./components/Explanation";
import Exam from "./components/Exam";
import Questionare from "./components/Questionare";
import Introduction from "./components/Introduction";
import Check from "./components/Check";
import Concentration from "./components/Concentration";
import { v4 as uuidv4 } from "uuid";

import Tmp from "./components/tmp";

function App() {
  const [pageNum, setPageNum] = React.useState<any>(1);
  const [dbCount, setDbCount] = React.useState<any>(0);
  const [userID, setUserID] = React.useState<any>("");
  const [userAge, setUserAge] = React.useState<any>("");
  const [userGender, setUserGender] = React.useState<any>();
  const [fontListShuffled, setFontListShuffled] = React.useState<string[]>([])
  const [fontListShuffled4, setFontListShuffled4] = React.useState<string[]>([])
  const [fontListShuffled6, setFontListShuffled6] = React.useState<string[]>([])
  const [fontListShuffled8, setFontListShuffled8] = React.useState<string[]>([])

  const fontList2 = ['ab-tori-b', 'ab-donmai', 'ab-hieros-regular', 'ab-jaroku-bold', 'ab-kesera', 'ab-kiraku-l', 'ab-quadra', 'ab-maruhanamaki', 'ab-hougan-m500', 'ab-babywalk', 'ab-intore', 'ab-suruga-u', 'ab-yamabiko-b', 'ab-doudoukaisyo', 'ab-gagaku-m', 'ab-countryroad', 'ab-anzu', 'ab-circle', 'ab-fudeshichi', 'ab-sanpobito', 'ab-kokikaku', 'ab-kumiki-b', 'ab-nara', 'ab-pochi', 'ab-tsubaki', 'ab-omusubi', 'ab-andante','noto-sans-cjk-jp']
  
  const fontList3 = ['ab-itaikoku', 'ab-walk', 'ab-plus', 'ab-kokoro-no1', 'ab-stick-medium', 'ab-waraku-m', 'ab-doramin', 'ab-clip-medium', 'ab-booing', 'ab-sekka', 'ab-kumiki-l', 'ab-hasemomo-r', 'ab-kikori', 'ab-j-gu', 'ab-koki', 'ab-karuta-bold', 'ab-kotodama-l', 'ab-ikkyu', 'ab-j-choki', 'ab-kotodama-u', 'ab-kotsubu', 'ab-marusan', 'ab-kai', 'ab-megadot9', 'ab-seiryu-light', 'ab-kokoro-no3', 'ab-polcadot']
  
  const fontList4 = ['ab-kotatsu', 'ab-kotodama-f', 'ab-roman', 'ab-karuta-el', 'ab-digicomb', 'ab-ryusen-aki', 'ab-ryusen-haru', 'ab-anzu-r', 'ab-kinmokusei-kuro', 'ab-ryushichi', 'ab-kirigirisu', 'ab-hiro', 'ab-mayuminwalk', 'ab-hanamaki', 'ab-shiguma', 'ab-kumiki-m', 'ab-lineboard-bold', 'ab-hasefude', 'ab-ryusen-fuyu', 'ab-shoutenmaru', 'ab-kazunaun-f', 'ab-aotama', 'ab-kai-light', 'ab-kokoro-no2', 'ab-tegami', 'ab-gagaku-b', 'ab-ryusen-natsu', 'ab-neuron']

  
  const search = useLocation().search;
  const query = queryString.parse(search);

  function arrayShuffle(array:string[]) {
    for(var i = (array.length - 1); 0 < i; i--){
  
      // 0〜(i+1)の範囲で値を取得
      var r = Math.floor(Math.random() * (i + 1));
  
      // 要素の並び替えを実行
      var tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    return array;
  }


  useEffect(() => {
    var userID = localStorage.getItem("userID");
    if (userID == null) {
      userID = uuidv4();
      localStorage.setItem("userID", userID);
      setUserID(userID);
      console.log(userID);
    } else {
      setUserID(userID);
      console.log(userID);
    }


    if (query["exp"] === "1") {
      setFontListShuffled(arrayShuffle(fontList2));
    } else if (query["exp"] === "2") { 
      setFontListShuffled(arrayShuffle(fontList3));
    } else if(query["exp"] === "3"){
      setFontListShuffled(arrayShuffle(fontList4));
    }
  }, []);

  useEffect(() => {
    setFontListShuffled4(fontListShuffled.slice(0, 9))
    setFontListShuffled6(fontListShuffled.slice(9, 18))
    setFontListShuffled8(fontListShuffled.slice(18))
  
  }, [fontListShuffled])
  
  // useEffect(() => { 
  //   console.log(fontListShuffled4)
  // }, [
  //   fontListShuffled4
  // ])

  return (
    <div className="App">
        {pageNum === 1 && (
          <Introduction
            userID={userID}
            setUserID={setUserID}
            setPageNum={setPageNum}
            param={query["exp"]}
            pageNum={pageNum}
          />
        )}
      {pageNum === 2 && (
        <Questionare
          userID={userID}
          userAge = {userAge}
          userGender= {userGender}
          param={query["exp"]}
          setDbCount={setDbCount}
          setUserAge = {setUserAge}
          setUserGender = {setUserGender}
          setPageNum={setPageNum}
        />
      )}
      {pageNum === 15 && (
        <Explanation
          userGender = {userGender}
          userAge = {userAge}
          valenceValue={""}
          arousalValue={""}
          confidenceValue={""}
          emotionValue={""}
          setPageNum={setPageNum}
        />
      )}
      {pageNum === 3 && <Check setPageNum={setPageNum} />}
      {pageNum === 4 && (
        <Exam userID={userID} setPageNum={setPageNum} pageNum={pageNum} fontList={fontListShuffled4} />
      )}
      {pageNum === 5 && (
        <Concentration
          userID={userID}
          setPageNum={setPageNum}
          pageNum={pageNum}
        />
      )}
      {pageNum === 6 && (
        <Exam userID={userID} setPageNum={setPageNum} pageNum={pageNum} fontList={fontListShuffled6}/>
      )}
      {pageNum === 7 && (
        <Concentration
          userID={userID}
          setPageNum={setPageNum}
          pageNum={pageNum}
        />
      )}
      {pageNum === 8 && (
        <Exam userID={userID} setPageNum={setPageNum} pageNum={pageNum} fontList={fontListShuffled8}/>
      )}
      {pageNum === 9 && (
        <div>
          <p>実験は以上で終了です。</p>
          <p>
            以下のパスコードをYahooクラウドソージングに入力した上で、このページを閉じてください。
          </p>

          <p>AM5m1WejO9</p>
        </div>
      )}
      {pageNum ===  10 && (
        <div>
          <p>あなたは実験の対象ではありません</p>
          <p>
            このページを閉じてください。
          </p>
        </div>
      )}
      {pageNum === 11 && (
        <Tmp
          userID={userID}
          dbCount={dbCount}
          userAge = {userAge}
          userGender= {userGender}
          param={query["exp"]}
          setPageNum={setPageNum}
        />
      )}
    </div>
  );
}

export default App;
