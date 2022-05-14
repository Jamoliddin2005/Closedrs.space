import React, { useState } from 'react'
import classes from "./Register.module.css"
import axios from "axios"
import { toast } from "react-toastify"

const Register = ({ uploadImg,
  ClickHandlerImgUploading }) => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')


  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (email && name && password) {

      const { data } = await axios.post('http://localhost:5000/auth/register', {
        email,
        name,
        password,
      })
      toast.success(data.message)
    } else {
      toast.error("Xatolik bor")
    }
  }


  return (
    <div className={classes.Register}>
      <div className={classes.form_center}>
        <div className={classes.form}>
          <form action="">
            <label className={classes.labels} htmlFor="mail">Адрес электронной почты </label>
            <input className={classes.inputs} type="email" name="mail" id="mail" placeholder="Адрес электронной почты" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className={classes.labels} htmlFor="name">Имя пользователя </label>
            <input className={classes.inputs} type="text" name="name" id="name" placeholder="Имя пользователя" value={name} onChange={(e) => setName(e.target.value)} />
            <label className={classes.labels} htmlFor="password">Пароль</label>
            <input className={classes.inputs} type="password" name="password" id="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className={classes.soglasen}>
              <input className={classes.soglasenInp} type="checkbox" name="chechbox" id="chech" />
              <label className={classes.labelsog} htmlFor="chech">Я согласен с <a href="#" className={classes.soglasenLabela}>правилами конфиденциальности.</a></label>
            </div>
            <div type="button" className={classes.buttonSubmit} onClick={onSubmitHandler}>
              Зарегистрироваться
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
    </div>
  )
}

export default Register