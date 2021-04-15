import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeCountry, addNews } from "./../actions/index";
import axios from "axios";

export default function Category() {
  let { country, category } = useParams();
  const dispatch = useDispatch();
  dispatch(changeCountry(country));
  const countryCode = useSelector((state) => state.country);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=6c2ab89e51ec4998b9922147e5d70872`
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
  }, [countryCode, dispatch, category]);
  return (
    <>{/* <h1>
        Country = {country} Category={category}
      </h1> */}</>
  );
}
