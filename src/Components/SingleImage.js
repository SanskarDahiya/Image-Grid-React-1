import { useState } from "react";
import { Link } from "react-router-dom";

const SingleImage = (props) => {
  const [isLoading, setLoading] = useState(true);
  const image = props.image;
  const imageUrlHeading = props.imageUrlHeading || "thumb";
  const imageUrl = image.urls && image.urls[imageUrlHeading];
  return (
    <div className="single-photo" image-id={image.id}>
      <Link to={`/${image.id}/${props.index}`}>
        <img
          src={imageUrl}
          alt={`Error id- ${image.id}`}
          onLoad={() => {
            // console.log(imageUrl, "Image load");
            setLoading(false);
          }}
          className="SingleImage"
        />
      </Link>
      {isLoading && (
        <div
          style={{
            position: "absolute",
          }}
        >
          LOADING
        </div>
      )}
    </div>
  );
};

export default SingleImage;
