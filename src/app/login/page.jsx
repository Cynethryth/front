"use client";
import React, { useState } from "react";
import style from "@/styles/Login.module.css";
import axios from "axios";
import Head from "next/head";
import { signIn,  } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [User, setUser] = useState({
    Email: "",
    Password: "",
  });
  const login = async (e) => {
    e.preventDefault();
    // alert("Login try");
    // console.log(User)
    // axios
    //   .post(`http://localhost:5000/login/login`, {
    //     data: { Email: User.Email, Password: User.Password },
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //     // setTimeout(() => {
    //     //   window.location.href = "/";
    //     // }, 100);
    //   }).catch(error =>{
    //     // console.log(error)
    //   });

    try {
      const res = await signIn("credentials", {
        email: User.Email,
        password: User.Password,
        redirect:false
      });

      if (res?.ok) router.push("/");
    } catch (error) {}
  };

  return (
    <div className={style.float}>
      <Head>
        <title>Login</title>
      </Head>
      <div className={style.section}>
        <div className={style.imgBx}>
          <img src="https://media.cntraveler.com/photos/5d090bc1244f6a7ae3031eb3/master/pass/Chicago_GettyImages-1065188752.jpg" />
        </div>
        <div className={style.contentBx}>
          <div className={style.formBx}>
            <h2>Iniciar Sesion</h2>
            <form>
              <div className={style.inputBx}>
                <span>Email</span>
                <input
                  type="text"
                  value={User.Email}
                  onChange={({ target }) => {
                    setUser({ ...User, Email: target.value });
                  }}
                />
              </div>
              <div className={style.inputBx}>
                <span>Password</span>
                <input
                  type="password"
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
                  value={"Iniciar Sesion"}
                />
              </div>
              <div className={style.inputBx}>
                <p>
                  Don&apos;t have account? <a href="/register">Sign Up</a>
                </p>
              </div>
            </form>
            <h3>Proximamente</h3>
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
