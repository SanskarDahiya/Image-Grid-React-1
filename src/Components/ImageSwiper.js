import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SingleImage from "./SingleImage";
const CrossIcon = () => {
  const navigate = useNavigate();
  return (
    <div className="side-button cross-button" onClick={() => navigate("/")}>
      <div>X</div>
    </div>
  );
};
const ImageSwiper = (props) => {
  let { id: imageId, index: imageIndex } = useParams();
  imageIndex = +imageIndex;
  const navigate = useNavigate();
  const data = props.data;
  const image = data[imageIndex] || {};
  const [loading, setLoading] = useState(props.loading || data.length === 0);

  useEffect(() => {
    // TO fetch More data, In case user keep moving to next image
    if (imageIndex === data.length - 1) {
      props.updatePage ? props.updatePage() : navigate("/");
    }
  }, [imageIndex, data.length]);
  useEffect(() => {
    const isLoading = props.loading || data.length === 0;
    setLoading(isLoading);
    if (!isLoading && !data[imageIndex]) {
      navigate("/");
    }
  }, [imageId, props.loading, data.length]);

  const changeImage = (diff) => {
    let nextImageIndex = imageIndex + diff;
    if (nextImageIndex < 0) {
      navigate("/");
      return;
    }
    const imageId = data[nextImageIndex];
    if (!imageId) {
      // navigate("/")
      console.warn("Need to fetch more images");
    }
    navigate("/" + imageId.id + "/" + nextImageIndex);
    setLoading(true);
  };
  return (
    <div className="imageBanner" style={{ zIndex: 1 }} key={imageId}>
      {imageIndex != 0 && <CrossIcon />}
      <div className="side-button" onClick={() => changeImage(-1)}>
        {imageIndex == 0 ? "X" : "<"}
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        {loading ? <>{`LOADING IMAGE ${imageId}`}</> : <SingleImage image={image} imageUrlHeading={"raw"} />}
      </div>
      <div className="side-button" onClick={() => changeImage(1)}>
        {">"}
      </div>
    </div>
  );
};

export default ImageSwiper;
