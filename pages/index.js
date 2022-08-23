import Head from 'next/head'
import Image from 'next/image'
import CardPost from '../components/CardPost';
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
    console.log(posts); // Show in browser console (frontend)

    return (
        <div className={styles.container}>
            <Layout namePage="Home" titleHero="Blog Page">
                <div className='container'>
                    {
                        posts.map(item => (
                            <CardPost
                                key = {item._id}
                                id = {item._id}
                                title = {item.title}
                                image = {item.image[0].formats.small.url}
                                description = {item.description}
                            />
                        ))
                    }
                </div>
            </Layout>
        </div>
    );
}

export async function getServerSideProps() {
    // Generating API call
    const urlAPI = "http://localhost:1337/blogs"; // Get all blog posts
    const response = await fetch(urlAPI);
    const responseJSON = await response.json();
    console.log(responseJSON); // Show in server console, not frontend (web browser)

    return {
        props: {
            posts: responseJSON
        }
    }
}