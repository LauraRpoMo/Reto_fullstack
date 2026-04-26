function Footer() {
  return (
    <footer className="bg-[#F8F5F0] border-t border-[#E8E2D8] px-6 md:px-12 py-12 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">

        <div>
          <h3 className="font-serif text-2xl tracking-wide text-[#1F1F1F]">
            Borau
          </h3>
          <p className="text-xs uppercase tracking-[0.25em] text-[#8A7F73] mt-1">
            Curated Living
          </p>
        </div>

        <div className="w-px h-8 bg-[#E8E2D8]" />

        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A7F73]">
            Ejercicio educativo
          </p>
          <p className="font-serif text-[#1F1F1F] tracking-wide">
            Laura Restrepo
          </p>
          <p className="text-sm text-[#6B6B6B]">
            UPB · Desarrollo Web Fullstack · Sapiencia
          </p>
        </div>

        <div className="w-full border-t border-[#E8E2D8] pt-6">
          <p className="text-xs text-[#8A7F73] tracking-wide">
            © 2026 Borau Store. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;