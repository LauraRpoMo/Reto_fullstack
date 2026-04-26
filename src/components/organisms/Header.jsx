import { useProductStore } from "../../store/productStore";
import { useUserStore } from "../../store/userStore";

function Header() {
  const searchTerm = useProductStore((state) => state.searchTerm);
  const setSearchTerm = useProductStore((state) => state.setSearchTerm);

  const currentUser = useUserStore((state) => state.currentUser);
  const logoutUser = useUserStore((state) => state.logoutUser);

  return (
    <header className="bg-[#F8F5F0] border-b border-[#E8E2D8] px-6 md:px-12 py-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-serif tracking-wide text-[#1F1F1F]">
            Borau
          </h1>
          <p className="text-sm tracking-[0.25em] uppercase text-[#8A7F73] mt-1">
            Curated Living
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-wide text-[#4D4D4D]">
          <a href="#" className="hover:text-[#B89B72] transition">
            Inicio
          </a>
          <a href="#" className="hover:text-[#B89B72] transition">
            Colección
          </a>
          <a href="#" className="hover:text-[#B89B72] transition">
            Carrito
          </a>
        </nav>

        <div className="w-full lg:w-auto flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Buscar en Borau..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-72 px-4 py-3 bg-white border border-[#DDD6CB] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#B89B72]"
          />

          <div className="flex items-center gap-3 text-sm">
            {currentUser ? (
              <>
                <span className="text-[#4D4D4D]">
                  Hola, {currentUser.name}
                </span>
                <button
                  onClick={logoutUser}
                  className="px-4 py-2 border border-[#1F1F1F] rounded-full hover:bg-[#1F1F1F] hover:text-white transition"
                >
                  Salir
                </button>
              </>
            ) : (
              <span className="text-[#8A7F73]">
                Invitado
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;