"use client";
import React, { useState } from "react";
import style from "@/styles/Login.module.css";
import axios from "axios";
import Head from "next/head";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [User, setUser] = useState({
    Name: "",
    Surname: "",
    Username: "",
    Email: "",
    Password: "",
  });
  const login = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:5000/login/register`, {
        data: User,
      })
      .then(async (response) => {
        const res = await signIn("credentials", {
          email: User.Email,
          password: User.Password,
          redirect: false,
        });

        if (res?.ok) router.push("/");
      });
  };

  return (
    <div className={style.float}>
      <Head>
        <title>Registro</title>
      </Head>
      <div className={style.section}>
        <div className={style.imgBx}>
          <img src="https://media.cntraveler.com/photos/5d090bc1244f6a7ae3031eb3/master/pass/Chicago_GettyImages-1065188752.jpg" />
        </div>
        <div className={style.contentBx}>
          <div className={style.formBx}>
            <h2>Registro</h2>
            <form>
              <div className={style.inputBx}>
                <input
                  type="text"
                  value={User.Name}
                  placeholder="Nombre"
                  onChange={({ target }) => {
                    setUser({ ...User, Name: target.value });
                  }}
                />
              </div>
              <div className={style.inputBx}>
                <input
                  type="text"
                  placeholder="Apellidos"
                  value={User.Surname}
                  onChange={({ target }) => {
                    setUser({ ...User, Surname: target.value });
                  }}
                />
              </div>
              <div className={style.inputBx}>
                <input
                  type="text"
                  placeholder="Username"
                  value={User.Username}
                  onChange={({ target }) => {
                    setUser({ ...User, Username: target.value });
                  }}
                />
              </div>
              <div className={style.inputBx}>
                <input
                  type="text"
                  placeholder="Email"
                  value={User.Email}
                  onChange={({ target }) => {
                    setUser({ ...User, Email: target.value });
                  }}
                />
              </div>
              <div className={style.inputBx}>
                <input
                  type="password"
                  placeholder="Password"
                  value={User.Password}
                  onChange={({ target }) => {
                    setUser({ ...User, Password: target.value });
                  }}
                />
              </div>
              {/* <div className={style.remember}>
              <label>
                <input
                  type="checkbox"
                  // value={Input}
                  // onChange={({target})=>{setInput(target.value)}}
                />
                Remember Me
              </label>
            </div> */}
              <div className={style.inputBx}>
                <input
                  type="submit"
                  onClick={(e) => {
                    login(e);
                  }}
                  value={"Registrarme"}
                />
              </div>
            </form>
            <h3>Proximamente:</h3>
            <ul className={style.sci}>
              <li>
                <img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" />
              </li>
              <li>
                <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" />
              </li>
              <li>
                <img src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-png-logo-noir.png" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
