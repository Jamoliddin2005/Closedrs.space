import React from 'react'
import classes from "./Home.module.css"
const Home = ({ uploadImg,
  ClickHandlerImgUploading }) => {
  return (
    <div className={classes.Home}>
      <div className={classes.header_container}>
        <div className={classes.header_center}>
          <h1 className={classes.title}>Closedrs.space</h1>
          <p className={classes.desc}>Начать загрузку легко, перетащите изображение в окно. Ограничение на размер изображения 10 MB. По
            окончании загрузки, Вы получите прямую ссылку, BB-код и миниатюры</p>
          <button className={classes.btn} onClick={ClickHandlerImgUploading}>Начать загрузку</button>
        </div>
      </div>
      <div className={classes.header_right}>
        <img className={classes.img_right} src="/images/navbar_bg_Photo.png" alt="" />
      </div>


      {uploadImg ? (
        <div className="uploader">
          <div className="upload" id="upload">
            <img src="/images/upload.png" className="asdsadasdasd" alt="" />

            <input type="file" name="file" id="file" />
          </div>
          <div className="bg_Upload_none" onClick={ClickHandlerImgUploading}></div>
        </div>
      ) : ("")}
    </div>
  )
}

export default Home