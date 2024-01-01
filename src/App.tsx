import "./App.css";
import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import Introduction from "./components/Introduction";
import Questionare from "./components/Questionare";
import Explanation from "./components/Explanation";
import Check from "./components/Check";
import Exam from "./components/Exam";
import { v4 as uuidv4 } from "uuid";


function App() {
  const [pageNum, setPageNum] = React.useState<any>(1);
  const [dbCount, setDbCount] = React.useState<any>(0);
  const [userID, setUserID] = React.useState<any>("");
  const [userAge, setUserAge] = React.useState<any>("");
  const [userGender, setUserGender] = React.useState<any>();

  
  const search = useLocation().search;
  const query = queryString.parse(search);


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
  }, []);

  return (
    <div className="App">
      {pageNum === 1 && (
        <Introduction
          userID={userID}
          setUserID={setUserID}
          setPageNum={setPageNum}
          pageNum={pageNum}
        />
      )}
      {pageNum === 2 && (
        <Questionare
          userID={userID}
          userAge = {userAge}
          userGender= {userGender}
          pageNum={pageNum}
          setDbCount={setDbCount}
          setUserAge = {setUserAge}
          setUserGender = {setUserGender}
          setPageNum={setPageNum}
        />
      )}
      {pageNum === 3 && (
        <Explanation 
          setPageNum={setPageNum} 
          pageNum={pageNum}
        />
      )}
      {pageNum === 4 && (
        <Check 
          setPageNum={setPageNum} 
          pageNum={pageNum}
        />
      )}
      {pageNum === 5 && (
        <Exam 
          userID={userID} 
          setPageNum={setPageNum} 
          pageNum={pageNum} 
          dbCount={dbCount}
          userAge={userAge}
          userGender={userGender}
        />
      )}
      {pageNum === 6 && (
        <div>
          <p>実験は以上で終了です。</p>
          <p>
            以下のパスコードをYahooクラウドソージングに入力した上で、このページを閉じてください。
          </p>

          <p>KQpQyFp4Fk</p>
        </div>
      )}
      {pageNum ===  99 && (
        <div>
          <p>あなたは実験の対象ではありません</p>
          <p>
            このページを閉じてください。
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
