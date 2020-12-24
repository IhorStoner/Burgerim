const { Router } = require('express');
require('express-async-errors')
const orderRouter = Router();
const nodemailer = require("nodemailer");

orderRouter.post('/', async(req,res) => {

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
    <a href="tel:${req.body.phone}">Телефон: ${req.body.phone} </ a>
    `
  });

  res.status(201).send('Mail is send');
})


module.exports = orderRouter;