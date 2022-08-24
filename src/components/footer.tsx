import Link from 'next/link'
import dayjs from 'dayjs'
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
      <p className={styles.footerCopyright}>Copyright © {dayjs().format('YYYY')} DAICHI SEKINE All Rights Reserved.</p>
    </footer>
  )
}
