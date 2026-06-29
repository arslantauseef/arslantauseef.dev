import { NavLink, useLocation } from "react-router-dom";
import styleMain from "../styles/NavButtons.module.css";
import styleBlob from "../../../styles/header.blobAnimation.module.css";
import { useLayoutEffect, useRef, useState } from "react";

type Paths = "/home" | "/projects" | "/features" | "/about" | "/contact";
type Labels = "Home" | "Projects" | "Features" | "About" | "Contact";
type Variants = "Primary" | "Secondary";

type NavItems = {
  path: Paths;
  label: Labels;
  variant?: Variants;
};

export const navItems: NavItems[] = [
  {
    label: "Home",
    path: "/home",
    variant: "Primary",
  },
  {
    label: "Projects",
    path: "/projects",
    variant: "Primary",
  },
  {
    label: "Features",
    path: "/features",
    variant: "Primary",
  },
  {
    label: "About",
    path: "/about",
    variant: "Primary",
  },
  {
    label: "Contact",
    path: "/contact",
    variant: "Secondary",
  },
];

const variantClass: Record<Variants, string> = {
  Primary: styleMain.primary,
  Secondary: styleMain.secondary,
};

type Props = {
  items: NavItems[];
};

export const NavButtons = (props: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const [blob, setBlob] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    visible: false,
  });

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) return;
    const activeLink = container.querySelector('[aria-current="page"]');

    if (!activeLink) {
      setBlob((prev) => ({
        ...prev,
        visible: false,
      }));

      return;
    }

    const containerRect = container.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    const extraX = 28;
    const extraY = 24;

    const width = linkRect.width + extraX;
    const height = linkRect.height + extraY;

    setBlob({
      x: linkRect.left - containerRect.left - extraX / 2,
      y: linkRect.top - containerRect.top - extraY / 2,
      width,
      height,
      visible: true,
    });
  }, [location.pathname, props.items]);

  return (
    <div ref={containerRef} className={styleMain.container}>
      <span
        className={styleBlob.navBlob}
        style={{
          transform: `translate(${blob.x}px, ${blob.y}px)`,
          width: `${blob.width}px`,
          height: `${blob.height}px`,
          opacity: blob.visible ? 1 : 0,
        }}
      ></span>
      {props.items.map((item, index) => {
        const variant = item.variant ?? "Primary";
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              [variantClass[variant], isActive ? styleMain.active : ""]
                .filter(Boolean)
                .join(" ")
            }
          >
            {item.label}
          </NavLink>
        );
      })}
    </div>
  );
};
