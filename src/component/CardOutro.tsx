import React, { useState } from "react";
import { Data } from "./CardArray";
import Card from "./Card";
import { currentElement } from "../type";

const CardOutro = (
) => {
  const [data, setData] = useState(Data);
  const [isCard, setIsCard] = useState<boolean>(false);
  const [cardData, setCardData] = useState<currentElement>({
    id: 0,
    title: "",
    genre: "",
    img: "",
    director: "",
    body: "",
    directorInfo: "",
    directorImage:""
  });

  const handleClick = (val: any) => {
    const movieData = data[val];
    setCardData(movieData);
    setIsCard(true);
  };

  const MovieList = () => {
    return (
      <>
        <div className="card">
          {data.map((currentElement) => {
            const { title, genre, img, director, id, directorImage } = currentElement;
            return (
              <>
                <div
                  className="card__container"
                  onClick={() => handleClick(id)}
                >
                  <div className="wrapper">
                    <div className="img__text">
                      <div className="inner">
                        <h2>{title}</h2>

                        <h5>{genre}</h5>

                        <h4>{director}</h4>
                      </div>
                      <div className="image__container">
                        <img src={img} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };

  return <>{isCard ? <Card currentElement={cardData} /> : <MovieList />}</>;
};

export default CardOutro;
