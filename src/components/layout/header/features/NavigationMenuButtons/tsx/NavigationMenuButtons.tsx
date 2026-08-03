import { NavLink, useLocation } from "react-router-dom";
import styleNavButton from "../styles/NavButtons.module.css";
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
  Primary: styleNavButton.primary,
  Secondary: styleNavButton.secondary,
};

type Props = {
  items: NavItems[];
};

export const NavigationMenuButtons = (props: Props) => {
  const containeRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const [blob, setBlob] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    visible: false,
  });

  useLayoutEffect(() => {
    const container = containeRef.current;
    if (!container) return;

    const activeLink = container.querySelector<HTMLAnchorElement>(
      '[aria-current="page"]',
    );

    if (!activeLink) {
      setBlob((prev) => ({
        ...prev,
        visible: false,
      }));

      return;
    }

    if (activeLink.pathname === "/contact") {
    }

    const extraX = 17;
    const extraY = 13;
    const containerRect = container.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    const x = Math.round(linkRect.left - containerRect.left - extraX / 2);
    const y = Math.round(linkRect.top - containerRect.top - extraY / 2);
    const width = Math.round(linkRect.width + extraX);
    const height = Math.round(linkRect.height + extraY);

    setBlob({
      x,
      y,
      width,
      height,
      visible: true,
    });

  }, [location.pathname]);

  return (
    <div ref={containeRef} className={styleNavButton.container}>
      <span
        className={styleNavButton.navBlob}
        style={{
          transform: `translate3d(${blob.x}px, ${blob.y}px, 0)`,
          width: `${blob.width}px`,
          height: `${blob.height}px`,
          opacity: blob.visible ? 1 : 0,
        }}
      >
        <span className={styleNavButton.navBlobSurface} />
      </span>
      {props.items.map((items) => {
        const variant = items.variant ?? "Primary";
        return (
          <NavLink
            key={items.path}
            to={items.path}
            className={({ isActive }) => {
              return [
                variantClass[variant],
                isActive && variant === "Primary" ? styleNavButton.active : "",
              ]
                .filter(Boolean)
                .join(" ");
            }}
          >
            {items.label}
          </NavLink>
        );
      })}
    </div>
  );
};
