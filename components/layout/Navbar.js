import styles from "../../styles/navbar.module.scss"

import logo from "../../public/assets/images/Logos/logo.svg"
import Instagram from "../../public/assets/images/Logos/Instagram"
import Twitter from "../../public/assets/images/Logos/Twitter"
import Facebook from "../../public/assets/images/Logos/Facebook"

import Image from "next/image"
import Link from "next/link"
import useTranslation from "next-translate/useTranslation";
import { useState, useEffect, } from "react"
import { useRouter } from 'next/router';


export default function Navbar(props) {

    const { t } = useTranslation("common");
    const [clientWindowHeight, setClientWindowHeight] = useState("");
    const size = useWindowSize();



    const router = useRouter();
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const closeHamburger = () => { setHamburgerOpen(false); };
    const toggleHamburger = () => { setHamburgerOpen(!hamburgerOpen); }




    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    function useWindowSize() {

        const [windowSize, setWindowSize] = useState({ width: undefined });

        useEffect(() => {
            // only execute all the code below in client side
            if (typeof window !== 'undefined') {
                // Handler to call on window resize
                function handleResize() {
                    // Set window width to state
                    setWindowSize({
                        width: window.innerWidth,
                    });
                }

                // Add event listener
                window.addEventListener("resize", handleResize);

                // Call handler right away so state gets updated with initial window size
                handleResize();

                // Remove event listener on cleanup
                return () => window.removeEventListener("resize", handleResize);
            }
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
    }
    const currentWindowHeight = clientWindowHeight >= "275"

    const bgChecking = currentWindowHeight ? { color: "#3c2133" } : { color: "#fff" };
    const langCheckingAr = props.currentDir === 'rtl' ? { color: "#f37625" } : bgChecking;
    const langCheckingEn = props.currentDir === 'ltr' ? { color: "#f37625" } : bgChecking;

    const iconChangeColor = currentWindowHeight ? { stroke: "#3c2133", fill: "#3c2133" } : { stroke: "#fff", fill: "#fff" }
    const onMobile = size.width < "600" ? true : false;





    // humburger div ONCLICK 


    // structure 

    // export default function Menu(props) {
    //     return (<div className={props.hamburgerStatus ? styles.menuContainer : 'hidden'}>
    //         <nav className='bg-secondary text-white w-full max-w-[440px] mt-6 absolute'>
    //             <div className=""><div className='flex items-center rounded p-3 cursor-pointer transition-all'>
    //                 <Link href="/" onClick={props.hamburgerStatus = false}>
    //                     Home
    //                 </Link>
    //             </div>
    //                 <div className='flex items-center rounded p-3 cursor-pointer transition-all'>
    //                     <Link href="/contact">
    //                         Contact
    //                     </Link></div>
    //                 <div className='flex items-center rounded p-3 cursor-pointer transition-all'>
    //                     <Link href="/contact">Contact</Link>
    //                 </div>
    //             </div>
    //         </nav>
    //     </div>)
    // }




    // === === === === === === === === === onlink click nav Close






    useEffect(() => {
        router.events.on('routeChangeStart', closeHamburger);
        return () => router.events.off('routeChangeStart', closeHamburger);
    }, [router.events]);











    return (
        <nav className={`${styles.nav} ${currentWindowHeight ? styles.active : ""}`} >
            <div className={`${styles.mainNav} ${currentWindowHeight ? styles.mainNavActive : ""}`} dir={props.currentDir}>
                <div className={styles.navigation}>
                    <div className={styles.logo}>
                        <Image src={logo} width="100px" height="50px" />
                    </div>
                    <div className={`${styles.middleNav} ${hamburgerOpen ? styles.middleham : ""}`}>
                        <ul className={hamburgerOpen ? styles.shown : ""}><Link href={"/"}>
                            <li>{t("home")}</li>
                        </Link>
                            <Link href={"/"}>
                                <li>{t("department")}</li>
                            </Link>
                            <Link href={"/"}>
                                <li>{t("whoWeAre")}</li>
                            </Link>
                            <Link href={"/"}>
                                <li>{t("insideMaps")}</li>
                            </Link>
                            <Link href={"/"}>
                                <li>{t("contact")}</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className={styles.endNavbar}>
                    <div className={styles.lang}>
                        <ul className={styles.ul}>
                            <Link href="/" locale="ar">
                                <li style={langCheckingAr} > {t("ar")}</li>
                            </Link>
                            <span className={styles.middleLine} style={currentWindowHeight ? { background: "#3c2133" } : { background: "#fff" }} ></span>
                            <Link href="/" locale="en"   >
                                <li style={langCheckingEn} >{t("en")}</li>
                            </Link>
                        </ul>
                    </div>
                    <div className={styles.icons}>
                        <span className={styles.endnav}>
                            <a href="" >
                                <Instagram width={30} style={iconChangeColor} />
                            </a>

                        </span>
                        <span className={styles.endnav}>
                            <a href="" >
                                <Twitter width={30} style={iconChangeColor} /></a>
                        </span>
                        <span className={styles.endnav}>
                            <a href="" >
                                <Facebook width={30} style={iconChangeColor} /></a>
                        </span>
                    </div>
                </div>
            </div >

            <div className={styles.hamburgerMenu} onClick={toggleHamburger}>
                <span className={hamburgerOpen ? styles.close : styles.normal}></span>
                <span className={hamburgerOpen ? styles.close : styles.normal}></span>
                <span className={hamburgerOpen ? styles.close : styles.normal}></span>
            </div>
        </nav >
    )
}




















// const Logo = () => {
//     const [isHovering, setIsHovered] = useState(false);
//     const onMouseEnter = () => setIsHovered(true);
//     const onMouseLeave = () => setIsHovered(false);
//     return (
//       <div
//         className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
//         onMouseEnter={onMouseEnter}
//         onMouseLeave={onMouseLeave}
//       >
//         <MyLink href="/">
//           {isHovering ? (
//             <Image src="/logo4.png" width={88} height={77} alt="logo" />
//           ) : (
//             <Image src="/logo1.png" width={88} height={77} alt="logo" />
//           )}
//         </MyLink>
//       </div>
//     );
//   };
