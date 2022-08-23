import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, namePage, titleHero }) => {
    return (
        <div>
            <Head>
                <title>Blog - { namePage }</title>
            </Head>
            <Header titleHero={titleHero}></Header>
            { children }
            <Footer></Footer>
        </div>
    )
}

export default Layout;