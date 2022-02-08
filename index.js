const express = require('express');
const { randomBytes } = require('crypto')
const axios = require('axios');
const app = express();

const PORT = 4000;

const users = {};
const EVENT_BUS = 'http://[::1]:4044';

app.use(express.json());

const handleError = (err) => console.error(err.message)

app.get("/", (req, res) => {
  res.send(Object.values(users));
})

app.post("/events", async (req, res) => {
  res.send({ status: 'OK' })
})

app.get("/:id", (req, res) => {
  const user = users[req.params.id] || {};
  res.send(user);
})

app.post("/users", async (req, res) => {
  const { username, firstname, lastname, usermail, birthdate } = req.body;
  const id = randomBytes(4).toString('hex');
  const user = {
    id, username, firstname, lastname, usermail, 
    birthdate: new Date(birthdate),
    creationdate: new Date(),
    modifydate: new Date(),
  };
  users[id] = user;

  await axios.post(`${EVENT_BUS}/events`, {
    type: 'USER_CREATED',
    data: user
  })
  
  res.send(user)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})