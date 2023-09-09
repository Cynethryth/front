"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function page({ params }) {
  const { invitacion, id } = params;
  const url = `http://localhost:3000/usuario/${id}/invitaciones/${invitacion}`;
  const [Data, setData] = useState({});

  function formatearFecha(fecha) {
    const options = {
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
      .get(`${process.env.NEXT_PUBLIC_API}/invitaciones/getOne/${invitacion}`)
      .then((response) => {
        setData(response.data[0]);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      <div class="animate-start max-w-sm w-9/12 lg:max-w-full lg:flex  rounded border-neutral-700 mt-5">
        {/* <div
              class="h-60 w-40 lg:h-full flex-none bg-cover rounded-l  text-center overflow-hidden"
              style={{
                backgroundImage:
                  `url('${data.image}')`,
              }}
              title="Image1"
            ></div> */}
        <img
          src={`https://chart.googleapis.com/chart?cht=qr&chl=${url}&chs=200x200&chld=H|0`}
          class="lg:h-auto w-full lg:w-1/4  flex-none bg-cover rounded-l  text-center overflow-hidden"
        />
        <div class="p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <p class=" mb-3 text-lg flex items-center">
              Saludos!! {Data.nombreInvitado} esta es tu invitacion a nuestra
              reunion
            </p>
            <div class="text-gray-400 font-bold text-xl mb-2">
              Fecha de la reunion: {formatearFechaDDMMYYYY(Data?.date)}
            </div>
            <div class="text-gray-400 font-bold text-xl mb-2">
              Hora de la reunion: {formatearFecha(Data?.date)}
            </div>
            <p class=" text-base">
              Fecha de expiracion de la invitacion: {formatearFechaDDMMYYYY(Data?.expiration)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
