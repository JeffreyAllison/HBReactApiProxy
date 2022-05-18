require('dotenv').config();

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
};

// eslint-disable-next-line no-unused-vars
exports.handler = async (event, context) => {
  try {
    // grab the city, state, and country from the request's query parameters
    // here is an example from the netlify docs:
    // https://functions.netlify.com/playground/#hello%2C-%7Bname%7D

    // tragicly, we cannot just pass the city name to this API. it wants a latitude and longitude for the weather
    // consult the yelp docs to figure out how to use a city, state, and country to make a request and get the latitude and longitude
    // https://openweathermap.org/api/geocoding-api

    // once you have gotten the lat/lon using the geocoding api, use the lat/lon to get the weather. Consult the docs below:
    // https://openweathermap.org/api/one-call-api
    const geocodingResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${event.queryStringParameters.searchFilter}&appid=178ae7cc2847c2b6881261aa68ccd389`
    );
    const geocodingData = await geocodingResponse.json();

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${geocodingData[0].lat}&lon=${geocodingData[0].lon}appid=178ae7cc2847c2b6881261aa68ccd389`
    );

    const weatherData = await weatherResponse.json();

    return {
      statusCode: 200,
      headers,
      // this is where you shoot data back to the user. right now it's sending an empty object--replace this with the weather data. remember, you do need to stringify it, otherwise netlify gets mad. ¯\_(ツ)_/¯
      body: JSON.stringify(weatherData),
    };
  } catch (error) {
    //console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
