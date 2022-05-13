import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Account from "./pages/Account/Account";
import { useState } from "react";

function App() {
  const [uploadImg, setUploadImg] = useState(false);

  const ClickHandlerImgUploading = (e) => {
    if (uploadImg) {
      e.preventDefault();
      setUploadImg(false);
    } else {
      e.preventDefault();
      setUploadImg(true);
    }
  };
  return (
    <div className="site_Div">
      <Navbar
        uploadImg={uploadImg}
        ClickHandlerImgUploading={ClickHandlerImgUploading}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              uploadImg={uploadImg}
              ClickHandlerImgUploading={ClickHandlerImgUploading}
            />
          }
        />
        <Route path="/upload" element={<Upload />} />
        <Route
          path="/register"
          element={
            <Register
              uploadImg={uploadImg}
              ClickHandlerImgUploading={ClickHandlerImgUploading}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              uploadImg={uploadImg}
              ClickHandlerImgUploading={ClickHandlerImgUploading}
            />
          }
        />
        <Route
          path="/account"
          element={
            <Account
              uploadImg={uploadImg}
              ClickHandlerImgUploading={ClickHandlerImgUploading}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
