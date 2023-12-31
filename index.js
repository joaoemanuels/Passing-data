import express from "express"
import bodyParser from "body-parser"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
  res.render("index.ejs",
    {
      name: req.body["fName"],
      sobrenome: req.body["lName"]
    });
});

app.post("/submit", (req, res) => {
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", { numberOfLetters: numLetters })
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});