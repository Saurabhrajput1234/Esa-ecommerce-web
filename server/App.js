const express = require("express");
const app = express();
require('dotenv').config();
require("./db/conn");
const router = require('./routes/router');
const Razorpay = require('razorpay');
const cors = require("cors");
const cookiparser = require("cookie-parser");
const port= 5004;



app.use(express.json());
app.use(cors());
app.use(cookiparser());
app.use(router);


const razorpay = new Razorpay({
  key_id: 'your_key_id', // Replace with your Razorpay Key ID
  key_secret: 'your_key_secret', // Replace with your Razorpay Key Secret
});

app.post('/api/payment', async (req, res) => {
  const { amount, currency } = req.body;

  const options = {
      amount: amount * 100, // amount in the smallest currency unit (e.g., paise for INR)
      currency: currency,
      receipt: `receipt_order_${Math.floor(Math.random() * 1000)}`,
      payment_capture: 1, // auto capture
  };

  try {
      const order = await razorpay.orders.create(options);
      res.json({
          id: order.id,
          currency: order.currency,
          amount: order.amount,
      });
  } catch (error) {
      res.status(500).send({ error: error.message });
  }
});



app.listen(process.env.PORT,()=>{
  console.log(`server start at port no :${port}`)
})