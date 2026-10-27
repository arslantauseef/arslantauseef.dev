import style from "../styles/main/style.main.module.css";
import styleKpiOverview from "../styles/kpi_overfiew/kpi_overview.module.css";
import { kpis } from "../constants/Constants";

export const Dashboard = () => {
  return (
    <main className={style.container}>
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
