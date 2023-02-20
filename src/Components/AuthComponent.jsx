import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthComponent.css";

export const AuthComponent = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorText, setErrorText] = useState("");

  const navigate = useNavigate();

  const onEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const onPassChange = ({ target }) => {
    setPass(target.value);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const { data, status } = await axios.post(
        "http://localhost:8080/auth/login",
        {
          email,
          password: pass,
        }
      );
      sessionStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorText("Usuario o Contraseña inválidas");
      return;
    }
  };

  return (
    <form onSubmit={onLogin} className="Auth-form-container">
      <div className="Auth-form">
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
          <p className="text-danger">{errorText}</p>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary">Ingresar</button>
          </div>
        </div>
      </div>
    </form>
  );
};
