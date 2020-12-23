const { Router } = require('express');
const orderRouter = require('./orderForm');

const apiRouter = Router();

apiRouter.use('/orderForm', orderRouter);


module.exports = apiRouter;