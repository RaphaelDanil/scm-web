import { useState } from "react";
import "./login.css"
import { login } from "../../services/authService";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const result = await login(username, password);
      if (result.success) {
        // Aqui você pode salvar o token ou redirecionar
        console.log("Login bem-sucedido");
      } else {
        setError("Usuário ou senha inválidos.");
      }
    } catch (err) {
      setError("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="box-main">
      <form onSubmit={handleSubmit}>
        <img
          src="/src/pages/Login/img/logo_confiance-02.png"
          alt="Logo de Login"
          className="login-logo"
        />

        <div className="input-box">
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <i className="bx bxs-user"></i>
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i className="bx bxs-lock-alt"></i>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Lembrar-me
          </label>
        </div>

        <button type="submit" className="btn-login">
          Login
        </button>

        {error && (
          <div id="error-message" className="error-login">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}