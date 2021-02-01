const { Router } = require('express');
require('express-async-errors')
const orderRouter = Router();
const nodemailer = require("nodemailer");

orderRouter.post('/', async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'burgerim.od@gmail.com', // generated ethereal user
      pass: 'esCGQItassU9', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"burgerim.od@gmail.com',
    to: "burgerim.od@gmail.com",
    subject: "Новый заказ",
    text: `Name: ${req.body.name} Phone: ${req.body.phone}`,
    html: `
    <h2>Имя: ${req.body.name}</h2>
    <p>Номер заказа: ${Date.now()}</p>
    <a href="tel:${req.body.phone}">Телефон: ${req.body.phone} </a>
    <div>${req.body}</div>
    <div>Курица: ${req.body.chicken}шт</div>
    <div>Индюшка: ${req.body.turkey}шт</div>
    <div>Говядина: ${req.body.beef}шт</div>
    <div>Свинина: ${req.body.pork}шт</div>
    <div>Сумма: ${req.body.totalPrice}грн</div>
    `
  });

  res.status(201).send(req.body.totalPrice);
})


module.exports = orderRouter;