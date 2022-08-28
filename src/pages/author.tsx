import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/scss/index.module.scss'
import {client} from '@/pages/api/client'
import dayjs from 'dayjs'
import {BreadcrumbList} from 'schema-dts'
import {JsonLd} from 'react-schemaorg'

export default function About({author}: Author) {
  const AuthorTitle = '著者について'
  const AuthorDescription = author.comment
  return (
    <>
      <Head>
        <title>{`${AuthorTitle} | ${author.seoTitle}`}</title>
        <meta name='description' content={AuthorDescription} />
        <meta property='og:title' content={`${AuthorTitle} | ${author.seoTitle}`} />
        <meta property='og:description' content={AuthorDescription} />
        <meta property='og:image' content={author.seoImage.url} />
        <meta property='og:type' content='blog' />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_URL} />
        <meta property='og:site_name' content={author.seoTitle} />
        <meta name='twitter:title' content={`${AuthorTitle} | ${author.seoTitle}`} />
        <meta name='twitter:description' content={AuthorDescription} />
        <meta name='twitter:image' content={author.seoImage.url} />
        <link rel='canonical' href={process.env.NEXT_PUBLIC_URL} />
        <link rel='icon' href={author.seoFavicon.url} />
      </Head>
      <section id={styles.Author} className={styles.Author}>
        <ul className={styles.breadcrumbs}>
          <li className={styles.breadcrumbsLink}>
            <Link href='/'>
              <a>Top</a>
            </Link>
          </li>
          <li className={styles.breadcrumbsGt}>&gt;</li>
          <li className={styles.breadcrumbsLink}>著者について</li>
        </ul>
        <div className={styles.inner}>
          <div className={styles.AuthorBox}>
            <h2 className={styles.AuthorH2}>著者について</h2>
            <div dangerouslySetInnerHTML={{__html: author.profile}} />
          </div>
          <div className={styles.AuthorMusic}>
            <h2 className={styles.AuthorH2}>プレイリスト</h2>
            <iframe allow='autoplay *; encrypted-media *; fullscreen *; clipboard-write' src='https://embed.music.apple.com/jp/playlist/%E3%81%8A%E3%81%99%E3%81%99%E3%82%81/pl.u-NpXmzkmt4Dgb9Yd'></iframe>
          </div>
          <div className={styles.AuthorLive}>
            <h2 className={styles.AuthorH2}>ライブ参加</h2>
            {author?.concert?.map((concert) => (
              <ul className={styles.AuthorLiveUl} key={concert.liveName}>
                <li className={styles.AuthorLiveDay}>{dayjs(concert.date).format('YYYY/MM/DD')}</li>
                <li className={styles.AuthorLiveDetails}>
                  {concert.venue}
                  <br />
                  {concert.liveName}
                </li>
              </ul>
            ))}
          </div>
          <div className={styles.AuthorBox}>
            <h2 className={styles.AuthorH2}>コメント</h2>
            <p>{author.comment}</p>
          </div>
        </div>
      </section>
      <JsonLd<BreadcrumbList>
        item={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: `${author.seoTitle}`,
              item: `${process.env.NEXT_PUBLIC_URL}`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: '著者について',
            },
          ],
        }}
      />
    </>
  )
}
export const getStaticProps = async () => {
  const getAuthor = {fields: 'profile,comment,music,concert,seoTitle,seoFavicon,seoImage,scrollText'}
  const author = await client.get({endpoint: 'author', queries: getAuthor})
  return {
    props: {
      author: author,
    },
  }
}
