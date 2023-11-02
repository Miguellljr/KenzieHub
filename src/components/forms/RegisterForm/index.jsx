import Input from "../input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import api from "../../../services";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.svg";
import styles from "./style.module.scss";
import { toast } from "react-toastify";

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const userRegister = async (payLoad) => {
    try {
      setLoading(true);
      await api.post("/users", payLoad);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response.data?.message === "Email already exists") {
        toast.error("Ops! Algo deu errado");
      }
    } finally {
      setLoading(false);
    }
  };

  const submit = (payLoad) => {
    userRegister(payLoad);
  };

  return (
    <>
      <div className={styles.registerBox}>
        <header>
          <img src={logo} alt="logo kenzieHub" />
          <Link className="link small" to="/">
            Voltar
          </Link>
        </header>
        <form onSubmit={handleSubmit(submit)}>
          <div className={styles.contentBox}>
            <h2 className="title one">Crie sua conta</h2>
            <p id={styles.paragrath} className="text headline">
              Rápido e grátis, vamos nessa
            </p>
          </div>

          <Input
            label="Nome"
            type="name"
            id="name"
            required
            placeholder="Digite aqui seu nome"
            error={errors.name}
            {...register("name")}
          />

          <Input
            label="Email"
            type="email"
            id="email"
            required
            placeholder="Digite aqui seu email"
            error={errors.email}
            {...register("email")}
          />

          <Input
            label="Senha"
            type="password"
            id="password"
            required
            placeholder="Digite aqui sua senha"
            error={errors.password}
            {...register("password")}
          />

          <Input
            label="Confirmar senha"
            type="password"
            id="password"
            required
            placeholder="Confirmar senha"
            error={errors.confirmPassword}
            {...register("confirmPassword")}
          />

          <Input
            label="Bio"
            type="text"
            id="text"
            required
            placeholder="Fale sobre você"
            error={errors.bio}
            {...register("bio")}
          />

          <Input
            label="Contato"
            type="tel"
            id="tel"
            required
            placeholder="Opção de contato"
            error={errors.contact}
            {...register("contact")}
          />

          <div>
            <label className="text headline">Selecionar módulo</label>
            <select
              name=""
              id=""
              required
              error={errors.course_module}
              {...register("course_module")}
            >
              <option value="Primeiro Módulo">Primeiro Módulo</option>
              <option value="Segundo Módulo">Segundo Módulo</option>
              <option value="Terceiro Módulo">Terceiro Módulo</option>
              <option value="Quarto Módulo">Quarto Módulo</option>
              <option value="Quinto Módulo">Quinto Módulo</option>
              <option value="Sexto Módulo">Sexto Módulo</option>
            </select>
          </div>

          <button className="btn register" type="submit" disabled={loading}>
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
};
