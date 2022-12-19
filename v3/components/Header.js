import styles from "../styles/Header.module.css"
import {useState} from "react";
import ExportedImage from "next-image-export-optimizer";

export default function Header() {
    const [navBarActive, setActive] = useState(false);
    const toggleNavBar = () => {
        setActive(!navBarActive)
    }

    return (
        <div className={styles.headerContainer}>
            <div className={styles.messageBanner}>
                <p className={styles.bannerText}>As one story ends, another begins. <a href={"soon-to-come"}><strong>Get
                    ready
                    for the 4th
                    generation</strong></a>.</p>
            </div>
            <div className={styles.navBarWrapper}>
                <div className={styles.navBar}>
                    <div className={styles.left}>
                        <a href={"https://futureblur.com"} style={{display: "flex"}}>
                            <div className={styles.logo}>
                                <Logo/>
                            </div>
                            <div className={styles.logoIcon}>
                                <LogoIcon/>
                            </div>
                        </a>
                    </div>
                    <NavBarRight navBarActive={navBarActive} toggleNavBar={toggleNavBar}/>
                </div>
            </div>
        </div>
    )
}

function NavBarRight({navBarActive, toggleNavBar}) {
    return (
        <>
            {
                navBarActive ?
                    <div className={styles.burgerActive} onClick={toggleNavBar}/> :
                    <div className={styles.burger} onClick={toggleNavBar}/>
            }
            {
                navBarActive ?
                    <div className={styles.rightActive}>
                        <NavBarLinks/>
                    </div> :
                    <div className={styles.right}>
                        <NavBarLinks/>
                    </div>
            }
        </>
    )
}

function NavBarLinks() {
    return (
        <>
            <a className={styles.navLink} href={"https://instagram.com/byfutureblur"}>Virtual
                Gallery</a>
            <a className={styles.navLink} href={"https://futureblur.com/github"}>Open Source</a>
            <a className={styles.navLink} href={"https://futureblur.com/contact"}>Contact</a>
        </>
    )
}

function Logo() {
    return (
        <ExportedImage src={"../images/Futureblur_Logo_White.svg"} alt={"Futureblur Logo"}
                       layout={"fixed"} width={188} height={30}/>
    )
}

function LogoIcon() {
    return (
        <ExportedImage src={"../images/Futureblur_Icon_White.svg"} alt={"Futureblur Logo"}
                       layout={"fixed"} width={64} height={30}/>
    )
}
