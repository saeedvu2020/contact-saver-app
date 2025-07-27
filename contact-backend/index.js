const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let contacts = [];

app.post("/api/contacts", (req, res) => {
  const { name, email } = req.body;
  contacts.push({ name, email });
  res.json({ message: "Contact saved!", data: contacts });
});

app.get("/api/contacts", (req, res) => {
  res.json(contacts);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
