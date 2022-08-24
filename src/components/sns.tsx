import Link from 'next/link'
import styles from '@/styles/scss/index.module.scss'
export function SNS() {
  return (
    <ul className={styles.sns}>
      <li>
        <Link href={`${process.env.NEXT_PUBLIC_FACEBOOK}`}>
          <a target='_blank' rel='noopener'>
            <img src='/icon/facebook_w.svg' />
          </a>
        </Link>
      </li>
      <li>
        <Link href={`${process.env.NEXT_PUBLIC_INSTAGRAM}`}>
          <a target='_blank' rel='noopener'>
            <img src='/icon/instagram_w.svg' />
          </a>
        </Link>
      </li>
      <li>
        <Link href={`${process.env.NEXT_PUBLIC_TWITTER}`}>
          <a target='_blank' rel='noopener'>
            <img src='/icon/twitter_w.svg' />
          </a>
        </Link>
      </li>
    </ul>
  )
}
