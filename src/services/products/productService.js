import { apiUrl } from "../apiService"

export const getProducts = async () => {
    try {
        const url = apiUrl.endsWith('/') ? `${apiUrl}products` : `${apiUrl}/products`
        const response = await fetch(url)
        console.log('Esta es mi primera respuesta:', response)
        const data = await response.json()
        console.log('Esta es mi data:', data)
        return data
    } catch (error) {
        console.error('Error fetching products:', error)
        return []
    }
}
export const getProductById = async (productId) => {
    try {
        const url = apiUrl.endsWith('/') ? `${apiUrl}products/${productId}` : `${apiUrl}/products/${productId}`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching product:', error)
        return null
    }
}

export const createProduct = async (productData) => {
    const url = apiUrl.endsWith('/') ? `${apiUrl}products` : `${apiUrl}/products`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })

    const data = await response.json()
    if (!response.ok) {
        const message = data?.message || 'Error al crear producto'
        throw new Error(message)
    }

    return data
}

export const updateProduct = async (productId, productData) => {
    try {
        const url = apiUrl.endsWith('/') ? `${apiUrl}products/${productId}` : `${apiUrl}/products/${productId}`
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error updating product:', error)
        return []
    }
}
export const deleteProduct = async (productId) => {
    try {
        const url = apiUrl.endsWith('/') ? `${apiUrl}products/${productId}` : `${apiUrl}/products/${productId}` 
        const response = await fetch(url, {
            method: 'DELETE'
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error deleting product:', error)
        return []
    }
}