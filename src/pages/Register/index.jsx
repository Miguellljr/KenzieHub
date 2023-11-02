import RegisterForm from "../../components/forms/RegisterForm";
import pageStyles from "../../styles/modules/pageBox.module.scss";


export default () => {
  return (
    <>
      <main className={pageStyles.pageBox}>
        <div>
          <div>
            <RegisterForm />
          </div>
        </div>
      </main>
    </>
  );
};
