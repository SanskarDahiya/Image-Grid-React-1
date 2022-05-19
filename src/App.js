import "./App.css";
import { Routes, Route } from "react-router-dom";
import ImageList from "./Components/ImageList";
import ImageSwiper from "./Components/ImageSwiper";
import FetchImagesWrapper from "./Helper/FetchImagesWrapper";

function App() {
  return (
    <FetchImagesWrapper>
      {({ data, loading, hasMore, sentryRef }) => (
        <Routes>
          <Route path="/:id/:index" element={<ImageSwiper data={data} loading={loading} />} />
          <Route
            path="*"
            element={<ImageList data={data} loading={loading} hasMore={hasMore} sentryRef={sentryRef} />}
          />
        </Routes>
      )}
    </FetchImagesWrapper>
  );
}

export default App;
