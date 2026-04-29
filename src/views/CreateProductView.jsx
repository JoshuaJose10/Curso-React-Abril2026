import React from "react";
import FormProduct from "../components/FormProduct";
import { Link } from 'react-router-dom'

export default function CreateProductView() {
  
  return (
    <>
      <h1 className="text-5xl font-bold">Crear Productos</h1>

      <Link
        to={"/products"}
        className="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded text-white font-bold my-10"
      >
        Volver a Productos
      </Link>

      <FormProduct />
    </>
  );
}