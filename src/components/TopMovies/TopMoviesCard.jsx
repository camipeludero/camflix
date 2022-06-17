import React, { useEffect, useState } from "react";
import { apiBuilder } from "../../apiConfig";

const TopMoviesCard = ({ imgPath }) => {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const url = apiBuilder.tryGetImg(imgPath);
    setImg(url);
  }, [imgPath]);
  return <></>;
};

export default TopMoviesCard;
