export const changeCountry = (data) => {
  return {
    type: "CHANGE_COUNTRY",
    payload: data,
  };
};

export const addNews = (data) => {
  return {
    type: "ADD_NEWS",
    payload: data,
  };
};
