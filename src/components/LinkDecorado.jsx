'use client'

import { useSession } from "next-auth/react";
import React from "react";

export default function Links({link,text}) {
    const {data} = useSession()
  return (
    <a
      href={`/usuario/${data?.user.username}/${link}`}
      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium bg-blue-600"
    >
      {text}
    </a>
  );
}
