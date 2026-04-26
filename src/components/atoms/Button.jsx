function Button({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
    >
      {text}
    </button>
  );
}

export default Button;