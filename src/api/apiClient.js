import axios from "axios";

export const apiPath = {
  BUSSINESS_SEARCH: "/businesses/search"
};

// I've used your cors-anywhere as you suggested
axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3";
// I know this is not the best place to read a API key
// Best solution would be having a env variable in the container
// Beeter a service like AWS Secrets Manager to store our API keys
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.REACT_APP_YELP_API_KEY}`;

//easy to extend to anothers verbs
const get = async action => axios.get(action.apiPath, action.searchOptions);

export { get };
