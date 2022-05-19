import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SingleImage from "./SingleImage";
const ImageSwiper = (props) => {
  const currentImage = useParams();
  const navigate = useNavigate();
  const data = props.data;
  const image = (data && data[currentImage.index]) || {};
  // const loading = props.loading;
  console.log(props.loading, currentImage, image);
  let loading_ = props.loading || data.length === 0;
  if (!loading_ && !data[+currentImage.index]) {
    console.log("Navigate To Home", data, currentImage);
    navigate("/");
    return <> MOVING TO HOME PAGE</>;
  }
  // useEffect(() => {
  // }, [props.loading]);
  const changeImage = (diff) => {
    let nextImageIndex = +currentImage.index + diff;
    if (nextImageIndex < 0) {
      navigate("/");
      return;
    }
    const imageId = data[nextImageIndex];
    navigate("/" + imageId.id + "/" + nextImageIndex);
  };
  return (
    <div className="imageBanner" style={{ zIndex: 1 }}>
      <div className="side-button cross-button" onClick={() => navigate("/")}>
        <div>X</div>
      </div>
      <div className="side-button" onClick={() => changeImage(-1)}>
        {currentImage.index == 0 ? "X" : "<"}
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        {loading_ ? <>LOADING</> : <SingleImage image={image} imageUrlHeading={"full"} />}
      </div>
      <div className="side-button" onClick={() => changeImage(1)}>
        {">"}
      </div>
    </div>
  );
};

export default ImageSwiper;
