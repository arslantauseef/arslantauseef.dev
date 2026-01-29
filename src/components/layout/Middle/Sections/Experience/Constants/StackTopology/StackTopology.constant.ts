import type { ComponentType, SVGProps } from "react";

import CardBun from "../../Assets/SVG/Nodes/CardBun/CardBun";
import CardExpress from "../../Assets/SVG/Nodes/CardExpress/CardExpress";
import CardFigma from "../../Assets/SVG/Nodes/CardFigma/CardFigma";
import CardJavaScript from "../../Assets/SVG/Nodes/CardJavaScript/CardJavaScript";
import CardMongoDB from "../../Assets/SVG/Nodes/CardMongoDB/CardMongoDB";
import CardNext from "../../Assets/SVG/Nodes/CardNext/CardNext";
import CardNode from "../../Assets/SVG/Nodes/CardNode/CardNode";
import CardPostgreSQL from "../../Assets/SVG/Nodes/CardPostgreSQL/CardPostgreSQL";
import CardReact from "../../Assets/SVG/Nodes/CardReact/CardReact";
import CardSQL from "../../Assets/SVG/Nodes/CardSQL/CardSQL";
import CardTanStack from "../../Assets/SVG/Nodes/CardTanStack/CardTanStack";



type StackDomain = "frontend" | "backend" | "database" | "design" | "query_language" | "programming_language";
export type StackItemPosition = {
  col: number;
  row: number;
};

type SvgCardComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const STACK_CARD_REGISTRY = {
  CardReact,
  CardMongoDB,
  CardBun,
  CardNext,
  CardSQL,
  CardPostgreSQL,
  CardTanStack,
  CardFigma,
  CardJavaScript,
  CardNode,
  CardExpress,
} satisfies Record<string, SvgCardComponent>;

export type fileNames = keyof typeof STACK_CARD_REGISTRY;

export type StackItem = {
  id: string;
  label: string;
  domain: StackDomain;
  icon: {
    name: string;
    variant?: "monochrome" | "polychrome";
    fileName: fileNames;
  };
  position?: StackItemPosition;
}

export type StackTopologyProps = {
  items?: ReadonlyArray<StackItem>;
  maxCards?: number;
}

export const DEFAULT_STACK_ITEMS: ReadonlyArray<StackItem> = [
  {
    id: "react",
    label: "React.js",
    domain: "frontend",
    icon: { name: "react", variant: "monochrome", fileName: "CardReact" },
    position: {
      col: 4,
      row: 1
    }
  },
  {
    id: "javascript",
    label: "JavaScript",
    domain: "programming_language",
    icon: { name: "javascript", variant: "monochrome", fileName: "CardJavaScript" },
    position: {
      col: 1,
      row: 1
    }
  },
  {
    id: "next",
    label: "Next.js",
    domain: "frontend",
    icon: { name: "next", variant: "monochrome", fileName: "CardNext" },
    position: {
      col: 3,
      row: 4
    }
  },

  {
    id: "bun",
    label: "Bun",
    domain: "backend",
    icon: { name: "Bun", variant: "monochrome", fileName: "CardBun" },
    position: {
      col: 1,
      row: 5
    }
  },
  {
    id: "sql",
    label: "SQL",
    domain: "query_language",
    icon: { name: "sql", variant: "monochrome", fileName: "CardSQL" },
    position: {
      col: 1,
      row: 1
    }
  },
  {
    id: "tanstack",
    label: "TanStack",
    domain: "frontend",
    icon: { name: "tanstack", variant: "monochrome", fileName: "CardTanStack" },
    position: {
      col: 2,
      row: 3
    }
  },
  {
    id: "node",
    label: "Node.js",
    domain: "backend",
    icon: { name: "node", variant: "monochrome", fileName: "CardNode" },
    position: {
      col: 6,
      row: 2
    }
  },
  {
    id: "express",
    label: "Express.js",
    domain: "backend",
    icon: { name: "express", variant: "monochrome", fileName: "CardExpress" },
    position: {
      col: 3,
      row: 2
    }
  },
  {
    id: "figma",
    label: "Figma",
    domain: "design",
    icon: { name: "figma", variant: "monochrome", fileName: "CardFigma" },
    position: {
      col: 3,
      row: 6
    }

  },
  {
    id: "postgres",
    label: "PostgreSQL",
    domain: "database",
    icon: { name: "postgres", variant: "monochrome", fileName: "CardPostgreSQL" },
    position: {
      col: 5,
      row: 4
    }
  },
  {
    id: "mongodb",
    label: "MongoDB",
    domain: "database",
    icon: { name: "mongodb", variant: "monochrome", fileName: "CardMongoDB" },
    position: {
      col: 6,
      row: 6
    }
  },
]