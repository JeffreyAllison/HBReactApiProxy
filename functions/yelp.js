const fetch = require('node-fetch');
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

    // consult the yelp docs to figure out how to use a city, state, and country to make a request for businesses
    // https://www.yelp.com/developers/documentation/v3/business_search
    // don't forget to add the yelp API key!

    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?location=${event.queryStringParameters.searchFilter}`,
      {
        headers: {
          Authorization:
            'Bearer 0pC0m3W-bivS3ZPvnzCV2xamaD8THGLXUaZAqZH7YqjTDje5YECSgcPW6NQEau26ogBMhYJd_oou8UEzLNEkaTa3mTmRAHmExa5Kk7BC1B5l1t1KjKwRF3gNjSaFYnYx',
        },
      }
    );

    const data = await response.json();
    // eslint-disable-next-line no-unused-vars
    const json = JSON.stringify({ data });

    return {
      statusCode: 200,
      headers,
      // this is where you shoot data back to the user. right now it's sending an empty object--replace this with the yelp data. remember, you do need to stringify it, otherwise netlify gets mad. ¯\_(ツ)_/¯
      body: JSON.stringify({}),
    };
  } catch (error) {
    //console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
