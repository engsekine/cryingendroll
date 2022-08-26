interface Blog {
  blog: {
    id?: null | undefined
    title?: string
    publishedAt?: string
    content?: string
    description?: string
    date?: string
    totalCount: number
    eyecatch: {
      url?: string
      height?: number
    }
    youtube: string
    category: {
      id?: string
      name?: string
    }
  }
  prevEntry: {
    id?: string
    title?: string
  }
  nextEntry: {
    id?: string
    title?: string
  }
  author: {
    toph1: ReactNode
    scrollText: ReactNode
    profile: string
    comment: string
    seoTitle?: string
    seoUrl?: string
    seoDescription?: string
    seoTitle: string
    seoImage: {
      url?: string
    }
    seoFavicon: {
      url?: string
    }
  }
  jsonLd?: string
}

interface BlogQuery {
  blog: {
    map(
      arg0: (blog: {
        id?: null | undefined
        title?: string
        publishedAt?: string
        content?: string
        description?: string
        date?: string
        eyecatch: {
          url?: string
          height?: number
        }
        category: {
          id?: string
          name?: string
        }
      }) => JSX.Element,
    ): import('react').ReactNode
  }
  totalCount: number
  title?: string
  author: {
    toph1: ReactNode
    scrollText: ReactNode
    profile: string
    comment: string
    seoTitle?: string
    seoUrl?: string
    seoDescription?: string
    seoTitle: string
    seoImage: {
      url?: string
    }
    seoFavicon: {
      url?: string
    }
  }
  jsonLd?: string
}

interface Author {
  author: {
    concert: {
      map(arg0: (concert: {venue?: string; liveName?: string; date?: string; id: Key | null | undefined}) => JSX.Element): import('react').ReactNode
    }
    profile: string
    comment: string
    seoTitle?: string
    seoUrl?: string
    seoDescription?: string
    seoTitle: string
    seoImage: {
      url?: string
    }
    seoFavicon: {
      url?: string
    }
  }
  jsonLd?: string
}

interface Pagination {
  totalCount: number
  maxPageNumber?: number
  currentPageNumber?: number
}

interface Entry {
  title: string
  description?: string
  id?: string
  publishedAt?: string
  updatedAt?: string
  body?: Body[]
  image?: ImageInfo
  thumbnail?: ImageInfo
  categories?: Category[]
  tags?: Tag[]
}
interface EntriesApi extends ListApi {
  contents: Entry[]
}
