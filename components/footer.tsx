import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer + " fixed bottom-0 left-0 w-full"}>
      <a
        href="https://www.cbr.exchange/">
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/cbrex_logo.png" alt="cbrex logo" width={72} height={25} />
        </span>
      </a>
    </footer>

  )
}