import { NavLink } from "react-router-dom";
import styleMain from "../styles/NavButtons.module.css";

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
  return (
    <>
      {props.items.map((item, index) => {
        const variant = item.variant ?? "Primary";
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              [
                variantClass[variant],
                isActive ? styleMain.active : "",
              ]
                .filter(Boolean)
                .join(" ")
            }
          >
            {item.label}
          </NavLink>
        );
      })}
    </>
  );
};
