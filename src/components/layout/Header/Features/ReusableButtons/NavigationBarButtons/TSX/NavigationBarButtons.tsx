import React from "react";
import "../Styles/NavigationBarButtons.css";


interface NavButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children?: React.ReactNode;
  href?: "/" | "/Projects" | "/About" | "/Contact";
}

export const NavigationBarButtons = ({
  variant = "primary",
  size = "medium",
  onClick,
  children,
  href,
}: NavButtonProps) => {
    
  return (
    <a
      className={`nav-btn nav-btn--${variant} nav-btn--${size}`}
      href={href}
      onClick={onClick}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {children}
    </a>
  );
};
