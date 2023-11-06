import { useContext } from "react";
import logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export default () => {
  const {user, userLogout} = useContext(UserContext)

  
  return (
    <>
      <div className={styles.userBox}>
        <header>
          <img src={logo} alt="logo kenzieHub" />
          <button className="btn small" onClick={() => userLogout()}>
            Sair
          </button>
        </header>
        <section>
          <div>
            <h2 className="title one">Olá, {user?.name}</h2>
            <span className="text headlineBold">
              {" "}
              {user?.course_module} (Introdução ao Frontend)
            </span>
          </div>
          <div className={styles.moduleBox} >
            <h2 className="title one">Que pena! Estamos em desenvolvimento :(</h2>
            <p className="text paragrath">
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
