const { readFileCsv } = require("./controller/dim_gpu_prod.js");
const cron = require("node-cron");

//Call each Hour
cron.schedule("0 0 */1 * * *", readFileCsv);

//Call job each two minutes
// cron.schedule("0 */2 * * * *", readFileCsv);
