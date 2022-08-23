import Layout from "../../components/layout";
import Image from "next/image";
import { formatDate } from "../../Helpers";
import styles from "../../styles/Single.module.css";

const Single = ({ single }) => {
    const { title, content, image, createdAt } = single[0];
    // console.log(single);
    return (
        <Layout namePage={title} titleHero={title} isSingle="titleHero">
            <div className={styles.singlePost}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${image[0].url}`}
                    width={800}
                    height={400}
                    alt={title}
                />
                <p>{formatDate(createdAt)}</p>
                <p>{content}</p>
            </div>
        </Layout>
    );
};

export default Single;

export async function getServerSideProps({ query }) {
    const { url } = query;
    // Generating API call
    const urlAPI = `${process.env.API_URL_ENV}/blogs?url=${url}`; // Get all blog posts
    const response = await fetch(urlAPI);
    const responseJSON = await response.json();
    console.log(responseJSON); // Show in server console, not frontend (web browser)

    return {
        props: {
            single: responseJSON,
        },
    };
}
