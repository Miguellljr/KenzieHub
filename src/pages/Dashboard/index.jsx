import DashBoardPage from "../../components/DashBoardPage";
import pageStyles from "../../styles/modules/pageBox.module.scss";

export default ({ user, userLogout }) => {
  return (
    <>
      <main className={pageStyles.pageBox}>
        <div>
          <div>
            <DashBoardPage user={user} userLogout={userLogout} />
          </div>
        </div>
      </main>
    </>
  );
};
