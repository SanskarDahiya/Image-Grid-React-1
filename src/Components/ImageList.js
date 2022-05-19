import SingleImage from "./SingleImage";

const ImageList = (props) => {
  const { data, loading, hasMore, sentryRef } = props;
  return (
    <>
      <div className="images">
        {data.map((image, index) => {
          return <SingleImage key={image.id + index} image={image} index={index} />;
        })}
      </div>
      <div>{loading || hasMore ? <div ref={sentryRef}> Load More</div> : <></>}</div>
    </>
  );
};

export default ImageList;
