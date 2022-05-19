import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ImageList from "./Components/ImageList";
import ImageSwiper from "./Components/ImageSwiper";
import FetchImagesWrapper from "./Helper/FetchImagesWrapper";
// let smapleData = {
//   id: "er9wYHRk55Y",
//   created_at: "2022-02-15T22:40:10-05:00",
//   updated_at: "2022-05-18T15:24:15-04:00",
//   promoted_at: null,
//   width: 7151,
//   height: 5259,
//   color: "#59260c",
//   blur_hash: "LEGQ8|rX9Ztm~A9]EfkXxUxH#:rq",
//   description: null,
//   alt_description: null,
//   urls: {
//     raw: "https://images.unsplash.com/photo-1644982653424-1bfed7f972a2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzAwNDF8MXwxfGFsbHwxfHx8fHx8MXx8MTY1Mjk1MjUwNA&ixlib=rb-1.2.1&q=80&raw_url=true",
//     full: "https://images.unsplash.com/photo-1644982653424-1bfed7f972a2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzAwNDF8MXwxfGFsbHwxfHx8fHx8MXx8MTY1Mjk1MjUwNA&ixlib=rb-1.2.1&q=80",
//     regular:
//       "https://images.unsplash.com/photo-1644982653424-1bfed7f972a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzAwNDF8MXwxfGFsbHwxfHx8fHx8MXx8MTY1Mjk1MjUwNA&ixlib=rb-1.2.1&q=80&w=1080",
//     small:
//       "https://images.unsplash.com/photo-1644982653424-1bfed7f972a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzAwNDF8MXwxfGFsbHwxfHx8fHx8MXx8MTY1Mjk1MjUwNA&ixlib=rb-1.2.1&q=80&w=400",
//     thumb:
//       "https://images.unsplash.com/photo-1644982653424-1bfed7f972a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzAwNDF8MXwxfGFsbHwxfHx8fHx8MXx8MTY1Mjk1MjUwNA&ixlib=rb-1.2.1&q=80&w=200",
//     small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1644982653424-1bfed7f972a2",
//   },
//   links: {
//     self: "https://api.unsplash.com/photos/er9wYHRk55Y",
//     html: "https://unsplash.com/photos/er9wYHRk55Y",
//     download:
//       "https://unsplash.com/photos/er9wYHRk55Y/download?ixid=MnwzMzAwNDF8MXwxfGFsbHwxfHx8fHx8MXx8MTY1Mjk1MjUwNA",
//     download_location:
//       "https://api.unsplash.com/photos/er9wYHRk55Y/download?ixid=MnwzMzAwNDF8MXwxfGFsbHwxfHx8fHx8MXx8MTY1Mjk1MjUwNA",
//   },
//   categories: [],
//   likes: 55,
//   liked_by_user: false,
//   current_user_collections: [],
//   sponsorship: {
//     social: {
//       instagram_username: null,
//       portfolio_url: "https://www.oppo.com/en/events/reno-academy/",
//       twitter_username: null,
//       paypal_email: null,
//     },
//   },
// };

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
