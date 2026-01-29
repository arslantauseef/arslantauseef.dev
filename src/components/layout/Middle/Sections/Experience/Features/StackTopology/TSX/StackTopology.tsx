import SM from "../Styles/StackTopology/StackTopology.module.css"
import { useMemo, useRef } from "react";
import { type StackTopologyProps, DEFAULT_STACK_ITEMS } from "../../../Constants/StackTopology/StackTopology.constant"
import { STACK_CARD_REGISTRY } from "../../../Constants/StackTopology/StackTopology.constant";

export const StackTopology = ({ items, maxCards = 12 }: StackTopologyProps) => {
  const sourceItems = items ?? DEFAULT_STACK_ITEMS
  const visibleItems = useMemo(
    () => sourceItems.slice(0, Math.max(0, maxCards)),
    [sourceItems, maxCards]
  );

  const cardRefs = useRef<Record<string, SVGSVGElement  | null>>({});

  const setCartRefs = (id: string) => (el: SVGSVGElement  | null) => {
    cardRefs.current[id] = el
  }

  const next = cardRefs.current["next"]
  const express = cardRefs.current["express"]

  console.log({ next, express })
  return (
    <>
      {visibleItems.map((item) => {
        const fileName = item.icon.fileName
        const Article = STACK_CARD_REGISTRY[fileName]
          return (
          <Article
            key={item.id}
            data-domain={item.domain}
            ref={setCartRefs(item.id)}
            className={SM['at-topology-card']}
            style={
              item.position
                ? {
                  gridColumn: item.position.col,
                  gridRow: item.position.row,
                }
                : undefined
            }>
            <h4 style={{ color: "black", textAlign: "center" }}>{item.label}</h4>
          </Article>
        )
      }

      )}
    </>
  )
}