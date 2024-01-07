const determineDbPath = (age: number, gender: string, usersOrResults: string): string | null => {


  let dbPath = "test/";

  if (usersOrResults === "users") {
    dbPath = "users/";
  } else if (usersOrResults === "results") {
    dbPath = "results/";
  } else {
    return null;
  }

  // 年齢、性別によってデータベースのパスを決定する
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

// 本来、以下のように書くべきであった。

// const determineDbPath = (age: number, gender: string, usersOrResults: string): string | null => {


//   let dbPath = "";

//   if (usersOrResults === "users") {
//     dbPath = "users/";
//   } else if (usersOrResults === "results") {
//     dbPath = "results/";
//   } else {
//     return null;
//   }


//   // 年齢、性別によってデータベースのパスを決定する
//   if (gender === "man") {
//     dbPath += "/man";
//   } else if (gender === "woman") {
//     dbPath += "/woman";
//   } else {
//     return null; // 性別が範囲外の場合、nullを返す
//   }

//   if (20 <= age && age <= 29) {
//     dbPath += "20s";
//   } else if (30 <= age && age <= 39) {
//     dbPath += "30s";
//   } else if (40 <= age && age <= 49) {
//     dbPath += "40s";
//   } else if (50 <= age && age <= 59) {
//     dbPath += "50s";
//   } else if (60 <= age && age <= 69) {
//     dbPath += "60s";
//   } else {
//     return null; // 年齢が範囲外の場合、nullを返す
//   }

//   return dbPath;
// }

export default determineDbPath;


