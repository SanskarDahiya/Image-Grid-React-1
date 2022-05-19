import { Link } from "react-router-dom";

const SingleImage = (props) => {
  const image = props.image;
  const imageUrlHeading = props.imageUrlHeading || "thumb";
  const imageUrl = image.urls && image.urls[imageUrlHeading];
  return (
    <div className="single-photo" image-id={image.id}>
      <Link to={`/${image.id}/${props.index}`}>
        <img src={imageUrl} alt="" className="SingleImage" />;
      </Link>
    </div>
  );
};

export default SingleImage;
