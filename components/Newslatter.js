// import useTranslation from "next-translate/useTranslation";
// import styles from "../styles/newslatter.module.scss"
// import { useState } from "react";
// import axios from 'axios';

// export default function Newslatter(props) {
//     const [email, setEmail] = useState('')
//     const [state, setState] = useState('')
//     const [errorMsg, setErrorMsg] = useState(null)
//     const { t } = useTranslation("common");


//     const handleNewsletterEmails = (e) => {
//         e.preventDefault()
//         setState('Loading')

//         try {
//             const response = await axios.post('/api/subscribe', { email })
//             console.log(response)
//             setState('Success')
//             setEmail('')
//         } catch (e) {
//             console.log(e.response.data.error)
//             setErrorMsg(e.response.data.error)
//             setState('Error')
//         }

//     }
//     return (
//         <div className={styles.MaxWidth}>
//             <div className={styles.dflex} dir={props.currentDir}>
//                 <h3>{t("NewslatterTitle")}</h3>
//                 <input required type={"email"} placeholder={t("NewslatterplaceHolder")} id={"email"} value={email}
//                     onChange={(e) => setEmail(e.target.value)} />
//                 <button className={styles.submitBtn} type="submit" disabled={state === 'Loading'} onClick={handleNewsletterEmails}>
//                     {t("NewslatterSubscription")}</button>
//             </div>
//         </div>
//     )
// }





