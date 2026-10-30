import styleTopBar from "../styles/topbar/topbar.module.css";
import { IoNotifications } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useMatches } from "react-router-dom";

type RouteHandle = {
  breadcrumb?: string;
};
export const DashboardHeader = () => {
  const breadcrumbs = useMatches()
    .flatMap((item) => {
      const handle = item.handle as RouteHandle | undefined;
      return handle?.breadcrumb;
    })
    .filter((breadcrumb): breadcrumb is string => Boolean(breadcrumb));

  return (
    <header className={styleTopBar.topbar}>
      <nav className={styleTopBar.left} aria-label="Breadcrumb">
        <ol className={styleTopBar.breadcrumbs}>
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={`${breadcrumb}-${index}`}>
              <span aria-current={index === breadcrumbs.length - 1 ? "page" : undefined}>
                {breadcrumb}
              </span>
            </li>
          ))}
        </ol>
      </nav>
      <div className={styleTopBar.right}>
        <span className={styleTopBar.icon} aria-label="Notifications" role="img">
          <IoNotifications aria-hidden="true" />
        </span>
        <span className={styleTopBar.icon} aria-label="Sign out" role="img">
          <MdLogout aria-hidden="true" />
        </span>
      </div>
    </header>
  );
};
