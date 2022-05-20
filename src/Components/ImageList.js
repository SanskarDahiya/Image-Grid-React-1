import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SingleImage from "./SingleImage";

const ImageList = (props) => {
  const { data, error, loading, hasMore, sentryRef } = props;
  const [isNavigated, setNavigate] = useState(false);
  const { state } = useLocation();
  let { id: imageId, index: imageIndex } = state || {};
  imageIndex = +imageIndex;
  // Use ImageIndex to validate if we has the element in data or not
  useEffect(() => {
    if (!isNavigated && imageId && imageIndex && data.length > imageIndex) {
      setNavigate(true);
      document.getElementById(imageId).scrollIntoView({ behavior: "smooth" });
    }
  }, [imageId, imageIndex]);

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
