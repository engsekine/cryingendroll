import Link from 'next/link'
import {Navgation} from '@/components/index'
import {useState} from 'react'
import styles from '@/styles/scss/index.module.scss'
export function Header() {
  const [onOff, openClose] = useState(false)
  const humburgerMenu = () => openClose((prevState) => !prevState)
  const humburgerMenuOpneClose = onOff ? 'open' : 'close'
  return (
    <>
      <header id={styles.header} className={styles.header}>
        <Link href='/'>
          <a className={styles.headerLogo}>Daichi is eccentric</a>
        </Link>
        <Navgation />
      </header>
      <div id={styles.humburgerMenu} data-toggle={humburgerMenuOpneClose}>
        <button className={styles.lines} onClick={humburgerMenu} aria-label='閉じる'>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={styles.menu} onClick={humburgerMenu}>
          <Navgation />
        </div>
      </div>
    </>
  )
}
