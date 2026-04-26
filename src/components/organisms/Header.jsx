import { useProductStore } from "../../store/productStore";
import { useUserStore } from "../../store/userStore";

function Header() {
  const searchTerm = useProductStore((state) => state.searchTerm);
  const setSearchTerm = useProductStore((state) => state.setSearchTerm);

  const currentUser = useUserStore((state) => state.currentUser);
  const logoutUser = useUserStore((state) => state.logoutUser);

  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-8 py-4 border-b gap-4">
      <h1 className="text-2xl font-bold">Kaira Store</h1>

      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-80 px-4 py-2 border rounded-xl"
        w-full md:w-80
      />

      <nav className="flex gap-6">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Carrito</a>
      </nav>

      <div className="flex items-center gap-4">
        {currentUser ? (
          <>
            <span>Hola, {currentUser.name}</span>
            <button
              onClick={logoutUser}
              className="px-4 py-2 bg-black text-white rounded-xl"
            >
              Logout
            </button>
          </>
        ) : (
          <span>No has iniciado sesión</span>
        )}
      </div>
    </header>
  );
}

export default Header;