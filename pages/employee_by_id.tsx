import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:8080/api/employees');
  const data = await res.json()
  return {
      props: {
          data: data
      }
  };
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main className="hero container max-w-screen-lg mx-auto pb-10 mt-5">
       <h1>employee_by_id</h1>
      </main>
      
      <Footer />
    </div>
  )
}