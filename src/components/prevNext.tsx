import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from '@/styles/scss/index.module.scss'

export function PrevNext({totalCount}: Pagination) {
  const router = useRouter()
  const currentPageNumber = Number(router.query.id)
  const prevPage = Number(currentPageNumber - 1)
  const nextPage = Number(currentPageNumber + 1)
  const maxPage = totalCount

  return (
    <>
      <ul className={styles.archivePrevNext}>
        <li>
          <Link href={`/archive/1`}>
            <a>&lt;&lt;</a>
          </Link>
        </li>
        <li>
          {prevPage === 0 ? (
            <Link href={`/archive/1`}>
              <a>&lt;</a>
            </Link>
          ) : (
            <Link href={`/archive/${prevPage}`}>
              <a>&lt;</a>
            </Link>
          )}
        </li>

        <li>
          {currentPageNumber}/{maxPage}
        </li>

        <li>
          {currentPageNumber === maxPage ? (
            <Link href={`/archive/${maxPage}`}>
              <a>&gt;</a>
            </Link>
          ) : (
            <Link href={`/archive/${nextPage}`}>
              <a>&gt;</a>
            </Link>
          )}
        </li>
        <li>
          <Link href={`/archive/${maxPage}`}>
            <a>&gt;&gt;</a>
          </Link>
        </li>
      </ul>
    </>
  )
}
