"use client";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";

export default function SignOut({ data }) {
  const { data: data1 } = useSession();
  const [State, setState] = useState(false);
  return (
    <div
      onClick={() => {
        setState(!State);
      }}
    >
      <span className="bg-gray-700 rounded-lg hover:bg-gray-600 w-40 h-10 flex justify-center items-center cursor-pointer">
        Hola {data1?.user.name}!!!
      </span>
      {State ? (
        <div className="absolute top-16 right-1 bg-gray-700 w-40 h-60 p-2 rounded-lg  ">
          <button
            className="hover:bg-gray-600 p-2 rounded-lg cursor-pointer"
            onClick={() => {
              signOut();
            }}
          >
            Cerrar Sesion
          </button>
        </div>
      ) : null}

      {/* <button
        onClick={() => {
          console.log(data);
        }}
      >
        sasasa
      </button> */}
    </div>
  );
}
