"use client";
import Links from "@/components/LinkDecorado";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function page({ params, message }) {
  const { id } = params;
  const [Ìnvitaciones, setInvitaciones] = useState([]);

  

  function formatearFecha(fecha) {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const fechaFormateada = new Date(fecha).toLocaleString("es-ES", options);
    return fechaFormateada;
  }
  function formatearFechaDDMMYYYY(fecha) {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    const fechaFormateada = new Date(fecha).toLocaleString("es-ES", options);
    return fechaFormateada;
  }

  useEffect(() => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/invitaciones/invitacionesUser`, {
        data: id,
      })
      .then((response) => {
        console.log(response.data)
        setInvitaciones(response.data);
      });
  }, []);

  return (
    <div>
      <h1 className="my-2 text-xl text-center">
        Aqui puedes ver tus invitaciones 
      </h1>
      <div className="relative overflow-x-auto w-full flex justify-center flex-wrap">
        <table className="w-4/5 text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre Invitado
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Expiracion
              </th>
              <th scope="col" className="px-6 py-3">
                Editar
              </th>
              <th scope="col" className="px-6 py-3">
                Detalles
              </th>
            </tr>
          </thead>
          <tbody>
            {Ìnvitaciones.map((element, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-500"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {element.nombreInvitado}
                </th>
                <td className="px-6 py-4">{formatearFecha(element.date)}</td>
                <td className="px-6 py-4">{formatearFechaDDMMYYYY(element.expiration)}</td>
                <td className="px-6 py-4"><a href={`/usuario/Sora/invitaciones/${element.id}/editar`} >Editar</a></td>
                <td className="px-6 py-4"><a href={`/usuario/Sora/invitaciones/${element.id}`} >Detalles</a></td>
                
                {/* <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <div className=" flex w-4/5 mt-3 ">
          <Links
            link={"/invitaciones/new"}
            text={"Registrar nuevo"}
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: { message: `Next.js is awesome` }, // will be passed to the page component as props
  };
}
