import {useEffect, useState} from 'react'

export const useLoading = () => {
  const [isShowLoading, setIsShowLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsShowLoading(true) // ローディング完了
    }, 1000)
  })
  return [isShowLoading]
}
