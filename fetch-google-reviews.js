// .eleventy.js or a custom data file can use this script
// Usage: node fetch-google-reviews.js
// Requirements: npm install node-fetch

// Use built-in fetch in Node.js v18+
const fs = require("fs");

// Replace with your Google Places API key
const API_KEY = process.env.GOOGLE_PLACES_API_KEY || "YOUR_API_KEY_HERE";
// Replace with your Place ID for Nothin To It Repairs in Hickory, NC
const PLACE_ID = "CnMQgCl6BAhCEAU"; // You should verify this Place ID

const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,reviews,rating,formatted_address,photos&key=${API_KEY}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    if (data.status !== "OK") {
      console.error("Error fetching reviews:", data.status, data.error_message);
      return;
    }
    // Save reviews to a data file for Eleventy
    fs.writeFileSync(
      "./src/_data/googleReviews.json",
      JSON.stringify(data.result.reviews, null, 2)
    );
    console.log("Google reviews saved to src/_data/googleReviews.json");
  })
  .catch((err) => {
    console.error("Fetch error:", err);
  });
