import Image from "next/image"
import styles from "../styles/Department.module.scss"
import restaurants from "../public/assets/images/Actual Photos & 3D/restaurants.jpg"
import gym from "../public/assets/images/Actual Photos & 3D/gym.jpg"
import pharma from "../public/assets/images/Actual Photos & 3D/pharma.jpg"
import shoping from "../public/assets/images/Actual Photos & 3D/shoping.jpg"
import entertainment from "../public/assets/images/Actual Photos & 3D/entertainment.jpg"
import gifts from "../public/assets/images/Actual Photos & 3D/gifts.jpg"
import useTranslation from "next-translate/useTranslation";
import { useState } from "react"



// width="712" height="226" layout="responsive"
// width={"520"} height={"226"} objectFit={"cover"} layout={"responsive"}

export default function Department(props) {

    const { t } = useTranslation("common");
    return (
        <>
            <div className={styles.DepartmentMaxWidth} dir={props.currentDir}>
                <h1>{t("departments")}</h1>
                <span>{t("departmentsDescription")}</span>
            </div>
            <div className={styles.GridTemplate} dir={props.currentDir}>
                <div className={styles.flexRowOne}>
                    <div className={styles.gym}>
                        <Image src={gym} objectFit={"cover"} layout="fill" />
                        <div className={styles.Onhover}>
                            <h3>{t("gymTitle")}</h3>
                            <p>{t("gymDescriptionOne")}</p>
                            <p>{t("gymDescriptionTwo")}</p>
                        </div>
                    </div>
                    <div className={styles.restaurants}>
                        <Image className={styles.scale} src={restaurants} objectFit={"cover"} layout="fill" />
                        <div className={styles.Onhover}>
                            <h3>{t("restaurantsTitle")}</h3>
                            <p>{t("restaurantsDescription")}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.flexRowTwo}>
                    <div className={styles.pharmacy}>
                        <Image className={styles.scale} src={pharma} objectFit={"cover"} layout="fill" objectPosition={"bottom"} />
                        <div className={styles.Onhover}>
                            <h3>{t("pharmacyTitle")}</h3>
                            <p>{t("pharmacyDescription")}</p>
                        </div>
                    </div>
                    <div className={styles.shoping}>
                        <Image className={styles.scale} src={shoping} objectFit={"cover"} layout="fill" />
                        <div className={styles.Onhover}>
                            <h3>{t("shopingTitle")}</h3>
                            <p>{t("shopingDescription")}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.flexRowThree}>
                    <div className={styles.entertainment}>
                        <Image className={styles.scale} src={entertainment} objectFit={"cover"} layout="fill" />
                        <div className={styles.Onhover}>
                            <h3>{t("entertainmentTitle")}</h3>
                            <p>{t("entertainmentDescription")}</p>
                        </div>
                    </div>
                    <div className={styles.gifts}>
                        <Image className={styles.scale} src={gifts} objectFit={"cover"} layout="fill" />
                        <div className={styles.Onhover}>
                            <h3>{t("giftsTitle")}</h3>
                            <p>{t("giftsDescription")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}