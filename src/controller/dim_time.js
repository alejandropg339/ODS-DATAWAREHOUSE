const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const db = require("../database");

const readFileCsvTime = async () => {
  const filename = path.join(__dirname, "../csvs/DIM_TIME.csv");
  const result = [];
  try {
    const data = fs
      .createReadStream(filename)
      .pipe(csv())
      .on("data", (data) => result.push(data))
      .on("end", () => {
        console.log(result.length);
        // console.log(result);
        insertData(result);
      });
    if (data) {
      console.log("logrado");
    }
  } catch (e) {
    console.log(e);
  }
};

const insertData = (result) => {
  result.forEach(async (item) => {
    const insertQuery = `INSERT IGNORE INTO ods_cryptothink_dw.dim_time values("${item?.Id}", ${item?.Year}, ${item?.Month}, ${item?.Day}, ${item?.Week})`;
    await db.query(insertQuery);
  });
};

module.exports = { readFileCsvTime };
