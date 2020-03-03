import React from "react";

import Rater from "react-rater";

const Card = props => {
  const { name, image_url, url, categories, rating, price } = props.item;
  return (
    <div className="card">
      <a href={url}>
        <div
          className="box-image"
          style={{ backgroundImage: `url(${image_url})` }}
        >
          {name}
        </div>
        <div className="box-content">
          <h3 className="title">{name}</h3>
          <div className="rating">
            {price} • <Rater total={5} rating={rating} interactive={false} />
          </div>
          <div className="categories">
            {categories &&
              categories.map(
                (item, index) =>
                  `${item.title}${index < categories.length - 1 ? " | " : ""}`
              )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
