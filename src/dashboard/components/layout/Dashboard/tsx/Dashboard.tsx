import style from "../styles/main/style.main.module.css";
import { IoNotifications } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

export const Dashboard = () => {
  return (
    <main className={style.wrapper}>
      <section className={style.top}>
        <div className={style.left}>
          <input type="text" />
          <IoMdSearch />
        </div>
        <div className={style.right}>
          <IoNotifications />
          <div>AT</div>
        </div>
      </section>
      {/*  */}
      <section>
        <div>
          <div>
            <div>Total Projects</div>
            <div>Active</div>
            <div>Pending</div>
            <div>Remaining</div>
          </div>
          <div>
            <div>Insights</div>
            <div>Note/Imp</div>
            <div>Not Sure</div>
          </div>
        </div>
        {/*  */}
        <div>
          <div>CARDS</div>
          <div>BUTTONS/INDICATORS</div>
          <div>SPENDINGS</div>
          <div>LOAD/DEBTS</div>
        </div>
      </section>
    </main>
  );
};
