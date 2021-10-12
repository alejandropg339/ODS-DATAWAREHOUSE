// const csv = require('csv-parser');
// const fs = require('fs');
// const path = require('path');
// const result = [];

// const filename = path.join(__dirname, '/csvs/DIM_GPU_PROD.csv');

// fs.createReadStream(filename)
//   .pipe(csv())
//   .on('data', (data) => result.push(data))
//   .on('end', () => {
//     console.log(result);
//   });

const {readFileCsv} = require('./controller/dim_gpu_prod.js');

readFileCsv();