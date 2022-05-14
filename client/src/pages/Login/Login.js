import React from 'react'
import classes from "./Login.module.css"

const Login = ({ uploadImg,
  ClickHandlerImgUploading }) => {
  return (
    <div className={classes.Login}>
      <div className={classes.form_center}>
        <div className={classes.form_login}>
          <form action="">
            <label className={classes.labels} htmlFor="name">Имя пользователя </label>
            <input className={classes.inputs} type="text" name="name" id="name" placeholder="Имя пользователя" />
            <label className={classes.labels} htmlFor="password">Пароль</label>
            <input className={classes.inputs} type="text" name="password" id="password" placeholder="Пароль" />
            <div className={classes.soglasen}>
              <input className={classes.sogInp} type="checkbox" name="chechbox" id="chech" />
              <label className={classes.LabSog} htmlFor="chech">Я согласен с <a href="#" className={classes.labelurl}>правилами конфиденциальности.</a></label>
            </div>
            <div className={classes.buttonSubmit}>
              Войти
            </div>
          </form>
        </div>
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
    </div >
  )
}

export default Login