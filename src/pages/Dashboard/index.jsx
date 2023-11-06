import DashBoardPage from "../../components/DashBoardPage";
import pageStyles from "../../styles/modules/pageBox.module.scss";

export default () => {
  return (
    <>
      <main className={pageStyles.pageBox}>
        <div>
          <div>
            <DashBoardPage />
          </div>
        </div>
      </main>
    </>
  );
};
