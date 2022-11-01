import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main className="mx-auto pb-10 mt-5 flex justify-items-center w-4/5 ml-64">
        <Image src="/home.png" alt="home_img" height={400} width={750} />
      </main>
      
      <Footer />
    </div>
  )
}
