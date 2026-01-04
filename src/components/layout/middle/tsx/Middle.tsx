import "../styles/middle/middle.css"
import MyPicture from "../../../../assets/Pictures/MyPicture/MyPicture.png"

export const Middle = () => {
  return (
    <main className="at-main">
        <section className="left-main-section"></section>
        <section className="right-main-section">
            <div><img src={MyPicture} alt="Profile Picture (Arslan Tauseef)" /></div>
        </section>
    </main>
  )
}
