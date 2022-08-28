import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/scss/index.module.scss'
import {Mail} from '@/components/index'
import {client} from '@/pages/api/client'

export default function Contact({author}: Author) {
  const ContactTitle = 'お問合わせページ'
  const ContactDescription = `お問合わせページ`
  return (
    <>
      <Head>
        <title>{`${ContactTitle} | ${author.seoTitle}`}</title>
        <meta name='description' content={ContactDescription} />
        <meta property='og:title' content={`${ContactTitle} | ${author.seoTitle}`} />
        <meta property='og:description' content={ContactDescription} />
        <meta property='og:type' content='blog' />
        <meta property='og:image' content={author.seoImage.url} />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_URL} />
        <meta property='og:site_name' content={author.seoTitle} />
        <meta name='twitter:title' content={`${ContactTitle} | ${author.seoTitle}`} />
        <meta name='twitter:description' content={ContactDescription} />
        <meta name='twitter:image' content={author.seoImage.url} />
        <meta name='robots' content='noindex, nofollow' />
        <link rel='canonical' href={process.env.NEXT_PUBLIC_URL} />
        <link rel='icon' href={author.seoFavicon.url} />
      </Head>
      <section id={styles.contact} className={styles.contact}>
        <ul className={styles.breadcrumbs}>
          <li className={styles.breadcrumbsLink}>
            <Link href='/'>
              <a>Top</a>
            </Link>
          </li>
          <li className={styles.breadcrumbsGt}>&gt;</li>
          <li className={styles.breadcrumbsLink}>お問合わせページ</li>
        </ul>
        <div className={styles.inner}>
          <h1 className={styles.contactH1}>お問合わせページ</h1>
          <Mail />
        </div>
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  const getAuthor = {fields: 'seoTitle,seoFavicon,seoImage'}
  const author = await client.get({endpoint: 'author', queries: getAuthor})
  return {
    props: {
      author: author,
    },
  }
}
