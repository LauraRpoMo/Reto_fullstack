import { useProductStore } from "../../store/productStore";

function Header() {
  const searchTerm = useProductStore((state) => state.searchTerm);
  const setSearchTerm = useProductStore((state) => state.setSearchTerm);

  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-8 py-4 border-b gap-4">
      <h1 className="text-2xl font-bold">Kaira Store</h1>

      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-80 px-4 py-2 border rounded-xl"
      />

      <nav className="flex gap-6">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Carrito</a>
      </nav>
    </header>
  );
}

export default Header;