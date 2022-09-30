import Head from 'next/head'
import styles from '@/styles/scss/index.module.scss'
import {client} from '@/pages/api/client'

export default function Custom500({author}: Author) {
  const ContactThanks = 'お問合わせありがとうございます'
  const MetaDescription = `お問合わせありがとうございます`
  return (
    <>
      <Head>
        <title>{`${ContactThanks} | ${author.seoTitle}`}</title>
        <meta name='description' content={MetaDescription} />
        <meta property='og:title' content={`${ContactThanks} | ${author.seoTitle}`} />
        <meta property='og:description' content={MetaDescription} />
        <meta property='og:image' content={author.seoImage.url} />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_URL} />
        <meta property='og:site_name' content={author.seoTitle} />
        <meta name='twitter:title' content={`${ContactThanks} | ${author.seoTitle}`} />
        <meta name='twitter:description' content={MetaDescription} />
        <meta name='twitter:image' content={author.seoImage.url} />
        <meta name='robots' content='noindex, nofollow' />
        <link rel='icon' href={author.seoFavicon.url} />
      </Head>

      <section className={styles.Thanks}>
        <div className={styles.inner}>
          <h1 className={styles.ThanksH1}>お問合わせありがとうございます</h1>
          <p>この度は、お問合わせありがとうございます</p>
          <p>メールを確認次第、折り返しご連絡させていただきます。</p>
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
