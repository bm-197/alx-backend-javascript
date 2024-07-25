const express = require("express");

const app = express();
const PORT = 7865;

app.get("/", (_, res) => {
  res.send("Welcome to the payment system");
});

app.get("/cart/:id(\\d+)", (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

app.get("/available_payments", (_req, res) => {
  res.send(
    {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    }
  );
});

app.post('/login', (req, res) => {
  let user_name;

  if (req.body) {
    user_name = req.body.userName;
  }
  res.send(`Welcome ${user_name}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
