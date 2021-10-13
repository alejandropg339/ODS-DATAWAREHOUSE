const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const db = require("../database");

const readFileCsvGpuPrice = async () => {
    const filename = path.join(__dirname, "../csvs/FACT_GPU_PRICE.csv");
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


const insertData = async (result) => {

    let arrResults = [];

    const LONGITUD_PEDAZOS = 100000;
    for (let i = 0; i < result.length; i += LONGITUD_PEDAZOS) {
        let pedazo = result.slice(i, i + LONGITUD_PEDAZOS);
        arrResults.push(pedazo);
    }

    arrResults[0].forEach(async (item) => {
        const insertQuery = `INSERT IGNORE INTO ods_cryptothink_dw.fact_gpu_price values(${item?.Price_USD}, ${item?.Price_Original}, "${item?.TimeId}", ${item?.ProdId})`;
        await db.query({sql: insertQuery, timeout:60000});
    });

};



module.exports = { readFileCsvGpuPrice };
