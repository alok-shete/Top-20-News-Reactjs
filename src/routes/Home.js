import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { changeCountry } from "./../actions/index";

export default function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => {
        dispatch(changeCountry(response.countryCode));
        history.push(`/${response.countryCode}`);
        console.log("Country is : ", response.countryCode);
      })
      .catch((data, status) => {
        console.log("Request failed:", data.countryCode);
      });
  });
  return (
    <>
      <h1>home</h1>
    </>
  );
}
