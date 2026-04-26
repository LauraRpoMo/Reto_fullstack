function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 border-b">
      <h1 className="text-2xl font-bold">Kaira Store</h1>
      <nav className="flex gap-6">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Carrito</a>
      </nav>
    </header>
  );
}

export default Header;