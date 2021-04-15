import newsReducer from "./news";
import countryReducer from "./country";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  news: newsReducer,
  country: countryReducer,
});

export default allReducers;
