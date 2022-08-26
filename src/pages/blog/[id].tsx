import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import {client} from '@/pages/api/client'
import styles from '@/styles/scss/index.module.scss'

export default function ArchiveId({blog, prevEntry, nextEntry, author}: Blog) {
  const Date = dayjs(blog.publishedAt).format('YYYY/MM/DD')

  return (
    <>
      <Head>
        <title>{`${blog.title} | ${author.seoTitle}`}</title>
        <meta name='description' content={blog.description} />
        <meta property='og:title' content={`${blog.title} | ${author.seoTitle}`} />
        <meta property='og:description' content={blog.description} />
        <meta property='og:type' content='article' />
        <meta property='og:image' content={blog.eyecatch.url} />
        <meta property='og:url' content={author.seoUrl} />
        <meta property='og:site_name' content={author.seoTitle} />
        <meta name='twitter:title' content={`${blog.title} | ${author.seoTitle}`} />
        <meta name='twitter:description' content={blog.description} />
        <meta name='twitter:image' content={blog.eyecatch.url} />
        <link rel='canonical' href={author.seoUrl} />
        <link rel='icon' href={author.seoFavicon.url} />
      </Head>
      <article id={styles.blog} className={styles.blog}>
        <div className={styles.inner}>
          <ul className={styles.breadcrumbs}>
            <li className={styles.breadcrumbsLink}>
              <Link href='/'>
                <a>Top</a>
              </Link>
            </li>
            <li className={styles.breadcrumbsGt}>&gt;</li>
            <li className={styles.breadcrumbsLink}>
              <Link href='/archive/1/'>
                <a>{author.seoTitle}</a>
              </Link>
            </li>
            <li className={styles.breadcrumbsGt}>&gt;</li>
            <li className={styles.breadcrumbsLink}>{blog.title}</li>
          </ul>

          <p className={styles.blogDate}>{Date}</p>
          <Link href={`/category/${blog.category.id}`}>
            <a className={styles.blogCategory}>
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-checkup-list' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2'></path>
                <rect x='9' y='3' width='6' height='4' rx='2'></rect>
                <path d='M9 14h.01'></path>
                <path d='M9 17h.01'></path>
                <path d='M12 16l1 1l3 -3'></path>
              </svg>
              {blog.category.name}
            </a>
          </Link>
          <h1 className={styles.blogH1}>{blog.title}</h1>

          <div
            className={styles.microCMSRichEditor}
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
          />
          <p className={styles.blogName}>関根</p>

          {blog.youtube !== undefined ? (
            <a className={styles.blogYoutube} href={`https://www.youtube.com/watch?v=${blog.youtube}`} target='_blank' rel='noreferrer'>
              <Image src={`https://img.youtube.com/vi/${blog.youtube}/maxresdefault.jpg`} width={1200} height={630} alt='youtubeサムネイル' />
            </a>
          ) : (
            <Image src={`${blog.eyecatch.url}?fm=webp"` + ` type="image/webp`} width={1200} height={630} alt='youtubeサムネイル' />
          )}

          <div className={styles.nextPrev}>
            {prevEntry.id !== undefined && (
              <div className={styles.prev}>
                <Link href={`/blog/${prevEntry.id}`}>
                  <a>
                    前の記事<span>{prevEntry.title}</span>
                  </a>
                </Link>
              </div>
            )}
            {nextEntry.id !== undefined && (
              <div className={styles.next}>
                <Link href={`/blog/${nextEntry.id}`}>
                  <a>
                    次の記事<span>{nextEntry.title}</span>
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const limit = 1000
  const queries = {fields: 'id', limit: limit}
  const data = await client.get({endpoint: 'blog', queries: queries})
  const paths = data.contents.map((content: {id: string}) => `/blog/${content.id}`)
  return {paths, fallback: false}
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: {params: {id: string}}) => {
  const id = context.params.id
  const limit = 1
  const queries = {fields: 'id,title,description,content,publishedAt,eyecatch,youtube,category', limit: limit}
  const data = await client.get({endpoint: 'blog', contentId: id, queries: queries})
  const entry = await client.get<Entry>({endpoint: 'blog', contentId: id})
  const fields = 'id,title,publishedAt'
  const prev = await client.get<EntriesApi>({
    endpoint: 'blog',
    queries: {
      limit: 1,
      orders: '-publishedAt',
      fields,
      filters: `publishedAt[less_than]${entry.publishedAt}`,
    },
  })
  const next = await client.get<EntriesApi>({
    endpoint: 'blog',
    queries: {
      limit: 1,
      orders: 'publishedAt',
      fields,
      filters: `publishedAt[greater_than]${entry.publishedAt}`,
    },
  })
  const prevEntry = prev.contents[0] || {}
  const nextEntry = next.contents[0] || {}
  const getAuthor = {fields: 'seoUrl,seoTitle,seoFavicon,seoImage'}
  const author = await client.get({endpoint: 'author', queries: getAuthor})
  return {
    props: {
      blog: data,
      entry,
      prevEntry,
      nextEntry,
      author: author,
    },
  }
}
