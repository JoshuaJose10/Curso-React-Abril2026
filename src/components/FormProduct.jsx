import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../services/products/productService'

const FormProduct = ({ initialValues, onSubmit, buttonText = 'Agregar Producto' }) => {
  const [name, setName] = useState(initialValues?.name || '')
  const [description, setDescription] = useState(initialValues?.description || '')
  const [category, setCategory] = useState(initialValues?.category || '')
  const [price, setPrice] = useState(initialValues?.price ?? '')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!initialValues) return
    setName(initialValues.name || '')
    setDescription(initialValues.description || '')
    setCategory(initialValues.category || '')
    setPrice(initialValues.price ?? '')
  }, [initialValues?.id])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)
    setLoading(true)

    const productData = {
      name,
      description,
      category,
      price: Number(price)
    }

    try {
      if (onSubmit) {
        await onSubmit(productData)
      } else {
        await createProduct(productData)
        navigate('/products')
      }
    } catch (err) {
      console.error('Error al guardar producto:', err)
      setError(err?.message || 'No se pudo guardar el producto. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow p-5 max-w-xl mt-10 mx-auto">
      {error && <p className="text-red-500 font-semibold">{error}</p>}

      <div>
        <label htmlFor="name" className="block font-semibold">
          Nombre Producto
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="border border-gray-200 w-full py-2 rounded-lg"
          placeholder="Ingresa el nombre del producto"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block font-semibold">
          Descripción Producto
        </label>
        <input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="border border-gray-200 w-full py-2 rounded-lg"
          placeholder="Ingresa la descripción del producto"
          required
        />
      </div>

      <div>
        <label htmlFor="category" className="block font-semibold">
          Categoría Producto
        </label>
        <input
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          className="border border-gray-200 w-full py-2 rounded-lg"
          placeholder="Ingresa la categoría del producto"
          required
        />
      </div>

      <div>
        <label htmlFor="price" className="block font-semibold">
          Precio Producto
        </label>
        <input
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          step="0.01"
          className="border border-gray-200 w-full py-2 rounded-lg"
          placeholder="Ingresa el precio del producto"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-indigo-500 w-full py-2 text-white rounded hover:bg-indigo-600 hover:cursor-pointer font-semibold disabled:opacity-50"
      >
        {loading ? 'Guardando...' : buttonText}
      </button>
    </form>
  )
}

export default FormProduct;