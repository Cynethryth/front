import EditInvit from "@/components/EditInvit";
import React from "react";

export default function page({params}) {
    const {id,invitacion} = params
  return (
    <div className="p-3" >
      <h1 className="mb-2 text-xl text-center" >Hola, estas en el asistente para editar una invitacion</h1>
      <h2 className="mb-2 text-lg text-center" >Rellena la siguiente información </h2>

      <EditInvit usuarioId={id} invitacion={invitacion}/>    
    </div>
  );
}
