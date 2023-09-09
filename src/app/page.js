"use client";
import { increment, decrement } from "@/redux/features/counterSlice";
import Head from "next/head";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  p-10">
      <div className="flex felx-wrap">
        <div className="flex items-center w-11/12 min-w-80 lg:w-1/2 bg-green-20">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Eugenia departamentos
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Eugenia es una solucion tecnologica enfocada en la administracion
              de departamentos y otros bienes raices para generar una sencillez
              mayor a la hora de rentar, programar visitas entre otras muchas
              caracteristicas que podras conocer al unirte a nosotros
              registrandote
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/register"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Registrate aqui
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-11/12 min-w-80 lg:w-1/2">
          <div className="">
            <Image
              src={"/cat.jpg"}
              width="616"
              height="617"
              className={"object-cover rounded-lg"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="text-xl text-center text-gray-700 dark:text-white">
          Ayudando a mas de <span className="text-indigo-600">2000</span>{" "}
          personas a lo largo del mundo
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
          <div className="pt-2 text-gray-400 dark:text-gray-400">
            {/* <AmazonLogo /> */}
          </div>
          <div className="text-gray-400 dark:text-gray-400">
            {/* <VerizonLogo /> */}
          </div>
          <div className="text-gray-400 dark:text-gray-400">
            {/* <MicrosoftLogo /> */}
          </div>
          <div className="pt-1 text-gray-400 dark:text-gray-400">
            {/* <NetflixLogo /> */}
          </div>
          <div className="pt-2 text-gray-400 dark:text-gray-400">
            {/* <SonyLogo /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
