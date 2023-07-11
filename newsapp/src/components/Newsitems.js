import React from "react";

const Newsitems = (props) => {
  let { title, description, imageUrl, newUrl, author } = props;

  return (
    <div>
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">By {author}</p>
          <a href={newUrl} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitems;
