import { fetchImages } from "../Apis/ImageApi";
import { useEffect, useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";

const MAX_PAGE = 1000; // MAX NUMBER OF PAGE, PER PAGE-> 10 Images
const FetchImagesWrapper = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [{ data: currData = [], loading, error }, getImages, cancelRequest] = fetchImages({ page });
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    if (currData.length) {
      setData([...data, ...currData]);
    }
  }, [currData]);

  useEffect(() => {
    // On Page Change
    if (page > MAX_PAGE || error) {
      hasMore && setHasMore(false);
    } else {
      !hasMore && setHasMore(true);
      getImages();
    }
    return () => cancelRequest();
  }, [page, !!error]);
  const updatePage = () => setPage((x) => x + 1);

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage: hasMore,
    onLoadMore: updatePage,
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: !!error,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: "0px 0px 400px 0px",
  });

  return props.children({ ...props, data, loading, hasMore, error, sentryRef, updatePage });
};

export default FetchImagesWrapper;
