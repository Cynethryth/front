import RegistDept from "@/components/RegistDept";
import React from "react";

export default function page() {
  return (
    <div className="p-3" >
      <h1 className="mb-2 text-xl text-center" >Hola, estas en el asistente para registrar un nuevo departamento</h1>
      <h2 className="mb-2 text-lg text-center" >Rellena la siguiente información </h2>

      <RegistDept />
    </div>
  );
}
