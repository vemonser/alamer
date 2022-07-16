import Image from "next/image"
import styles from "../styles/hero.module.scss"
import heroImg from "../public/assets/images/Actual Photos & 3D/hero img.jpg"
export default function Hero() {
    return (<div className={styles.heroContainer}>
    <Image src={heroImg}  className={styles.heroContainer2} objectFit="cover" layout="fill"/>
    </div>
    )
}