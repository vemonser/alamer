import styles from "../styles/OurNew.module.scss"
import useTranslation from "next-translate/useTranslation";
import data from "../locales/ar/OurNew"
import Image from "next/image";

 
export default function OurNew(props) {
    const { t } = useTranslation("common");
    return (
        <div className={styles.background}>     
        <div className={styles.MaxWidth}  dir={props.currentDir}>
                <h1 className={styles.sectionTitle}>{t("ourNew")}</h1>
                <span className={styles.sectionDescription}>{t("ourNewDescription")}</span>
            <div className={styles.dflex}>
                {data && data.map((card) => {
                     return (
                        < div className={styles.CardContainer} key={card.id}>
                                < div className={styles.imageContainer}>
                                    <Image src={`${card.CardImage}`} className={styles.img} layout={"fill"} objectFit={"cover"}/>
                                    <span className={styles.date}>{card.CardDate}</span>
                                </div>
                                <div className={styles.cardDescription}>
                                    <h2>{card.CardTitle}</h2>
                                    <p>{card.CardDescriptionP1}</p>
                                    <p>{card.CardDescriptionP2}</p>
                                </div>
                        </div>
                    )
                })}
            </div >
                </div>
        </div >
    )
}


// export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch('https://.../posts')
//     const posts = await res.json()
  
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts,
//       },
//     }
//   }
  