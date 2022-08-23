import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className={styles.container}>
          <Layout>
              <h2>Home Page</h2>
          </Layout>
      </div>
  );
}
