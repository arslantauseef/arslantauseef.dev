import styleFigureCards from "../styles/figurecards.module.css";
import { Express } from "../../../../../../../../assets/icons/technologies/express/tsx/Express";
import { Neon } from "../../../../../../../../assets/icons/technologies/neon/tsx/Neon";
import { Node } from "../../../../../../../../assets/icons/technologies/node/tsx/Node";
import { PostgreSQL } from "../../../../../../../../assets/icons/technologies/postgresql/tsx/PostgreSQL";
import { Railway } from "../../../../../../../../assets/icons/technologies/railway/tsx/Railway";
import { ReactJs } from "../../../../../../../../assets/icons/technologies/react/tsx/React";
import { Render } from "../../../../../../../../assets/icons/technologies/render/tsx/Render";
import { Supabase } from "../../../../../../../../assets/icons/technologies/supabase/tsx/Supabase";
import { TypeScript } from "../../../../../../../../assets/icons/technologies/typescript/tsx/TypeScipt";
import { Vercel } from "../../../../../../../../assets/icons/technologies/vercel/tsx/Vercel";
import { useEffect, useRef, useState } from "react";
import type { ExperienceStage } from "../../leftScrollEffect/tsx/LeftContainer";

type ConnectionGroup = {
  stage: ExperienceStage;
  from: CardName;
  targets: readonly CardName[];
};

const connectionGroups = [
  {
    stage: "frontend",
    from: "TypeScript",
    targets: ["React", "Vercel"],
  },
  {
    stage: "backend",
    from: "Express",
    targets: ["Node", "Railway", "Render"],
  },
  {
    stage: "database",
    from: "PostgreSQL",
    targets: ["Neon", "Supabase"],
  },
] as const satisfies readonly ConnectionGroup[];

type CardComponentProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  spanStyle?: React.CSSProperties;
  cardRef?: React.Ref<HTMLDivElement>;
};

type DefinedCards = {
  name: string;
  component: React.ComponentType<CardComponentProps>;
  styles: {
    card: React.CSSProperties;
    svg: React.CSSProperties;
    span: React.CSSProperties;

    hover: React.CSSProperties;
    hoverSvg: React.CSSProperties;
    hoverSpan: React.CSSProperties;
  };
};

