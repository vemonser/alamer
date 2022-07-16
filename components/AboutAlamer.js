import styles from "../styles/AboutAlamer.module.scss"
import Image from "next/image"
import Link from "next/link"
import AboutAlamerImg from "../public/assets/images/Actual Photos & 3D/al amer circle.png"
import useTranslation from "next-translate/useTranslation";
import grayBackground from "../public/assets/images/Actual Photos & 3D/grey bg-01.png"

export default function AboutAlamer(props) {
    const { t } = useTranslation("common");
    return (
        <div className={styles.Background} >
            <div className={styles.grayBg}>
                <Image src={grayBackground} width={"2000px"} height={"700"} objectFit={"cover"}/>
            </div>
            <div className={styles.MaxWidth} dir={props.currentDir}>
                <div className={styles.dflexTxt}>
                    <h1>{t("AboutMalltitle")}</h1>
                    <p>{t("AboutMallDescriptionPartOne")}</p>
                    <p>{t("AboutMallDescriptionPartTwo")}</p>
                </div>
                <div className={styles.dflexImg}>
                    <Image src={AboutAlamerImg} width={"400"} height={"360"} objectFit="cover" />
                    <Link href={"/"}><span className={styles.Btn}>{t("AboutMallButton")}</span></Link>
                </div>
            </div>
        </div>
    )
}