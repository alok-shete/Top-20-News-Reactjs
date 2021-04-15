import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeCountry, addNews } from "./../actions/index";

import axios from "axios";
export default function Country() {
  const dispatch = useDispatch();
  let { country } = useParams();
  dispatch(changeCountry(country));
  const countryCode = useSelector((state) => state.country);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=6c2ab89e51ec4998b9922147e5d70872`
      )
      .then(
        (response) => {
          console.log(response.data.articles);
          dispatch(addNews(response.data.articles));
        },
        (error) => {
          console.log(error);
        }
      );
  }, [countryCode, dispatch]);

  return <>{/* <h1>Country = {country}</h1> */}</>;
}
