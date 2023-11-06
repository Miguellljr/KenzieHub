import SectionLogin from "../../components/forms/LoginForm";
import pageStyles from "../../styles/modules/pageBox.module.scss";

export default () => {
  return (
    <>
      <main className={pageStyles.pageBox}>
        <div>
          <div>
            <SectionLogin/>
          </div>
        </div>
      </main>
    </>
  );
};
