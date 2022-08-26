import Link from 'next/link'
import styles from '@/styles/scss/index.module.scss'
import Image from 'next/image'
export function SNS() {
  return (
    <ul className={styles.sns}>
      <li>
        <Link href={`${process.env.NEXT_PUBLIC_FACEBOOK}`}>
          <a target='_blank' rel='noopener'>
            <Image src='/icon/facebook_w.svg' width='100%' height='auto' alt='facebook' />
          </a>
        </Link>
      </li>
      <li>
        <Link href={`${process.env.NEXT_PUBLIC_INSTAGRAM}`}>
          <a target='_blank' rel='noopener'>
            <Image src='/icon/instagram_w.svg' width='100%' height='auto' alt='instagram' />
          </a>
        </Link>
      </li>
      <li>
        <Link href={`${process.env.NEXT_PUBLIC_TWITTER}`}>
          <a target='_blank' rel='noopener'>
            <Image src='/icon/twitter_w.svg' width='100%' height='auto' alt='twitter' />
          </a>
        </Link>
      </li>
    </ul>
  )
}
