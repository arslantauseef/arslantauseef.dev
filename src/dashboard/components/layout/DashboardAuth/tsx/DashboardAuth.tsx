// import { useState } from "react";
import style from "../styles/main/auth.module.css";
import Logo from "../../../../../components/assets/svgs/logo/Logo";
import styleRight from "../styles/right/auth.right.module.css";
import styleLeft from "../styles/left/auth.left.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { TbLockPassword } from "react-icons/tb";
import GoogleButtonImage from "../../../assets/pngs/search.png";
import GithubButtonImage from "../../../assets/pngs/github.png";
import react from "../../../assets/3d_pngs/React.png";
import typescript from "../../../assets/3d_pngs/TypeScript.png";
import postgres from "../../../assets/3d_pngs/PostgreSQL.png";
import nodejs from "../../../assets/3d_pngs/NodeJS.png";
import express from "../../../assets/3d_pngs/Express.png";
import Logo3d from "../../../assets/3d_pngs/3dLogo.png";
import styleMiddle from "../styles/middle/middle.module.css";
import { Orb } from "../../../../../components/global_feature/orb/tsx/Orb";

import { GrProjects as Projects } from "react-icons/gr";
import { LuTableOfContents as Content} from "react-icons/lu";
import { IoSettingsOutline as Settings } from "react-icons/io5";


// type DefinedFormFields = {
//   email: string;
//   password: string;
// };
export const DashboardAuth = () => {
  // const [loginInput, setLoginInput] = useState<DefinedFormFields>();
  return (
    <section aria-label="login" className={style.container}>
      <div className={style.wrapper}>
        <div className={styleLeft.left}>
          <span className={styleLeft.alpha}>
            <Orb /> ADMIN DASHBOARD
          </span>
          <div className={styleLeft.beta}>
            <span>Manage.</span>
            <span>Create.</span>
            <span>Keep it growing.</span>
          </div>
          <p className={styleLeft.gamma}>
            Sign in to access your dashboard and manage your portfolio, content,
            projects, and more.
          </p>
          <hr className={styleLeft.delta} />
          <ul className={styleLeft.epsilon}>
            <li>
                <Projects/>
              <div>
                <strong>Projects</strong>
                <small>Manage and showcase your work</small>
              </div>
            </li>
            <li>
                <Content/>
              <div>
                <strong>Content</strong>
                <small>Update page information</small>
              </div>
            </li>
            <li>
                <Settings/>
              <div>
                <strong>Settings</strong>
                <small>Configure and customize</small>
              </div>
            </li>
          </ul>
          <div className={styleLeft.zeta}>
            <span>Secure</span>
            <span>Fast</span>
            <span>Built for creators</span>
          </div>
        </div>
        <div className={styleMiddle.middle}>
          <div className={styleMiddle.alpha}>
            <img src={react} alt="" />
          </div>
          <div className={styleMiddle.beta}>
            <img src={typescript} alt="" />
          </div>
          <div className={styleMiddle.gamma}>
            <img src={Logo3d} alt="" />
          </div>
          <div className={styleMiddle.delta}>
            <img src={postgres} alt="" />
          </div>
          <div className={styleMiddle.epsilon}>
            <img src={nodejs} alt="" />
          </div>
          <div className={styleMiddle.zelta}>
            <img src={express} alt="" />
          </div>
        </div>
        <div className={styleRight.right}>
          <form action="" className={styleRight.form}>
            <div className={styleRight.alpha}>
              <Logo />
              <span>Custom Dashboard</span>
            </div>
            <div className={styleRight.beta}>
              <strong>Welcome Back</strong>
              <span>Sign in to access your dashboard.</span>
            </div>
            <div className={styleRight.gamma}>
              <HiOutlineMail />
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className={styleRight.delta}>
              <TbLockPassword />
              <input type="text" placeholder="Enter password" />
            </div>
            <div className={styleRight.epsilon}>
              <div>
                <input type="checkbox" />
                <label htmlFor="">Remember me</label>
              </div>
              <span>Forgot your password?</span>
            </div>
            <div className={styleRight.zeta}>Sign in</div>
            <div className={styleRight.eta}>
              <hr />
              <small>OR CONTINUE WITH</small>
              <hr />
            </div>
            <div className={styleRight.theta}>
              <div>
                <img src={GoogleButtonImage} alt="Google Login button" />
              </div>
              <div>
                <img src={GithubButtonImage} alt="Github Login button" />
              </div>
            </div>
            <div className={styleRight.iota}>
              <small>Need Access?</small> <strong>Contact Administrator</strong>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
