import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <div className="bg-gray-200    flex flex-col h-dvh bottom-0 top-0">
        <div className="bg-amber-100 h-20 border-b-2 border-b-black text-center justify-center content-center">
          <h1>HEADER PRRON</h1>
        </div>

        <div className="flex-1">
          <Outlet />
        </div>
        
        <footer className="bg-amber-100 flex flex-col gap-y-6 justify-center content-center text-center">
          <p> footer prron</p>
          <p> hola soy otro pa</p>
          <div className=" flex flex-row gap-x-5  ">
            {/*ESTE ES UN EJEMPLO DE FOOTER */}
            <Link
              to={"/main"}
              className=" text-black font-bold hover:underline hover:text-blue-600"
            >
              MAIN DESDE EL LAYOUT
            </Link>
            <Link
              to={"/otra"}
              className=" text-black font-bold hover:underline hover:text-blue-600"
            >
              OTRA DESDE EL LAYOUT
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
