function Title({ title }) {
  return (
    <section className="bg-[#F8F5F0] px-6 md:px-12 py-20 md:py-28 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8A7F73] mb-4">
          Colección Exclusiva
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#1F1F1F] leading-tight">
          {title}
        </h1>

        <div className="w-20 h-px bg-[#CFC5B7] mx-auto my-8"></div>

        <p className="text-base md:text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
          Diseño atemporal, materiales nobles y una selección pensada para elevar tu espacio cotidiano.
        </p>
      </div>
    </section>
  );
}

export default Title;