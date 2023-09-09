import RegistInvit from "@/components/RegistInvit";
import React from "react";

export default function page({params}) {
    const {id} = params
  return (
    <div className="p-3" >
      <h1 className="mb-2 text-xl text-center" >Hola, estas en el asistente para registrar una nueva invitacion</h1>
      <h2 className="mb-2 text-lg text-center" >Rellena la siguiente información </h2>

      <RegistInvit usuarioId={id}/>    
    </div>
  );
}
