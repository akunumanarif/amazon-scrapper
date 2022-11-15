import express from "express";
import request from "request-promise";

const app = express();
app.use(express.json());

const api_key = "6651bdf3da4e6f978b7fd9361d270aea";
const baseUrl = `https://api.scraper.com?api_key${api_key}&autoparse=true`;

app.get("/", (req, res) => {
  res.send("Welcome to amazon scraper API");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
