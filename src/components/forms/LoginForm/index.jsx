import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import logo from "../../../assets/Logo.svg";
import styles from "./style.module.scss";
import { useContext, useState } from "react";
import InputPassword from "../InputPassword";
import InputForm from "../InputForm";
import { UserContext } from "../../../providers/UserContext";

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const [isHidden, setIsHidden] = useState(true);

  const { userLogin } = useContext(UserContext);

  const submit = (formData) => {
    userLogin(formData, setLoading);
  };

  return (
    <>
      <section className={styles.formBox}>
        <div className={styles.imageBox}>
          <img src={logo} alt="logo kenzieHub" />
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <h2 className="title one">Login</h2>

          <InputForm
            label="Email"
            type="email"
            id="email"
            required
            placeholder="Digite aqui seu email"
            error={errors.email}
            {...register("email")}
          />

          <InputPassword
            label="Senha"
            type={isHidden ? "password" : "text"}
            id="password"
            required
            placeholder="Digite aqui sua senha"
            error={errors.password}
            {...register("password")}
            setIsHidden={setIsHidden}
            isHidden={isHidden}
          />

          <button
            id={styles.btnSignIn}
            className="btn signIn"
            type="submit"
            disabled={loading}
          >
            Entrar
          </button>

          <div className={styles.registerBox}>
            <p className="text headlineBold">Ainda não possui uma conta?</p>

            <Link className="link register" to="/register">
              Cadastre-se
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};
