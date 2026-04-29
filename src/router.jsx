import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import AppView from './views/AppView'
import OtraView from './views/OtraView'
import PruebaView from './views/PruebaView'
import ParamView from './views/ParamView'
import ProductLayout from './layouts/ProductLayout'
import MainView from './views/MainView'
import ProductsView from './views/ProductsView'
import CreateProductView from './views/CreateProductView'
import EditProductView from './views/EditProductView'



export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout /> }>
                </Route>

                <Route element={<ProductLayout />}>
                    <Route index element={<MainView />} />
                    <Route path='/products' element={<ProductsView />} />
                    <Route path='/products/create' element={<CreateProductView />} />
                    <Route path='/products/edit/:id' element={<EditProductView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}