import Head from 'next/head'
import styles from '@/styles/scss/index.module.scss'
import {client} from '@/pages/api/client'

export default function Custom404({author}: Author) {
  const PageTitle = '404 Page Not Found'
  const MetaDescription = `404 Page Not Found お探しの情報が見つかりません`
  return (
    <>
      <Head>
        <title>{`${PageTitle} | ${author.seoTitle}`}</title>
        <meta name='description' content={MetaDescription} />
        <meta property='og:title' content={`${PageTitle} | ${author.seoTitle}`} />
        <meta property='og:description' content={MetaDescription} />
        <meta property='og:image' content={author.seoImage.url} />
        <meta property='og:url' content={author.seoUrl} />
        <meta property='og:site_name' content={author.seoTitle} />
        <meta name='twitter:title' content={`${PageTitle} | ${author.seoTitle}`} />
        <meta name='twitter:description' content={MetaDescription} />
        <meta name='twitter:image' content={author.seoImage.url} />
        <meta name='robots' content='noindex, nofollow' />
        <link rel='canonical' href={author.seoUrl} />
        <link rel='icon' href={author.seoFavicon.url} />
      </Head>

      <section className={styles.NotFound}>
        <div className={styles.inner}>
          <h1 className={styles.NotFoundH1}>
            404 Page Not Found <br />
            お探しの情報が見つかりません
          </h1>
        </div>
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  const getAuthor = {fields: 'seoUrl,seoTitle,seoFavicon,seoImage'}
  const author = await client.get({endpoint: 'author', queries: getAuthor})
  return {
    props: {
      author: author,
    },
  }
}
