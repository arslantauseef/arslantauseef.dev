import style from "../styles/main/style.main.module.css";
import styleKpiOverview from "../styles/kpi_overfiew/kpi_overview.module.css";
import { kpis } from "../constants/Constants";
import { useState, type CSSProperties, type TransitionEvent, type AnimationEvent } from "react";
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
  const [selectedCard, setSelectedCard] = useState<CardType>(accountCards[accountCards.length - 1]);
  const [cards, setCards] = useState<CardType[]>(accountCards);
  const [shufflePhase, setShufflePhase] = useState<"idle" | "leaving" | "returning">("idle");
  const [movingCard, setMovingCard] = useState<CardType | null>(null);

  const finishCardExit = (event: TransitionEvent<HTMLButtonElement>, card: CardType) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform" || shufflePhase !== "leaving" || movingCard !== card) return;

    setCards((currentCards) => [
      ...currentCards.filter((item) => item.position !== card.position),
      card,
    ]);
    setShufflePhase("returning");
  };

  const finishCardReturn = (event: AnimationEvent<HTMLButtonElement>, card: CardType) => {
    if (event.target !== event.currentTarget || shufflePhase !== "returning" || movingCard !== card) return;

    setShufflePhase("idle");
    setMovingCard(null);
  };

  const selectCard = (card: CardType) => {
    if (shufflePhase !== "idle") return;

    const index = cards.findIndex((item) => item.position === card.position);
    setSelectedCard(card);
    if (index === cards.length - 1) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCards((currentCards) => [
        ...currentCards.filter((item) => item.position !== card.position),
        card,
      ]);
      return;
    }

    setMovingCard(card);
    setShufflePhase("leaving");
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
                {cards.map((card, index) => (
                  <button
                    aria-pressed={selectedCard.position === card.position}
                    className={`${styleKpiOverview.creditCard} ${styleKpiOverview[card.class]} ${selectedCard.position === card.position ? styleKpiOverview.selectedCard : ""} ${shufflePhase === "leaving" && movingCard?.position === card.position ? styleKpiOverview.cardLeaving : ""} ${shufflePhase === "returning" && movingCard?.position === card.position ? styleKpiOverview.cardReturning : ""}`}
                    key={card.position}
                    onClick={() => selectCard(card)}
                    onTransitionEnd={(event) => finishCardExit(event, card)}
                    onAnimationEnd={(event) => finishCardReturn(event, card)}
                    style={{
                      "--stack-index": index,
                      "--stack-y": `${index * 8}px`,
                      "--stack-z": index + 1,
                    } as CSSProperties}
                    type="button"
                  >
                    <span className={styleKpiOverview.cardTopline}>
                      <span>{card.cardName}</span>
                      <span className={styleKpiOverview.cardSignal} aria-hidden="true" />
                    </span>
                    <span className={styleKpiOverview.cardDigits}>ACCOUNT</span>
                    <span className={styleKpiOverview.cardCaption}>
                      {selectedCard.position === card.position ? "Selected" : "View balance"}
                    </span>
                  </button>
                ))}
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
