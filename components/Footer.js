import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.flexFooter}`}>
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
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </footer>
    );
};

export default Footer;