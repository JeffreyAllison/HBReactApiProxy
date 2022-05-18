export async function getPokemon(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/pokemon?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}

export async function getYelp(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/yelp?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}

export async function getWeather(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/weather?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}
