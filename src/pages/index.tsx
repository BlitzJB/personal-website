import NewsletterCTA from '@components/NewsletterCTA'
import Topics from '@components/Topics'
import Contact from '@components/Contact'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (<>
  <Head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  </Head>
    <div className={styles.maincontent}>
      <NewsletterCTA/>
      <Topics/>
      <Contact/>
    </div>
  </>)
}
