const express = require("express");
const NodeGeocoder = require("node-geocoder");
const app = express();
require("dotenv").config({ path: "./config.env" });
const path = require("path");
const options = {
  provider: process.env.GE0CODE_PROVIDER,

  // Optional depending on the providers
  httpAdapter: "https",
  apiKey: process.env.GE0CODE_API_KEY, // for Mapquest, OpenCage, Google Premier
  formatter: null
};
const geocoder = NodeGeocoder(options);

const location = async function (address) {
  const data = await geocoder.geocode(address);
  console.log(data);
};

const result = location(
  "Giani Zail Singh Nagar , Rupnagar, 140001, Punjab , India"
);
// console.log(result);
app.listen(8080, () => {
  console.log(`server is listening at port 8080`);
});
