const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const db = require("../database");

const readFileCsv = async () => {
    const filename = path.join(__dirname, '../csvs/DIM_GPU_PROD.csv');
    const result = [];
    try {
        const data = fs.createReadStream(filename)
            .pipe(csv())
            .on('data', (data) => result.push(data))
            .on('end', () => {
                insertData(result);
            });
        if (data) {
            console.log('logrado');
        }

    } catch (e) {
        console.log(e)
    }
}

const insertData = async (result) => {
    console.log(result);
}

module.exports = { readFileCsv };