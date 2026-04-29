import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-all duration-300 px-6 py-5 rounded-2xl border border-gray-100 w-full max-w-md">
      
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        Producto
      </h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-500 text-sm">Nombre</span>
          <span className="text-gray-800 font-medium">{props.name}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 text-sm">Precio</span>
          <span className="text-green-600 font-semibold">${props.price?.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-500 text-sm">Descripción</span>
          <span className="text-gray-800 font-medium">{props.description}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 text-sm">Categoría</span>
          <span className="text-gray-800 font-medium">{props.category}</span>
        </div>

        <div className="flex justify-between">
            <span className="text-gray-500 text-sm">Acciones</span>
            <span className="text-gray-800 font-medium flex justify-center items-center gap-3">
              <button onClick={props.onDelete} className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-1 py-1 hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </button>

              <Link to={`/products/edit/${props.id ?? props._id}`} className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-1 py-1 hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
              </Link>
            </span>
        </div>
        
      </div>

    </div>
  );
}