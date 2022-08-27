import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/scss/index.module.scss'
import {client} from '@/pages/api/client'
import dayjs from 'dayjs'
import {BreadcrumbList} from 'schema-dts'
import {JsonLd} from 'react-schemaorg'

export default function ArchiveId({blog, author}: BlogQuery) {
  const PageArchiveTitle = 'カテゴリ'
  const MetaDescription = `関根の憂鬱カテゴリページ`
  return (
    <>
      <Head>
        <title>{`${PageArchiveTitle} | ${author.seoTitle}`}</title>
        <meta name='description' content={MetaDescription} />
        <meta property='og:title' content={`${PageArchiveTitle} | ${author.seoTitle}`} />
        <meta property='og:description' content={MetaDescription} />
        <meta property='og:image' content={author.seoImage.url} />
        <meta property='og:type' content='blog' />
        <meta property='og:url' content={author.seoUrl} />
        <meta property='og:site_name' content={author.seoTitle} />
        <meta name='twitter:title' content={`${PageArchiveTitle} | ${author.seoTitle}`} />
        <meta name='twitter:description' content={MetaDescription} />
        <meta name='twitter:image' content={author.seoImage.url} />
        <meta name='robots' content='noindex, nofollow' />
        <link rel='canonical' href={author.seoUrl} />
        <link rel='icon' href={author.seoFavicon.url} />
      </Head>
      <section className={styles.blogArchive}>
        <ul className={styles.breadcrumbs}>
          <li className={styles.breadcrumbsLink}>
            <Link href='/'>
              <a>Top</a>
            </Link>
          </li>
          <li className={styles.breadcrumbsGt}>&gt;</li>
          <li className={styles.breadcrumbsLink}>カテゴリ</li>
        </ul>
        <div className={styles.inner}>
          <h1 className={styles.blogArchiveH1}>カテゴリ</h1>
          {blog.map((blog) => (
            <article key={blog.id} className={styles.blogArticle}>
              <div className={styles.blogArticleInner}>
                <h3 className={styles.blogArticleTitle}>{blog.title}</h3>
                <p className={styles.blogArticleDays}>
                  <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-calendar-time' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4'></path>
                    <circle cx='18' cy='18' r='4'></circle>
                    <path d='M15 3v4'></path>
                    <path d='M7 3v4'></path>
                    <path d='M3 11h16'></path>
                    <path d='M18 16.496v1.504l1 1'></path>
                  </svg>
                  {dayjs(blog.publishedAt).format('YYYY/MM/DD')}
                </p>

                <div className={styles.blogArticleCategory}>
                  <Link href={`/category/${blog.category.id}`}>
                    <a>
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
                </div>

                <p className={styles.blogArticleDescription}>{blog.description}</p>
                <Link href={`/author`}>
                  <a className={styles.blogArticleAuthor}>
                    <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-user' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                      <circle cx='12' cy='7' r='4'></circle>
                      <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2'></path>
                    </svg>
                    {author.name}
                  </a>
                </Link>

                <Link href={`/blog/${blog.id}`}>
                  <a className={styles.blogArticleNext}>
                    <span>つづき</span>
                  </a>
                </Link>
              </div>
            </article>
          ))}
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
              name: 'カテゴリ',
            },
          ],
        }}
      />
    </>
  )
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const data = await client.get({endpoint: 'category'})
  const paths = data.contents.map((content: {id: string}) => `/category/${content.id}`)
  return {
    paths,
    fallback: false,
  }
}

// データを取得
export const getStaticProps = async (context: {params: {id: string}}) => {
  const id = context.params.id
  const limit = 100
  const filters = `category[equals]${id}`
  const queries = {limit: limit, filters: filters, fields: 'id,title,description,content,publishedAt,category'}
  const datas = await client.get({endpoint: 'blog', queries: queries})
  const getAuthor = {fields: 'name,seoUrl,seoTitle,seoFavicon,seoImage'}
  const author = await client.get({endpoint: 'author', queries: getAuthor})
  return {
    props: {
      blog: datas.contents,
      author: author,
    },
  }
}
