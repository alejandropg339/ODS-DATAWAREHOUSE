const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const db = require("../database");

const readFileCsv = async () => {
  const filename = path.join(__dirname, "../csvs/DIM_GPU_PROD.csv");
  const result = [];
  try {
    const data = fs
      .createReadStream(filename)
      .pipe(csv())
      .on("data", (data) => result.push(data))
      .on("end", () => {
        console.log(result.length);
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
    const insertQuery = `INSERT IGNORE INTO ods_cryptothink_dw.dim_gpu_prod values(${item?.Id}, "${item?.Processor}", "${item?.Memory_Type}", ${item?.Memory_Capacity}, "${item?.Processor_Manufacturer}", "${item?.GPU_Manufacturer}")`;
    await db.query(insertQuery);
  });
};

module.exports = { readFileCsv };
