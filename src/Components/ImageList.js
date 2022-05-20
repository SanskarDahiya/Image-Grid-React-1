import React from "react";
import SingleImage from "./SingleImage";

const ImageList = (props) => {
  const { data, error, loading, hasMore, sentryRef } = props;
  return (
    <React.Fragment>
      <div className="images">
        {data.map((image, index) => {
          return <SingleImage key={image.id + index} image={image} index={index} />;
        })}
      </div>
      <div className="LastBlock">
        {(loading || hasMore) && (
          <div className="LoadMore" ref={sentryRef}>
            Load More
          </div>
        )}
        {error && <div className="ErrorMessage">Something Went Wrong: {error.message || ""}</div>}
      </div>
    </React.Fragment>
  );
};

export default ImageList;
