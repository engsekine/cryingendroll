import Head from 'next/head'
import Link from 'next/link'
import {client} from '@/pages/api/client'
import dayjs from 'dayjs'
import styles from '@/styles/scss/index.module.scss'

import {useLoading} from '@/hooks/index'
export default function Home({blog, author}: BlogQuery) {
  const [isShowLoading] = useLoading()
  return (
    <>
      <Head>
        <title>{author.seoTitle}</title>
        <meta name='description' content={author.seoDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={author.seoTitle} />
        <meta property='og:description' content={author.seoDescription} />
        <meta property='og:image' content={author.seoImage.url} />
        <meta property='og:url' content={author.seoUrl} />
        <meta property='og:site_name' content={author.seoTitle} />
        <meta name='twitter:title' content={author.seoTitle} />
        <meta name='twitter:description' content={author.seoDescription} />
        <meta name='twitter:image' content={author.seoImage.url} />
        <link rel='canonical' href={author.seoUrl} />
        <link rel='icon' href={author.seoFavicon.url} />
      </Head>

      <section id={styles.frontFv} className={styles.frontFv} data-is-show={isShowLoading}>
        <div className={styles.frontFvInner}>
          <h1 className={styles.frontFvH1} dangerouslySetInnerHTML={{__html: author.toph1}} />
        </div>
      </section>

      <h2 className={styles.ledText}>
        <span>{author.scrollText}</span>
      </h2>
      <section id={styles.frontBlog} className={styles.frontBlog}>
        <div className={styles.inner}>
          <h2 className={styles.frontBlogH2}>最新記事</h2>
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

                <Link href={`/category/${blog.category.id}`}>
                  <a className={styles.blogArticleCategory}>
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

                <p className={styles.blogArticleDescription}>{blog.description}</p>
                <Link href={`/author`}>
                  <a className={styles.blogArticleAuthor}>
                    <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-user' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                      <circle cx='12' cy='7' r='4'></circle>
                      <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2'></path>
                    </svg>
                    関根
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
          <Link href={`/archive/1`}>
            <a className={styles.button01}>
              <span>アーカイブはこちら</span>
            </a>
          </Link>
        </div>
      </section>
      <section id={styles.frontAuthor} className={styles.frontAuthor}>
        <div className={styles.inner}>
          <div className={styles.frontAuthorBox}>
            <h2 className={styles.frontAuthorH2}>著者について</h2>
            <div className={styles.microCMSRichEditor} dangerouslySetInnerHTML={{__html: author.profile}} />

            <Link href={`/author`}>
              <a className={styles.button01}>
                <span>もっと詳しく</span>
              </a>
            </Link>
          </div>
          <div className={styles.frontAuthorBox}>
            <h2 className={styles.frontAuthorH2}>コメント</h2>
            <p>{author.comment}</p>
          </div>
        </div>
      </section>
    </>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const limit = 7
  const queries = {fields: 'id,title,description,content,publishedAt,category', limit: limit}
  const data = await client.get({endpoint: 'blog', queries: queries})
  const author = await client.get({endpoint: 'author'})
  return {
    props: {
      blog: data.contents,
      author: author,
    },
  }
}
