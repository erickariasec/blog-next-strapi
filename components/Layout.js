import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Blog - Home</title>
            </Head>
            <Header></Header>
            { children }
            <Footer></Footer>
        </div>
    )
}

export default Layout;