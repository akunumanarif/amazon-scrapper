import express from "express";
import request from "request-promise";

const app = express();
app.use(express.json());

const generateUrl = (apiKey) =>
  `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.get("/", (req, res) => {
  res.send("Welcome to amazon scraper API");
});

//! GET PRODUCT

app.get("/products/:productId/", async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateUrl(api_key)}&url=https://www.amazon.com/dp/${productId}`
    );

    res.status(200).json(JSON.parse(response));
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
});

//! GET PRODUCT REVIEWS

app.get("/products/:productId/reviews", async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateUrl(
        api_key
      )}&url=https://www.amazon.com/product-reviews/${productId}`
    );

    res.status(200).json(JSON.parse(response));
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
});

//! GET PRODUCT OFFERS

app.get("/products/:productId/offers", async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateUrl(
        api_key
      )}&url=https://www.amazon.com/gp/offer-listing/${productId}`
    );

    res.status(200).json(JSON.parse(response));
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
});

//! GET SEARCH PRODUCT

app.get("/search/:searchQuery", async (req, res) => {
  const { searchQuery } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateUrl(api_key)}&url=https://www.amazon.com/s?k=${searchQuery}`
    );

    res.status(200).json(JSON.parse(response));
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
