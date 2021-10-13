const { readFileCsv } = require("./controller/dim_gpu_prod.js");
const { readFileCsvCpuProd } = require("./controller/dim_cpu_prod.js");
const { readFileCsvCryptoData } = require("./controller/dim_crypto_data.js");
const { readFileCsvTime } = require("./controller/dim_time.js");
const { readFileCsvGpuPrice } = require("./controller/fact_gpu_price.js");
const { readFileCsvCryptoRate } = require("./controller/fac_crypto_rate.js");
const { readFileCsvCpuPrice } = require("./controller/fact_cpu_price.js");

const cron = require("node-cron");

//Call each Hour
// cron.schedule("0 0 */1 * * *", readFileCsv);

//Call job each two minutes
// cron.schedule("0 */2 * * * *", readFileCsv);
// cron.schedule("0 */2 * * * *", readFileCsvCpuProd);
// cron.schedule("0 */2 * * * *", readFileCsvCryptoData);
// cron.schedule("0 */2 * * * *", readFileCsvTime);
// cron.schedule("0 */2 * * * *", readFileCsvGpuPrice);
// cron.schedule("0 */2 * * * *", readFileCsvCryptoRate);
// cron.schedule("0 */2 * * * *", readFileCsvCpuPrice);


