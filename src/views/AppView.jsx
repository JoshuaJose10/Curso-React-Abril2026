import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SaludoComponent from '../components/SaludoComponent'
import CardChildren from '../components/CardChildren'
import PropsExample from '../components/PropsExample'
import ChildrenExample from '../components/ChildrenExample'
import UsuarioComponent from '../components/UsuarioComponent'
import ButtonActionComponent from '../components/ButtonActionComponent'
import ListaComponent from '../components/ListaComponent'
import ProductoComponent from '../components/ProductoComponent'
import ComputadorasComponent from '../components/ComputadorasComponent'

export default function AppView() {

  const [usuario, setUsuario] = useState('')
  const [contador, setContador] = useState(0)
  const [isTrue, setIsTrue] = useState(true)

  const [products, setProducts] = useState(
    [
      { id: 1, name: 'Producto 1', price: 10 },
      { id: 2, name: 'Producto 2', price: 20 },
      { id: 3, name: 'Producto 3', price: 30 },
      { id: 4, name: 'Producto 4', price: 40 },
    ]
  )

  const[computadoras, setComputadoras] = useState(
    [
      { id: 1, marca: 'Dell', modelo: 'XPS 13', precio: 1000 },
      { id: 2, marca: 'Apple', modelo: 'MacBook Pro', precio: 2000 },
      { id: 3, marca: 'HP', modelo: 'Spectre x360', precio: 1500 },
      { id: 4, marca: 'Lenovo', modelo: 'ThinkPad X1 Carbon', precio: 1200 },
    ]
  )
  const param = 123;

  const user = {
    nombre: 'Juan',
    edad: 30
  }

  const user2 = {
    nombre: 'Maria',
    edad: 25
  }

  const userArray = {
    nombre: 'Maria',
    edad: 25
  }

  const handleClick = () => {
    console.log('Me has presionado')
    setUsuario("Nuevo Usuario")
    setIsTrue(!isTrue)
  }

  const handSelection = (elemento) => {
    console.log("Evento:", elemento)
  }

  // Funciones del contador
  const aumentarContador = () => {
    setContador(contador + 1)
  }
  const disminuirContador = () => {
    setContador(contador - 1)
  }
  const reiniciarContador = () => {
    setContador(0)
  }


  return (
    <div className="p-8 space-y-8">
      <h1 className='text-5xl text-shadow-black mb-6'>App View</h1>

      {
        isTrue ? (
          <p className="text-green-500">La condición es verdadera</p>
        ) : (
          <p className="text-red-500">La condición es falsa</p>
        )
      }

      {
        isTrue && (
          <p className="text-green-500">La condición es verdadera</p>
        )
      }

      <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-lg">
        <SaludoComponent nombre="Juan" apellido="Perez" />
      </div>

      <CardChildren
        titulo="Contenido con Children"
        descripcion="Este texto se pasa como prop llamado descripcion y muestra cómo usar varios props juntos."
      >
        <p className="text-lg text-gray-700">
          Esta es una tarjeta que muestra cómo pasar contenido dinámico a través de <strong>children</strong>.
        </p>
      </CardChildren>

      <PropsExample
        titulo="Ejemplo usando props"
        descripcion="Este componente recibe datos desde el padre a través de props y los muestra aquí."
        estado="Activo"
      />

      <ChildrenExample titulo="Ejemplo usando children">
        <p>Este contenido se pasa desde el padre como children.</p>
        <p>Así puedes personalizar la estructura interna del componente.</p>
      </ChildrenExample>

      <UsuarioComponent {...user} />
      <UsuarioComponent {...user2} />
      <UsuarioComponent {...userArray} />

      <div className="space-y-4">
        <Link to={'/otra'} className='block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
          Ir a otra pagina
        </Link>

        <Link to={'/prueba'} className='block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
          Ir a prueba
        </Link>

        <Link to={`/param/${param}`} className='block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600'>
          Ir a parametro (con valor: {param})
        </Link>
      </div>

      <ButtonActionComponent onClick={handleClick} />

      <ListaComponent onSeleccionar={handSelection} />

      {/* Mostrar usuario */}
      <div>
        <h2 className="text-2xl">Usuario:</h2>
        <h1>{usuario}</h1>
      </div>

      {
        products.map((product) => (
          <ProductoComponent name={product.name} precio={product.price} id={product.id} />
        ))
      }

      <br />
      {
        computadoras.map((compu) => (
          <ComputadorasComponent id={compu.id} marca={compu.marca} modelo={compu.modelo} precio={compu.precio} />
        ))
      }

      {/* Contador */}
      <div className="space-y-4">
        <h2 className="text-3xl">Contador: {contador}</h2>

        <button
          onClick={aumentarContador}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Aumentar
        </button>
        <button
          onClick={disminuirContador}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Disminuir
        </button>
        <button
          onClick={() => setContador(0)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Reiniciar

        </button>
      </div>

    </div>
  )
}