"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function RegistInvit({ usuarioId }) {
  const router = useRouter();

  const { data, status } = useSession();
  const [Departamentos, setDepartamentos] = useState([]);
  const [Data, setData] = useState({
    Nombre: "",
    Ciudad: "",
    Direccion: "",
    Departamento: "",
  });

  useEffect(() => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/departamentos/departamentosUsuario`,
        {
          data: usuarioId,
        }
      )
      .then((response) => {
        console.log(response.data);
        setDepartamentos(response.data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/invitaciones/regist`, {
        data: Data,
        user: data.user.id,
      })
      .then((response) => {
        console.log(response.data);
        const url = `http://localhost:3000/usuario/${data?.user.username}/invitaciones/${response.data}`;
        Swal.fire({
          imageUrl: `https://chart.googleapis.com/chart?cht=qr&chl=${url}&chs=200x200&chld=H|0`,
          imageHeight: 340,
          imageAlt: "A tall image",
          text:"Comparte esto con la persona que desees"
        });

        router.push(`/usuario/${data?.user.username}/invitaciones`);
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
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tus Departamentos
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={Data.Departamento}
            onChange={({ target }) => {
              setData({ ...Data, Departamento: target.value });
            }}
            required
          >
            <option value=""></option>
            {Departamentos.map((element, i) => (
              <option key={i} value={element.id}>
                {element.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre del invitado
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
            Fecha
          </label>
          <input
            type="datetime-local"
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
            Expiracion
          </label>
          <input
            type="date"
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
