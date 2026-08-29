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

type ConnectionStage = "frontend" | "backend" | "database"

type ConnectionGroup = {
  stage: ConnectionStage,
  from: CardName,
  targets: readonly CardName[]
}

const connectionGroups = [
  {
    stage: "frontend",
    from: "React",
    targets: ["TypeScript", "Vercel"]
  },
    {
    stage: "backend",
    from: "Express",
    targets: ["Node", "Railway", "Render"]
  },
    {
    stage: "database",
    from: "PostgreSQL",
    targets: ["Neon", "Supabase"]
  },
] as const satisfies readonly ConnectionGroup[]


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
  // React
  {
    name: "React",
    component: ReactJs,

    styles: {
      card: {
        gridColumn: "1 / 2",
        gridRow: "1 / 2",

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
        border: "2px solid #d9dada",

        backgroundColor: "rgb(230, 234, 234)",
        boxShadow: "0 0 20px -1px #d7d8d8",

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
        borderColor: "#83c5f1",
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

  // TypeScript
  {
    name: "TypeScript",
    component: TypeScript,

    styles: {
      card: {
        gridColumn: "4 / 5",
        gridRow: "2 / 3",

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
        border: "2px solid #d9dada",

        backgroundColor: "rgb(230, 234, 234)",
        boxShadow: "0 0 20px -1px #d7d8d8",

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
        borderColor: "#3178c6",
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

  // Node
  {
    name: "Node",
    component: Node,

    styles: {
      card: {
        gridColumn: "8 / 9",
        gridRow: "1 / 2",

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
        border: "2px solid #d9dada",

        backgroundColor: "rgb(230, 234, 234)",
        boxShadow: "0 0 20px -1px #d7d8d8",

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
        borderColor: "#68a063",
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

  // Express
  {
    name: "Express",
    component: Express,

    styles: {
      card: {
        gridColumn: "5 / 6",
        gridRow: "4 / 5",

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
        border: "2px solid #d9dada",

        backgroundColor: "rgb(230, 234, 234)",
        boxShadow: "0 0 20px -1px #d7d8d8",

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
        borderColor: "#222",
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

  // PostgreSQL
  {
    name: "PostgreSQL",
    component: PostgreSQL,

    styles: {
      card: {
        gridColumn: "4 / 5",
        gridRow: "6 / 7",

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
        border: "2px solid #d9dada",

        backgroundColor: "rgb(230, 234, 234)",
        boxShadow: "0 0 20px -1px #d7d8d8",

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
        borderColor: "#336791",
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

  // Supabase
  {
    name: "Supabase",
    component: Supabase,

    styles: {
      card: {
        gridColumn: "2 / 3",
        gridRow: "8 / 9",

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
        border: "2px solid #d9dada",

        backgroundColor: "rgb(230, 234, 234)",
        boxShadow: "0 0 20px -1px #d7d8d8",

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
        borderColor: "#3ecf8e",
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

  // Neon
  {
    name: "Neon",
    component: Neon,

    styles: {
      card: {
        gridColumn: "7 / 8",
        gridRow: "8 / 9",

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
        border: "2px solid #d9dada",

        backgroundColor: "rgb(230, 234, 234)",
        boxShadow: "0 0 20px -1px #d7d8d8",

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
        borderColor: "#00e599",
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

  // Vercel
  {
    name: "Vercel",
    component: Vercel,

    styles: {
      card: {
        gridColumn: "2 / 3",
        gridRow: "4 / 5",

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
        border: "2px solid #d9dada",

        backgroundColor: "rgb(230, 234, 234)",
        boxShadow: "0 0 20px -1px #d7d8d8",

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
        borderColor: "#111",
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

  // Railway
  {
    name: "Railway",
    component: Railway,

    styles: {
      card: {
        gridColumn: "6 / 7",
        gridRow: "1 / 2",

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
        border: "2px solid #d9dada",

        backgroundColor: "rgb(230, 234, 234)",
        boxShadow: "0 0 20px -1px #d7d8d8",

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
        borderColor: "#853bce",
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

  // Render
  {
    name: "Render",
    component: Render,

    styles: {
      card: {
        gridColumn: "8 / 9",
        gridRow: "5 / 6",

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
        border: "2px solid #d9dada",

        backgroundColor: "rgb(230, 234, 234)",
        boxShadow: "0 0 20px -1px #d7d8d8",

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
        borderColor: "#46e3b7",
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
};

type CardName = (typeof definedCards)[number]["name"];
type Point = {
  x: number;
  y: number;
};



export const FigureCards = (props: Props) => {
  const figureRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Partial<Record<CardName, HTMLDivElement>>>({});
  const [cardCenters, setCardCenters] = useState<any>({});

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

  return (
    <div className={styleFigureCards.wrapper}>
      <div className={styleFigureCards.wrapperHeader}>
        <span>Header</span>
      </div>
      <hr />
      <figure ref={figureRef} className={styleFigureCards.figure}>
        <svg className={styleFigureCards.connections} aria-hidden="true">
          {cardCenters.React && cardCenters.TypeScript && (
            <path
              d={`
        M ${cardCenters.React.x} ${cardCenters.React.y}
        L ${cardCenters.TypeScript.x} ${cardCenters.TypeScript.y}
      `}
              fill="none"
              stroke="#3178c6"
              strokeWidth="2"
            />
          )}
        </svg>
        {props.items.map((item) => {
          const Component = item.component;
          return (
            <Component
              key={item.name}
              style={item.styles.card}
              svgStyle={item.styles.svg}
              spanStyle={item.styles.span}
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
        <span>Footer</span>
      </div>
    </div>
  );
};
