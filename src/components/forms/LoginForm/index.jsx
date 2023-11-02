import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import api from "../../../services";
import logo from "../../../assets/Logo.svg";
import styles from "./style.module.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import InputPassword from "../InputPassword";

export default ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const [isHidden, setIsHidden] = useState(true);

  const navigate = useNavigate();

  const userLogin = async (payLoad) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", payLoad);
      setUser(data.user);
      console.log(data);
      localStorage.setItem("@TOKEN", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (
        error.response.data?.message ===
        "Incorrect email / password combination"
      ) {
        toast.error("Credenciais inválidas")
      } 
    } finally {
      setLoading(false);
    }
  };

  const submit = (payLoad) => {
    userLogin(payLoad);
  };

  return (
    <>
      <section className={styles.formBox}>
        <div className={styles.imageBox}>
          <img src={logo} alt="logo kenzieHub" />
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <h2 className="title one">Login</h2>

          <Input
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
