import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <header className="login-header">
          <h1 className="login-title">Borau</h1>
          <p className="login-subtitle">Curated Living</p>
        </header>

        <form className="login-form">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              placeholder="tu@email.com" 
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="form-input"
              required
            />
            <div className="form-footer">
              <a href="#" className="login-link">¿Olvidaste tu contraseña?</a>
            </div>
          </div>

          {/* Botón corregido */}
          <button type="submit" className="login-button">
            Continuar
          </button>

          <div className="register-prompt">
            <span>¿No tienes cuenta?</span>
            <a href="#" className="login-link">Crea una aquí</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;