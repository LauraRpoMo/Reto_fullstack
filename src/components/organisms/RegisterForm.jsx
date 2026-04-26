import { useState } from "react";
import { useUserStore } from "../../store/userStore";

const RegisterForm = () => {
  const registerUser = useUserStore((state) => state.registerUser);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData);
    alert("Usuario registrado");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow"
    >
      <h2 className="text-2xl font-bold mb-4">Registro</h2>

      <input
        type="text"
        placeholder="Nombre"
        className="w-full border p-3 rounded-xl mb-4"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 rounded-xl mb-4"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-xl"
      >
        Registrarse
      </button>
    </form>
  );
};

export default RegisterForm;