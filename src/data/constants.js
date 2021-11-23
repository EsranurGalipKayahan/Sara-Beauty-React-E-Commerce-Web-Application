export const MESSAGES = {
  ANNOUNCEMENT: "The shipping is FREE ",
  COUNTRY: "to ",
  FREE_SHIP_PRICE_LIMIT: "over €50",
};
export const GEO_URL = `https://api.freegeoip.app/json/?apikey=${process.env.REACT_APP_GEO_API_KEY}`;
export const PRODUCT_URL = `http://makeup-api.herokuapp.com/api/v1/products`;
export const COLLECTION_URL =
  "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=";
export const TRACKING_URL = "https://www.dhl.com/nl-en/home/tracking.html";
