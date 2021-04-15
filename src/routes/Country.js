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
        `http://api.mediastack.com/v1/news?access_key=1f78b2225c37cd9f13f0153e98e4a08f&countries=${countryCode}`
      )
      .then(
        (response) => {
          console.log(response.data.data);
          dispatch(addNews(response.data.data));
        },
        (error) => {
          console.log(error);
        }
      );
  }, [countryCode, dispatch]);

  return <>{/* <h1>Country = {country}</h1> */}</>;
}
