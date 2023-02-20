import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomeComponent = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState("d-none");
  useEffect(() => {
    if (sessionStorage.token == null) {
      setVisible(" ");
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    }
  }, []);

  return (
    <>
      <h1>Hola Mundo</h1>
      <div className={"alert alert-danger  " + visible} role="alert">
        This is a danger alert—check it out!
      </div>
    </>
  );
};
