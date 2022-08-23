import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css"

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={`container ${styles.menuLogo}`}>
                <Link href="/">
                    <a>
                        <Image
                            src={require("/public/gettr-1.svg")}
                            width={170}
                            height={60}
                            alt="logo"
                        />
                    </a>
                </Link>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;