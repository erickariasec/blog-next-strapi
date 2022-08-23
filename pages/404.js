import Layout from "../components/layout";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
    return (
        <Layout namePage="Not Found" titleHero="404">
            <div className={`container ${styles.notFound}`}>
                <h1>Not Found Page</h1>
            </div>
        </Layout>
    )
}

export default NotFound;