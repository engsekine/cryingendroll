import Head from 'next/head'
import styles from '@/styles/scss/index.module.scss'
import {client} from '@/pages/api/client'

export default function Custom500({author}: Author) {
  const Error500Title = 'HTTP 500 Internal Server Error'
  const MetaDescription = `HTTP 500 Internal Server Error`
  return (
    <>
      <Head>
        <title>{`${Error500Title} | ${author.seoTitle}`}</title>
        <meta name='description' content={MetaDescription} />
        <meta property='og:title' content={`${Error500Title} | ${author.seoTitle}`} />
        <meta property='og:description' content={MetaDescription} />
        <meta property='og:image' content={author.seoImage.url} />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_URL} />
        <meta property='og:site_name' content={author.seoTitle} />
        <meta name='twitter:title' content={`${Error500Title} | ${author.seoTitle}`} />
        <meta name='twitter:description' content={MetaDescription} />
        <meta name='twitter:image' content={author.seoImage.url} />
        <meta name='robots' content='noindex, nofollow' />
        <link rel='canonical' href={process.env.NEXT_PUBLIC_URL} />
        <link rel='icon' href={author.seoFavicon.url} />
      </Head>

      <section className={styles.NotFound}>
        <div className={styles.inner}>
          <h1 className={styles.NotFoundH1}>HTTP 500 Internal Server Error</h1>
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
