import { IoMdAnalytics } from "react-icons/io";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineArticle } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { type IconType } from "react-icons";

export type NavTypes = {
  name: string;
  icon: IconType;
  to?: string
};

export const navs = [
  {
    name: "Analytics",
    icon: IoMdAnalytics,
    to: "/dashboard"
  },
  {
    name: "Projects",
    icon: GoProjectSymlink,
    to: "projects"
  },
  {
    name: "Content",
    icon: MdOutlineArticle,
    to: "content"
  },
  {
    name: "Settings",
    icon: IoSettingsOutline,
    to: "settings"
  },
] as const satisfies readonly NavTypes[];
