import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ImageList from "./Components/ImageList";
import ImageSwiper from "./Components/ImageSwiper";
import FetchImagesWrapper from "./Helper/FetchImagesWrapper";

function App() {
  return (
    <FetchImagesWrapper>
      {(props_) => (
        <Routes>
          <Route path="/:id/:index" element={<ImageSwiper {...props_} />} />
          <Route path="/" element={<ImageList {...props_} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </FetchImagesWrapper>
  );
}

export default App;
