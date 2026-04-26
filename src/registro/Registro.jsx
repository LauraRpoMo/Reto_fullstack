import React, { useState } from 'react';
import '../login/login.css';

const Register = () => {
  // 1. Estado para capturar los datos
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // 2. Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 3. Manejador del envío
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos registrados en Borau:", formData);
    alert(`¡Bienvenida a Borau, ${formData.username}!`);
    // Aquí iría tu lógica de Firebase o tu API más adelante
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <header className="login-header">
          <h1 className="login-title">Borau</h1>
          <p className="login-subtitle">Crea tu cuenta en Curated Living</p>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Nombre de usuario</label>
            <input 
              name="username"
              type="text" 
              className="form-input"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              name="email"
              type="email" 
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input 
              name="password"
              type="password" 
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;