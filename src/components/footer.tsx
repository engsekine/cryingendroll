import styles from '@/styles/scss/index.module.scss'
import {Navgation, SNS} from '@/components/index'
export function Footer() {
  return (
    <footer id={styles.footer} className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.footerNav}>
          <Navgation />
        </div>
        <SNS />
      </div>
      <p className={styles.footerCopyright}>Copyright © 2022 DAICHI SEKINE All Rights Reserved.</p>
    </footer>
  )
}
