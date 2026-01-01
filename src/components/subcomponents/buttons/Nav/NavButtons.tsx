import React from "react";
import "./NavButtons.css";


interface NavButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  href?: "/" | "/Projects" | "/About" | "/Contact";
  onMouseMove?: (pos: {x: number, y:number}) => void;
}

export const NavButtons = ({
  variant = "primary",
  size = "medium",
  onClick,
  children,
  href,
  onMouseMove,
}: NavButtonProps) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!onMouseMove) return;

    // get mouse position relative to the <a>
    const pos = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
    onMouseMove(pos);
    console.log(pos)
  };
  return (
    <a
      className={`nav-btn nav-btn--${variant} nav-btn--${size}`}
      onClick={onClick}
      href={href}
      onMouseMove={handleMouseMove}
    >
      {children}
    </a>
  );
};
