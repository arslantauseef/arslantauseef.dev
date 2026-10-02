import style from "../styles/main/style.main.module.css";
import { IoNotifications } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import styleTopBar from "../styles/topbar/topbar.module.css";
import styleKpiOverview from "../styles/kpi_overfiew/kpi_overview.module.css";
import { kpis } from "../constants/Constants";
export const Dashboard = () => {
  return (
    <main className={style.container}>
      <section className={styleTopBar.topbar}>
        <div className={styleTopBar.left}>
          <input type="text" />
          <IoMdSearch />
        </div>
        <div className={styleTopBar.right}>
          <IoNotifications />
          <div>AT</div>
        </div>
      </section>
      {/*  */}
      <section className={styleKpiOverview.wrapper}>
        <div className={styleKpiOverview.left}>
          <div className={styleKpiOverview.project_kpi}>
            {kpis.map((item, index) => {
              return (
                <div key={index}>
                  <span>{item.name}</span>
                  <strong>{item.indicator}</strong>
                  <div>
                    <span>{item.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styleKpiOverview.project_insight}>
            <div>Insights</div>
            <div>Note/Imp</div>
            <div>Not Sure</div>
          </div>
        </div>
        {/*  */}
        <div className={styleKpiOverview.right}>
          <div>CARDS</div>
          <div>BUTTONS/INDICATORS</div>
          <div>SPENDINGS</div>
          <div>LOAD/DEBTS</div>
        </div>
      </section>
    </main>
  );
};
