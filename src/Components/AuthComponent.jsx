import React, { useState } from "react";
import styles from "../App.module.css";
console.log(styles);
export const AuthComponent = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onEmailChange = ({ target }) => {
    setEmail(target.value);
    console.log(email);
  };

  const onPassChange = ({ target }) => {
    setPass(target.value);
  };

  const onLogin = async () => {
    const resp = await axios.post("http://localhost:8080/auth/login", {
      email,
      password: pass,
    });
    console.log(resp);
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Correo Electrónico</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Ingrese Correo"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Ingrese Contraseña"
              value={pass}
              onChange={onPassChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" onClick={onLogin}>
              Ingresar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
