import { Header } from "./components/layout/header/tsx/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/layout/footer/tsx/Footer";
import style from "./App.module.css"

function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
