"use client";
import axios from "axios";
import React, { useState } from "react";

import { signOut, useSession } from "next-auth/react";

export default function RegistDept() {
  const { data, status } = useSession();
  const [Data, setData] = useState({
    Nombre: "",
    Ciudad: "",
    Direccion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/departamentos/regist`, {
        data: Data,
        user: data.user.id,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="flex justify-center ">
      <form
        className="w-96"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={Data.Nombre}
            onChange={({ target }) => {
              setData({ ...Data, Nombre: target.value });
            }}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Ciudad
          </label>
          <input
            type="text"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={Data.Ciudad}
            onChange={({ target }) => {
              setData({ ...Data, Ciudad: target.value });
            }}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="direccion"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Direccion
          </label>
          <input
            type="text"
            id="direccion"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={Data.Direccion}
            onChange={({ target }) => {
              setData({ ...Data, Direccion: target.value });
            }}
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
// value={Data.Direccion}
// onChange={({ target }) => {
//   setData({ ...Data, Direccion: target.value });
// }}
