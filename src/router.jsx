import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import AppView from './views/AppView'
import OtraView from './views/OtraView'
import PruebaView from './views/PruebaView'
import ParamView from './views/ParamView'



export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout /> }>
                    <Route index element={<Navigate to="/main" replace />} />
                    <Route path='/main' element={<AppView />} />
                    <Route path='/otra' element={<OtraView />} />
                    <Route path='/prueba' element={<PruebaView />} />
                    <Route path='/param/:id' element={<ParamView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}