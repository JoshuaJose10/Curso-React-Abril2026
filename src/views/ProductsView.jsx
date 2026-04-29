import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useEffect, useState } from 'react'
import { getProducts, deleteProduct } from '../services/products/productService'

export default function ProductsView() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts()
                setProducts(data)
            } catch (error) {
                console.error('Error al obtener productos:', error)
            }
        }
        fetchProducts()
    }, [])

    const handleDelete = async (productId) => {
        try {
            await deleteProduct(productId)
            setProducts((current) => current.filter((product) => (product.id ?? product._id) !== productId))
        } catch (error) {
            console.error('Error al eliminar producto:', error)
        }
    }

  return (
    <>
        <h1 className="text-5xl font-bold">Administra tus Productos</h1>

            <Link 
                to={'/products/create'}
                className='bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded text-white font-bold my-10'
            >
                Crear Producto
            </Link>
        
            <div className='grid grid-cols-3 gap-4 pt-10'>
                {products.length === 0 ? (
                    <p className='col-span-3 text-gray-500'>No hay productos disponibles.</p>
                ) : (
                    products.map((product, index) => (
                        <ProductCard
                            key={product.id ?? product._id ?? index}
                            {...product}
                            onDelete={() => handleDelete(product.id ?? product._id)}
                        />
                    ))
                )}
            </div>
        
            
        
    </>
  )
}