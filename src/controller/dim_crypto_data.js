const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const db = require("../database");

const readFileCsvCryptoData = async () => {
  const filename = path.join(__dirname, "../csvs/DIM_CRYPTO_DATA.csv");
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
    const insertQuery = `INSERT IGNORE INTO ods_cryptothink_dw.dim_crypto_data values(${item?.Id}, "${item?.Code}", "${item?.Currency_Name}")`;
    await db.query(insertQuery);
  });
};

module.exports = { readFileCsvCryptoData };
