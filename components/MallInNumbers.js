import styles from "../styles/mallinnumbers.module.scss"

import Cube from "../public/assets/images/Logos/Cube"
import Building from "../public/assets/images/Logos/Building"
import HoursOpen from "../public/assets/images/Logos/HoursOpen"
import Parking from "../public/assets/images/Logos/Parking"



import useTranslation from "next-translate/useTranslation";



export default function MallInNumbers() {
    const { t } = useTranslation("common");
    return (<div className={styles.maxWidth}>
        <div className={styles.dflex}>
            <div className={styles.dflexCoulmn}>
                <Parking width={70} />
                <span className={styles.numbers}>{t("parking")}</span>
                <span>{t("parkingDescription")}</span>
            </div>

            <div className={styles.dflexCoulmn}>
                <HoursOpen width={70} />
                <span className={styles.numbers}>{t("workingHours")}</span>
                <span>{t("workingHoursDescription")}</span>
            </div>

            <div className={styles.dflexCoulmn}>
                <Cube width={70} />
                <span className={`${styles.numbers} ${styles.posRelative}`}>M<span className={styles.toPowerOf}>2</span> 66.000+</span>
                <span>{t("BuildingDescription")}</span>
            </div>
            <div className={styles.dflexCoulmn}>
                <Building width={70} />
                <span className={styles.numbers}>{t("branches")}</span>
                <span>{t("branchesDescription")}</span>
            </div>
            <div className={styles.dflexCoulmn}>
                <Building width={70} />
                <span className={styles.numbers}>{t("Experience")}</span>
                <span>{t("ExperienceDescription")}</span>
            </div>
        </div>
    </div>

    )
}