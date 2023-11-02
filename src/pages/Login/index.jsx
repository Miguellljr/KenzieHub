import SectionLogin from "../../components/forms/LoginForm";
import pageStyles from "../../styles/modules/pageBox.module.scss";

export default ({setUser}) => {
  return (
    <>
      <main className={pageStyles.pageBox}>
        <div>
          <div>
            <SectionLogin setUser={setUser} />
          </div>
        </div>
      </main>
    </>
  );
};
