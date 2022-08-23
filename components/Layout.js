import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Blog - Home</title>
            </Head>
            <Header></Header>
            { children }
        </div>
    )
}

export default Layout;