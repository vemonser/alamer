
import styles from "../styles/partners.module.scss"
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import tofm from "../public/assets/images/Logos/07_gray.png"
import mCompany from "../public/assets/images/Logos/05_gray.png"

export default function Partners(props) {
    const { t } = useTranslation("common");
    return (
        <div className={styles.MaxWidth} dir={props.currentDir}>
            <h1>{t("ourPartners")}</h1>
            <div className={styles.dflex}>
                <div className={styles.img1}>
                    <Image src={tofm} layout="fill" />
                </div>
                <div className={styles.img2}>
                    <Image src={mCompany} layout="fill" />
                </div>
            </div>
        </div>
    )
}// 1857