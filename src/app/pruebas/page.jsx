"use client";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import React from "react";

export default function page() {
  const { data, status } = useSession();
  const submit = () => {
    console.log(data, status);
  };

  const submit2 = () => {
    signOut()
  };
  return (
    <div>
      <button
        onClick={() => {
          submit();
        }}
      >
        Enviar!
      </button>
      <button
        onClick={() => {
          submit2();
        }}
      >
        Cerrar Sesion!
      </button>
    </div>
  );
}
