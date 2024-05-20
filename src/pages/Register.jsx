import React, { useState } from "react";

const Register = () => {
  const [controllerPageAuth, setControllerPageAuth] = useState(null);

  return (
    <section className="section-register">
      <div className="section-register-group">
        <h1>Crie sua conta</h1>

        <form className="section-register-form" action="">
          <label htmlFor="name">
            <input placeholder="Seu nome" type="text" name="name" id="name" />
          </label>
          <label htmlFor="surname">
            <input
              placeholder="Seu sobrenome"
              type="text"
              name="surname"
              id="surname"
            />
          </label>
          <label htmlFor="email">
            <input
              placeholder="Seu email"
              type="text"
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="password">
            <input
              placeholder="sua senha"
              type="text"
              name="password"
              id="password"
            />
          </label>
          <label htmlFor="confirmpassword">
            <input
              placeholder="Confirme sua senha"
              type="text"
              name="confirmpassword"
              id="confirmpassword"
            />
          </label>

          <button type="submit">Criar conta</button>
        </form>
      </div>{" "}
      {/* section-register-group */}
    </section>
  );
};

export default Register;
