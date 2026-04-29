import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import FormProduct from '../components/FormProduct'
import { getProductById, updateProduct } from '../services/products/productService'

export default function EditProductView() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductById(id)
        if (!data) {
          setError('Producto no encontrado.')
        } else {
          setProduct(data)
        }
      } catch (err) {
        console.error('Error cargando producto:', err)
        setError('No se pudo cargar el producto.')
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [id])

  const handleUpdate = async (updatedData) => {
    await updateProduct(id, updatedData)
    navigate('/products')
  }

  if (loading) {
    return <p className="text-gray-500">Cargando producto...</p>
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <>
      <h1 className="text-5xl font-bold">Editar Producto</h1>
      <Link
        to={'/products'}
        className="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded text-white font-bold inline-block"
      >
        Volver a Productos
      </Link>
      <FormProduct
        initialValues={product}
        onSubmit={handleUpdate}
        buttonText="Guardar cambios"
      />
    </>
  )
}
