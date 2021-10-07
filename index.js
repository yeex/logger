const logger = require("./configuration/logger");
const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

app.use((req, res, next) => {
    logger.info(req.body);
    let oldSend = res.send;
    res.send = function (data) {
      logger.info(JSON.parse(data));
      oldSend.apply(res, arguments);
    }
    next();
})

app.get('/', (req, res) => {
    logger.info(res);
})

app.listen(port, () => {
    for (i = 0; i < 20; i++) {
        logger.info(`${i} App listening at http://localhost: ${port}`);
    }
})