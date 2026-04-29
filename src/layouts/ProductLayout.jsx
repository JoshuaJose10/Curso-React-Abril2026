import { Outlet, Link, useLocation } from "react-router-dom";

export default function ProductLayout() {
  const location = useLocation();

  const linkStyles = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
      location.pathname === path
        ? "bg-blue-100 text-blue-600"
        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 shadow-sm p-6">
        
        <h1 className="text-xl font-bold text-gray-800 mb-8">
          Mi App
        </h1>

        <nav className="flex flex-col gap-2">
          <Link to="/" className={linkStyles("/")}>
            Inicio
          </Link>

          <Link to="/products" className={linkStyles("/products")}>
            Productos
          </Link>
        </nav>

      </aside>

      {/* Contenido */}
      <main className="flex-1 p-8">
        
        {/* Header interno */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Panel
          </h2>
          <p className="text-gray-500 text-sm">
            Gestiona tu información fácilmente
          </p>
        </div>

        {/* Contenedor */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 space-y-5">
          <Outlet />
        </div>

      </main>

    </div>
  );
}