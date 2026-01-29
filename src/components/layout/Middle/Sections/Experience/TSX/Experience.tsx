import { StackTopology } from "../Features/StackTopology/TSX/StackTopology"
import EM from "../Styles/Experience/Experience.module.css"
import ERM from "../Styles/Responsive/Experience.responsive.module.css"

export const Experience = () => {
    return (
        <section className={EM['at-experience']}>
            <div className={`${EM["at-experience-container"]} ${ERM["at-experience-container"]}`}>
                <section className={`${EM['at-ex-text']} ${ERM['at-ex-text']}`}>
                    <h3>Technology Stack</h3>
                </section>
                <div className={`${EM['at-experience-animation-container']} ${ERM['at-experience-animation-container']}`}>
                    <StackTopology maxCards={12}/>
                </div>
            </div>
        </section>
    )
}
