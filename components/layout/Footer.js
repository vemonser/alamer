import SvgSiteLogo from "../../public/assets/images/Logos/SiteLogo"
import Instagram from "../../public/assets/images/Logos/Instagram"
import Twitter from "../../public/assets/images/Logos/Twitter"
import Facebook from "../../public/assets/images/Logos/Facebook"
import Snapshat from "../../public/assets/images/Logos/Snapchat"
import Tiktok from "../../public/assets/images/Logos/Tiktok"
import Link from "next/link"
import styles from "../../styles/footer.module.scss"
import useTranslation from "next-translate/useTranslation";


export default function Footer(props) {
    const { t } = useTranslation("common");
    return (
        <div className={styles.background}>
            <div className={styles.MaxWidth} dir={props.currentDir}>
                <div className={styles.dFlex}>
                    <div className={styles.LinksSideFlex}>
                        <div className={styles.LinksContainer}>
                            <div className={styles.Linksp1}>
                                <Link className={styles.link} href={"/"}>{t("home")}</Link>
                                <Link className={styles.link} href={"/"}>{t("department")}</Link>
                                <Link className={styles.link} href={"/"}>{t("whoWeAre")}</Link>
                            </div>
                            <div className={styles.Linksp2}>
                                <Link className={styles.link} href={"/"}>{t("insideMaps")}</Link>
                                <Link className={styles.link} href={"/"}>{t("contact")}</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.SocialSideFlex}>
                        <div className={styles.Logo}>
                            <SvgSiteLogo className={styles.svg} width="200px" height="75px" /></div>
                        <div className={styles.SocialIcons}>
                            <Instagram width="3vw" height="6vh" />
                            <Twitter width="3vw" height="6vh" />
                            <Facebook width="3vw" height="6vh" />
                            <Snapshat width="3vw" height="6vh" />
                            <Snapshat width="3vw" height="6vh" />
                        </div>
                    </div>
                </div>
            </div>
            <p className={styles.copyRight}> {t("footer")}</p>
        </div>
    )
}