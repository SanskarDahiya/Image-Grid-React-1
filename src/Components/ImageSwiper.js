import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SingleImage from "./SingleImage";
const ImageSwiper = (props) => {
  const currentImage = useParams();
  const navigate = useNavigate();
  const data = props.data;
  const image = (data && data[currentImage.index]) || {};
  // const loading = props.loading;
  console.log(currentImage, image, data);
  // useEffect(() => {
  //   if (!props.loading && (!data || !data[+currentImage.index])) {
  //     console.log("Navigate To Home", currentImage);
  //     navigate("/");
  //   }
  // }, [props.loading]);
  const changeImage = (diff) => {
    let newImage = +currentImage.index + diff;
    navigate("/test123/" + newImage);
  };
  return (
    <div className="imageBanner" style={{ zIndex: 1 }}>
      <div className="side-button" onClick={() => changeImage(-1)}>
        {"<"}
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <SingleImage image={image} imageUrlHeading={"full"} />
      </div>
      <div className="side-button" onClick={() => changeImage(1)}>
        {">"}
      </div>
    </div>
  );
};

export default ImageSwiper;