export const definedCards = [
  {
    name: "React",
    component: ReactJs,

    styles: {
      card: {
        gridArea: "1 / 1 / 2 / 2",

        width: "55%",
        height: "85%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        justifySelf: "center",
        alignSelf: "center",

        gap: "5px",

        borderRadius: "10px",

        backgroundColor: "rgb(230, 234, 234)",
        border: "2px solid #dad9d9",
        boxShadow: "0 0 10px -1px #d4d4d4",

        transform: "scale3d(1, 1, 1)",
        transformOrigin: "center center",

        transition:
          "transform 300ms ease, border-color 300ms ease, background-color 300ms ease, box-shadow 300ms ease",

        willChange: "transform",
        backfaceVisibility: "hidden",
      },

      svg: {
        color: "#838486",
        width: "1.3em",
        height: "1.3em",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      span: {
        color: "#838486",
        fontSize: "6px",
        lineHeight: "6px",
        fontFamily: "var(--poppins)",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      hover: {
        transform: "scale3d(1.09, 1.09, 1)",
        border: "2px solid #83c5f1",

        backgroundColor: "white",
        boxShadow: "0 0 10px -1px #83c5f1",
      },

      hoverSvg: {
        color: "#83c5f1",
      },

      hoverSpan: {
        color: "#000",
      },
    },
  },

  {
    name: "TypeScript",
    component: TypeScript,

    styles: {
      card: {
        gridArea: "2 / 3 / 3 / 4",

        width: "55%",
        height: "85%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        justifySelf: "center",
        alignSelf: "center",

        gap: "5px",

        borderRadius: "10px",
        border: "2px solid #dad9d9",
        boxShadow: "0 0 10px -1px #d4d4d4",

        backgroundColor: "rgb(230, 234, 234)",

        transform: "scale3d(1, 1, 1)",
        transformOrigin: "center center",

        transition:
          "transform 300ms ease, border-color 300ms ease, background-color 300ms ease, box-shadow 300ms ease",

        willChange: "transform",
        backfaceVisibility: "hidden",
      },

      svg: {
        color: "#838486",
        width: "1.3em",
        height: "1.3em",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      span: {
        color: "#838486",
        fontSize: "6px",
        lineHeight: "6px",
        fontFamily: "var(--poppins)",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      hover: {
        transform: "scale3d(1.09, 1.09, 1)",
        border: "2px solid #3178c6",

        backgroundColor: "white",
        boxShadow: "0 0 10px -1px #3178c6",
      },

      hoverSvg: {
        color: "#3178c6",
      },

      hoverSpan: {
        color: "#000",
      },
    },
  },

  {
    name: "Node",
    component: Node,

    styles: {
      card: {
        gridArea: "3 / 7 / 4 / 8",

        width: "55%",
        height: "85%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        justifySelf: "center",
        alignSelf: "center",

        gap: "5px",

        borderRadius: "10px",
        border: "2px solid #dad9d9",
        boxShadow: "0 0 10px -1px #d4d4d4",

        backgroundColor: "rgb(230, 234, 234)",

        transform: "scale3d(1, 1, 1)",
        transformOrigin: "center center",

        transition:
          "transform 300ms ease, border-color 300ms ease, background-color 300ms ease, box-shadow 300ms ease",

        willChange: "transform",
        backfaceVisibility: "hidden",
      },

      svg: {
        color: "#838486",
        width: "1.3em",
        height: "1.3em",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      span: {
        color: "#838486",
        fontSize: "6px",
        lineHeight: "6px",
        fontFamily: "var(--poppins)",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      hover: {
        transform: "scale3d(1.09, 1.09, 1)",
        border: "2px solid #68a063",
        backgroundColor: "white",
        boxShadow: "0 0 10px -1px #68a063",
      },

      hoverSvg: {
        color: "#68a063",
      },

      hoverSpan: {
        color: "#000",
      },
    },
  },

  {
    name: "Express",
    component: Express,

    styles: {
      card: {
        gridArea: "3 / 5 / 4 / 6",

        width: "55%",
        height: "85%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        justifySelf: "center",
        alignSelf: "center",

        gap: "5px",

        borderRadius: "10px",
        border: "2px solid #dad9d9",
        boxShadow: "0 0 10px -1px #d4d4d4",

        backgroundColor: "rgb(230, 234, 234)",

        transform: "scale3d(1, 1, 1)",
        transformOrigin: "center center",

        transition:
          "transform 300ms ease, border-color 300ms ease, background-color 300ms ease, box-shadow 300ms ease",

        willChange: "transform",
        backfaceVisibility: "hidden",
      },

      svg: {
        color: "#838486",
        width: "1.3em",
        height: "1.3em",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      span: {
        color: "#838486",
        fontSize: "6px",
        lineHeight: "6px",
        fontFamily: "var(--poppins)",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      hover: {
        transform: "scale3d(1.09, 1.09, 1)",
        border: "2px solid #222",
        backgroundColor: "white",
        boxShadow: "0 0 10px -1px #222",
      },

      hoverSvg: {
        color: "#222",
      },

      hoverSpan: {
        color: "#000",
      },
    },
  },

  {
    name: "PostgreSQL",
    component: PostgreSQL,

    styles: {
      card: {
        gridArea: "6 / 4 / 7 / 5",

        width: "55%",
        height: "85%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        justifySelf: "center",
        alignSelf: "center",

        gap: "5px",

        borderRadius: "10px",
        border: "2px solid #dad9d9",
        boxShadow: "0 0 10px -1px #d4d4d4",

        backgroundColor: "rgb(230, 234, 234)",

        transform: "scale3d(1, 1, 1)",
        transformOrigin: "center center",

        transition:
          "transform 300ms ease, border-color 300ms ease, background-color 300ms ease, box-shadow 300ms ease",

        willChange: "transform",
        backfaceVisibility: "hidden",
      },

      svg: {
        color: "#838486",
        width: "1.3em",
        height: "1.3em",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      span: {
        color: "#838486",
        fontSize: "6px",
        lineHeight: "6px",
        fontFamily: "var(--poppins)",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      hover: {
        transform: "scale3d(1.09, 1.09, 1)",
        border: "2px solid #336791",
        backgroundColor: "white",
        boxShadow: "0 0 10px -1px #336791",
      },

      hoverSvg: {
        color: "#336791",
      },

      hoverSpan: {
        color: "#000",
      },
    },
  },

  {
    name: "Supabase",
    component: Supabase,

    styles: {
      card: {
        gridArea: "7 / 2 / 8 / 3",

        width: "55%",
        height: "85%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        justifySelf: "center",
        alignSelf: "center",

        gap: "5px",

        borderRadius: "10px",
        border: "2px solid #dad9d9",
        boxShadow: "0 0 10px -1px #d4d4d4",

        backgroundColor: "rgb(230, 234, 234)",

        transform: "scale3d(1, 1, 1)",
        transformOrigin: "center center",

        transition:
          "transform 300ms ease, border-color 300ms ease, background-color 300ms ease, box-shadow 300ms ease",

        willChange: "transform",
        backfaceVisibility: "hidden",
      },

      svg: {
        color: "#838486",
        width: "1.3em",
        height: "1.3em",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      span: {
        color: "#838486",
        fontSize: "6px",
        lineHeight: "6px",
        fontFamily: "var(--poppins)",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      hover: {
        transform: "scale3d(1.09, 1.09, 1)",
        border: "2px solid #3ecf8e",
        backgroundColor: "white",
        boxShadow: "0 0 10px -1px #3ecf8e",
      },

      hoverSvg: {
        color: "#3ecf8e",
      },

      hoverSpan: {
        color: "#000",
      },
    },
  },

  {
    name: "Neon",
    component: Neon,

    styles: {
      card: {
        gridArea: "7 / 6 / 8 / 7",

        width: "55%",
        height: "85%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        justifySelf: "center",
        alignSelf: "center",

        gap: "5px",

        borderRadius: "10px",
        border: "2px solid #dad9d9",
        boxShadow: "0 0 10px -1px #d4d4d4",

        backgroundColor: "rgb(230, 234, 234)",

        transform: "scale3d(1, 1, 1)",
        transformOrigin: "center center",

        transition:
          "transform 300ms ease, border-color 300ms ease, background-color 300ms ease, box-shadow 300ms ease",

        willChange: "transform",
        backfaceVisibility: "hidden",
      },

      svg: {
        color: "#838486",
        width: "1.3em",
        height: "1.3em",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      span: {
        color: "#838486",
        fontSize: "6px",
        lineHeight: "6px",
        fontFamily: "var(--poppins)",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      hover: {
        transform: "scale3d(1.09, 1.09, 1)",
        border: "2px solid #00e599",
        backgroundColor: "white",
        boxShadow: "0 0 10px -1px #00e599",
      },

      hoverSvg: {
        color: "#00e599",
      },

      hoverSpan: {
        color: "#000",
      },
    },
  },

  {
    name: "Vercel",
    component: Vercel,

    styles: {
      card: {
        gridArea: "3 / 1 / 4 / 2",

        width: "55%",
        height: "85%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        justifySelf: "center",
        alignSelf: "center",

        gap: "5px",

        borderRadius: "10px",
        border: "2px solid #dad9d9",
        boxShadow: "0 0 10px -1px #d4d4d4",

        backgroundColor: "rgb(230, 234, 234)",

        transform: "scale3d(1, 1, 1)",
        transformOrigin: "center center",

        transition:
          "transform 300ms ease, border-color 300ms ease, background-color 300ms ease, box-shadow 300ms ease",

        willChange: "transform",
        backfaceVisibility: "hidden",
      },

      svg: {
        color: "#838486",
        width: "1.3em",
        height: "1.3em",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      span: {
        color: "#838486",
        fontSize: "6px",
        lineHeight: "6px",
        fontFamily: "var(--poppins)",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      hover: {
        transform: "scale3d(1.09, 1.09, 1)",
        border: "2px solid #111",
        backgroundColor: "white",
        boxShadow: "0 0 10px -1px #111",
      },

      hoverSvg: {
        color: "#111",
      },

      hoverSpan: {
        color: "#000",
      },
    },
  },

  {
    name: "Railway",
    component: Railway,

    styles: {
      card: {
        gridArea: "1 / 7 / 2 / 8",

        width: "55%",
        height: "85%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        justifySelf: "center",
        alignSelf: "center",

        gap: "5px",

        borderRadius: "10px",
        border: "2px solid #dad9d9",
        boxShadow: "0 0 10px -1px #d4d4d4",

        backgroundColor: "rgb(230, 234, 234)",

        transform: "scale3d(1, 1, 1)",
        transformOrigin: "center center",

        transition:
          "transform 300ms ease, border-color 300ms ease, background-color 300ms ease, box-shadow 300ms ease",

        willChange: "transform",
        backfaceVisibility: "hidden",
      },

      svg: {
        color: "#838486",
        width: "1.3em",
        height: "1.3em",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      span: {
        color: "#838486",
        fontSize: "6px",
        lineHeight: "6px",
        fontFamily: "var(--poppins)",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      hover: {
        transform: "scale3d(1.09, 1.09, 1)",
        border: "2px solid #853bce",
        backgroundColor: "white",
        boxShadow: "0 0 10px -1px #853bce",
      },

      hoverSvg: {
        color: "#853bce",
      },

      hoverSpan: {
        color: "#000",
      },
    },
  },

  {
    name: "Render",
    component: Render,

    styles: {
      card: {
        gridArea: "5 / 7 / 6 / 8",

        width: "55%",
        height: "85%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        justifySelf: "center",
        alignSelf: "center",

        gap: "5px",

        borderRadius: "10px",
        border: "2px solid #dad9d9",
        boxShadow: "0 0 10px -1px #d4d4d4",

        backgroundColor: "rgb(230, 234, 234)",

        transform: "scale3d(1, 1, 1)",
        transformOrigin: "center center",

        transition:
          "transform 300ms ease, border-color 300ms ease, background-color 300ms ease, box-shadow 300ms ease",

        willChange: "transform",
        backfaceVisibility: "hidden",
      },

      svg: {
        color: "#838486",
        width: "1.3em",
        height: "1.3em",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      span: {
        color: "#838486",
        fontSize: "6px",
        lineHeight: "6px",
        fontFamily: "var(--poppins)",

        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",

        transition: "color 300ms ease",
      },

      hover: {
        transform: "scale3d(1.09, 1.09, 1)",
        border: "2px solid #46e3b7",
        backgroundColor: "white",
        boxShadow: "0 0 10px -1px #46e3b7",
      },

      hoverSvg: {
        color: "#46e3b7",
      },

      hoverSpan: {
        color: "#000",
      },
    },
  },
] as const satisfies readonly DefinedCards[];

type Props = {
  items: readonly DefinedCards[];
  activeStage: ExperienceStage;
};

type CardName = (typeof definedCards)[number]["name"];
type Point = {
  x: number;
  y: number;
};

const createRoundedPath = (
  source: Point,
  target: Point,
  trunkX: number,
): string => {
  const startDirection = Math.sign(trunkX - source.x);
  const verticalDirection = Math.sign(target.y - source.y);
  const endDirection = Math.sign(target.x - trunkX);

  const radius =
    Math.min(
      Math.abs(trunkX - source.x),
      Math.abs(target.y - source.y),
      Math.abs(target.x - trunkX),
    ) * 0.15;

  return `
    M ${source.x} ${source.y}
    H ${trunkX - startDirection * radius}
    Q ${trunkX} ${source.y}
      ${trunkX} ${source.y + verticalDirection * radius}
    V ${target.y - verticalDirection * radius}
    Q ${trunkX} ${target.y}
      ${trunkX + endDirection * radius} ${target.y}
    H ${target.x}
  `;
};

export const FigureCards = (props: Props) => {
  const figureRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Partial<Record<CardName, HTMLDivElement>>>({});
  const [cardCenters, setCardCenters] = useState<
    Partial<Record<CardName, Point>>
  >({});

  const getCardCenter = (name: CardName): Point | null => {
    const figure = figureRef.current;
    const card = cardRefs.current[name];

    if (!figure || !card) return null;

    const figureRect = figure.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    return {
      x: cardRect.left - figureRect.left + cardRect.width / 2,
      y: cardRect.top - figureRect.top + cardRect.height / 2,
    };
  };

  console.log(props.activeStage);

  useEffect(() => {
    const measureCardCenters = () => {
      const centers: Partial<Record<CardName, Point>> = {};

      props.items.forEach((item) => {
        const cardName = item.name as CardName;
        const center = getCardCenter(cardName);

        if (center) {
          centers[cardName] = center;
        }
      });

      setCardCenters(centers);
    };

    measureCardCenters();

    const resizeObserver = new ResizeObserver(() => {
      measureCardCenters();
    });

    if (figureRef.current) {
      resizeObserver.observe(figureRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [props.items]);

  const activeGroup = connectionGroups.find(
    (group) => group.stage === props.activeStage,
  );
  return (
    <div className={styleFigureCards.wrapper}>
      <div className={styleFigureCards.wrapperHeader}>
        <span></span>
      </div>
      <hr />
      <figure ref={figureRef} className={styleFigureCards.figure}>
        <svg className={styleFigureCards.connections} aria-hidden="true">
          <defs>
            <linearGradient
              id="connectionGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
            >
              <stop offset="0%" stopColor="rgba(131, 58, 180, 1)" />
              <stop offset="50%" stopColor="rgba(253, 29, 29, 1)" />
              <stop offset="100%" stopColor="rgba(252, 176, 69, 1)" />

              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="-1 0; 1 0; -1 0"
                dur="5s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          {connectionGroups.map((group) => {
            if (group.stage !== props.activeStage) {
              return null;
            }
            const source = cardCenters[group.from];
            if (!source) return null;
            const targets: Array<{
              name: CardName;
              point: Point;
            }> = [];

            group.targets.forEach((targetName) => {
              const point = cardCenters[targetName];

              if (point) {
                targets.push({
                  name: targetName,
                  point: point,
                });
              }
            });

            const leftTargets = targets.filter((target) => {
              return target.point.x < source.x;
            });

            const rightTargets = targets.filter((target) => {
              return target.point.x > source.x;
            });

            const trunkRatio = 0.45;

            const leftTrunkX = leftTargets.length
              ? source.x -
                (source.x -
                  Math.max(...leftTargets.map((target) => target.point.x))) *
                  trunkRatio
              : null;

            const rightTrunkX = rightTargets.length
              ? source.x +
                (Math.min(...rightTargets.map((target) => target.point.x)) -
                  source.x) *
                  trunkRatio
              : null;
            return targets.map((target) => {
              const trunkX =
                target.point.x < source.x ? leftTrunkX : rightTrunkX;
              return (
                <path
                  key={`${group.from} - ${target.name} `}
                  className={styleFigureCards.connectionPath}
                  pathLength={1}
                  d={
                    trunkX === null
                      ? `M ${source.x} ${source.y}
                      L ${target.point.x} ${target.point.y}`
                      : createRoundedPath(target.point, source, trunkX)
                  }
                  fill="none"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                />
              );
            });
          })}
        </svg>
        {props.items.map((item) => {
          const isSource = activeGroup?.from === item.name;

          const isTarget =
            activeGroup?.targets.some((target) => target === item.name) ??
            false;

          const isActiveCard = isSource || isTarget;
          const Component = item.component;
          return (
            <Component
              key={item.name}
              style={{
                ...item.styles.card,

                ...(isActiveCard ? item.styles.hover : {}),

                // opacity: isActiveCard ? 1 : 0.2,
              }}
              svgStyle={{
                ...item.styles.svg,
                ...(isActiveCard ? item.styles.hoverSvg : {}),
              }}
              spanStyle={{
                ...item.styles.span,
                ...(isActiveCard ? item.styles.hoverSpan : {}),
              }}
              cardRef={(element) => {
                const cardNames = item.name as CardName;

                if (element) {
                  cardRefs.current[cardNames] = element;
                } else {
                  delete cardRefs.current[cardNames];
                }
              }}
            />
          );
        })}
      </figure>
      <hr />
      <div className={styleFigureCards.wrapperFooter}>
        <span></span>
      </div>
    </div>
  );
};
