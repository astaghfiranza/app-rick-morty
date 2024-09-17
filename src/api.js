import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getCharacterList = async () => {
  const character = await axios.get(`${baseUrl}/character?api_key=${apiKey}`);
  //   console.log({ movieList: movie });
  return character.data.results;
};
