"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RegistInvit({ usuarioId, invitacion }) {
  const router = useRouter();
  const { data, status } = useSession();
  const [Departamentos, setDepartamentos] = useState([]);
  const [Data, setData] = useState({
    nombreInvitado: "",
    date: "",
    expiration: "",
    idDepartamento: "",
    id: "",
    usuarioId: "",
  });

  const deleteOne = () => {
    let confirmation = prompt(
      "Estas seguro que quieres eliminar esta invitacion? Escribe SI para confirmar"
    );

    if ((confirmation = "SI")) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API}/invitaciones/deleteOne/${invitacion}`
        )
        .then((response) => {
          router.push("/usuario/Sora/invitaciones/");
        });
    }
  };

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

    axios
      .get(`${process.env.NEXT_PUBLIC_API}/invitaciones/getOne/${invitacion}`)
      .then((response) => {
        let respuesta = response.data[0];
        console.log(respuesta);

        const date1 = new Date(respuesta.date);

        // Subtract 1 day
        // date1.setDate(date1.getDate() - 1);

        // Subtract 6 hours
        date1.setHours(date1.getHours() - 6);

        const formattedDate1 = date1.toISOString().slice(0, 16);

        respuesta.date = formattedDate1;

        const date2 = new Date(respuesta.expiration);
        const formattedTime2 = date2.toISOString().slice(0, 10);

        respuesta.expiration = formattedTime2;
        console.log(respuesta);
        setData(respuesta);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/invitaciones/edit`, {
        data: Data,
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
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tus Departamentos
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={Data.idDepartamento}
            onChange={({ target }) => {
              setData({ ...Data, idDepartamento: target.value });
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
            value={Data.nombreInvitado}
            onChange={({ target }) => {
              setData({ ...Data, nombreInvitado: target.value });
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
            value={Data.date}
            onChange={({ target }) => {
              setData({ ...Data, date: target.value });
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
            value={Data.expiration}
            onChange={({ target }) => {
              setData({ ...Data, expiration: target.value });
            }}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>

        <button
          onClick={() => {
            deleteOne();
          }}
          className=" ml-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
        >
          Eliminar
        </button>
      </form>
    </div>
  );
}
// value={Data.Direccion}
// onChange={({ target }) => {
//   setData({ ...Data, Direccion: target.value });
// }}
