import { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/index";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");

    const getUser = async () => {
      try {
        setLoading(true)
        const { data } = await api.get(`/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
        navigate("/dashboard")
      } catch (error) {
        console.log(error);
      } finally{
        setLoading(false)
      }
    };

    getUser();
  }, []);

  const navigate = useNavigate();

  const userLogout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");

  };

  const userLogin = async (formData, setLoading) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);
      navigate("/dashboard");
    } catch (error) {
      if (
        error.response.data?.message ===
        "Incorrect email / password combination"
      ) {
        toast.error("Credenciais inválidas");
      }
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData, setLoading) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
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

  return (
    <>
      <UserContext.Provider
        value={{ loading, user, userLogin, userLogout, userRegister }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export { UserContext, UserProvider };
