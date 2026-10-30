import style from "../styles/main/style.main.module.css";
import styleKpiOverview from "../styles/kpi_overfiew/kpi_overview.module.css";
import { kpis } from "../constants/Constants";
import { useState } from "react";
type CardType = {
  position: string;
  cardName: string;
  class: string;
};
const accountCards = [
  {
    position: "01",
    cardName: "NayaPay",
    class: "creditCard1",
  },
  {
    position: "02",
    cardName: "Allied Bank",
    class: "creditCard2",
  },
  {
    position: "03",
    cardName: "SadaPay",
    class: "creditCard3",
  },
];

export const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState<CardType>(accountCards[0]);
  const [cards, setCards] = useState<CardType[]>(accountCards);
  const [animationPhase, setAnimationPhase] = useState<
    "idle" | "exit" | "enter"
  >("idle");
  const [pendingCard, setPendingCard] = useState<CardType | null>(null);
  const [exitFromIndex, setExitFromIndex] = useState<number | null>(null);

  const handleCardClicked = (clickedCard: CardType) => {
    if (animationPhase !== "idle") return;
    if (clickedCard === selectedCard) return;
    const clickedIndex = cards.findIndex(
      (item) => item.cardName === clickedCard.cardName,
    );
    setExitFromIndex(clickedIndex);
    setPendingCard(clickedCard);
    setAnimationPhase("exit");
  };
  const handleExitEnd = (card: CardType) => {
    if (animationPhase !== "exit") return;
    if (card !== pendingCard) return;
    if (exitFromIndex === null) return;

    const reorderedCards = [
      ...cards.slice(exitFromIndex),
      ...cards.slice(0, exitFromIndex),
    ];

    setCards(reorderedCards);
    setSelectedCard(card);
    setAnimationPhase("enter");
  };

  const handleEnterEnd = (card: CardType) => {
    if (animationPhase !== "enter") return;
    if (card !== pendingCard) return;

    setAnimationPhase("idle");
    setPendingCard(null);
    setExitFromIndex(null);
  };

  return (
    <main className={style.container}>
      <header className={style.pageHeader}>
        <div>
          <span className={style.eyebrow}>Workspace overview</span>
          <h1>Dashboard</h1>
          <p>A clear snapshot of your project portfolio.</p>
        </div>
        <span className={style.previewTag}>SAMPLE METRICS</span>
      </header>

      <div className={styleKpiOverview.dashboardGrid}>
        <div className={styleKpiOverview.primaryColumn}>
          <section
            className={styleKpiOverview.wrapper}
            aria-label="Portfolio metrics"
          >
            <div className={styleKpiOverview.project_kpi}>
              {kpis.map((item, index) => (
                <article className={styleKpiOverview.kpiCard} key={item.name}>
                  <div className={styleKpiOverview.kpiLabel}>
                    <span>{item.name}</span>
                    <span className={styleKpiOverview.kpiIndex}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <strong className={styleKpiOverview.kpiValue}>
                    {item.indicator}
                  </strong>
                  <p className={styleKpiOverview.kpiCaption}>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            className={styleKpiOverview.project_insight}
            aria-labelledby="dashboard-insights-heading"
          >
            <header className={styleKpiOverview.insightHeader}>
              <div>
                <span className={styleKpiOverview.sectionEyebrow}>
                  Workspace
                </span>
                <h2 id="dashboard-insights-heading">
                  Insights &amp; project notes
                </h2>
              </div>
              <span className={styleKpiOverview.dataHint}>
                Ready for backend data
              </span>
            </header>
            <div className={styleKpiOverview.insightGrid}>
              <section
                className={styleKpiOverview.graphPlaceholder}
                aria-labelledby="dashboard-graph-heading"
              >
                <div className={styleKpiOverview.moduleHeader}>
                  <h3 id="dashboard-graph-heading">Portfolio activity</h3>
                  <span>Graph placeholder</span>
                </div>
                <div className={styleKpiOverview.graphCanvas}>
                  <span>Graph will appear when analytics are connected.</span>
                </div>
              </section>
              <aside
                className={styleKpiOverview.projectNotes}
                aria-labelledby="dashboard-notes-heading"
              >
                <div className={styleKpiOverview.moduleHeader}>
                  <h3 id="dashboard-notes-heading">Project notes</h3>
                  <span>Notes placeholder</span>
                </div>
                <p>
                  Project updates and notes can live here once the project data
                  is connected.
                </p>
                <div className={styleKpiOverview.noteLines} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
              </aside>
            </div>
          </section>
        </div>

        <aside
          className={styleKpiOverview.financeColumn}
          aria-label="Personal finance overview"
        >
          <section
            className={styleKpiOverview.financePanel}
            aria-labelledby="dashboard-accounts-heading"
          >
            <header className={styleKpiOverview.sectionHeader}>
              <div>
                <span className={styleKpiOverview.sectionEyebrow}>
                  Accounts
                </span>
                <h2 id="dashboard-accounts-heading">Cards &amp; balance</h2>
              </div>
            </header>
            <div className={styleKpiOverview.financeGrid}>
              <div
                className={styleKpiOverview.creditCards}
                aria-label="Select a card"
              >
                {cards.map((card, index) => {
                  const shouldExit =
                    animationPhase === "exit" &&
                    exitFromIndex !== null &&
                    (index === exitFromIndex || index === cards.length - 1);
                  return (
                    <button
                      aria-pressed={selectedCard === card}
                      className={`
                    ${styleKpiOverview.creditCard}
                    ${styleKpiOverview[card.class]}
                    ${shouldExit ? styleKpiOverview.cardExit : ""}
                    ${animationPhase === "enter" ? styleKpiOverview.cardEnter : ""}
                    `}
                      key={card.position}
                      onClick={() => handleCardClicked(card)}
                      onTransitionEnd={(event) => {
                        if (event.propertyName !== "transform") return;

                        handleExitEnd(card);
                        handleEnterEnd(card);
                      }}
                      type="button"
                    >
                      <span className={styleKpiOverview.cardTopline}>
                        <span>Card {card.position}</span>
                        <span
                          className={styleKpiOverview.cardSignal}
                          aria-hidden="true"
                        />
                      </span>
                      <span className={styleKpiOverview.cardDigits}>
                        ACCOUNT
                      </span>
                      <span className={styleKpiOverview.cardCaption}>
                        {selectedCard === card ? "Selected" : "View balance"}
                      </span>
                    </button>
                  );
                })}
              </div>
              <section
                className={styleKpiOverview.balancePanel}
                aria-live="polite"
                aria-label={`Balance for ${selectedCard.cardName}`}
              >
                <span className={styleKpiOverview.sectionEyebrow}>
                  {selectedCard.cardName} balance
                </span>
                <strong>—</strong>
                <p>Connect data to view this card’s balance.</p>
                <span
                  className={styleKpiOverview.balanceRule}
                  aria-hidden="true"
                />
              </section>
            </div>
          </section>

          <div className={styleKpiOverview.lendingGrid}>
            <section
              className={styleKpiOverview.moneyPanel}
              aria-labelledby="dashboard-lent-heading"
            >
              <span className={styleKpiOverview.sectionEyebrow}>
                Personal finance
              </span>
              <h2 id="dashboard-lent-heading">Money lent</h2>
              <strong>—</strong>
              <p>Amounts you’re owed</p>
            </section>
            <section
              className={styleKpiOverview.moneyPanel}
              aria-labelledby="dashboard-borrowed-heading"
            >
              <span className={styleKpiOverview.sectionEyebrow}>
                Personal finance
              </span>
              <h2 id="dashboard-borrowed-heading">Loans borrowed</h2>
              <strong>—</strong>
              <p>Amounts you need to repay</p>
            </section>
          </div>
        </aside>
      </div>
    </main>
  );
};
