import styles from '@/styles/scss/index.module.scss'
import {useLoading} from '@/hooks/index'

export function Loading() {
  const [isShowLoading] = useLoading()
  const loadColor = '#a478c9'
  const loadSize = 200
  return (
    <div id={styles.loading} data-is-show={isShowLoading}>
      <svg width={loadSize} height={loadSize} viewBox='0 0 38 38' xmlns='http://www.w3.org/2000/svg' aria-label='tail-spin-loading' data-testid='tail-spin-svg'>
        <defs>
          <linearGradient x1='8.042%' y1='0%' x2='65.682%' y2='23.865%' id='a'>
            <stop stopColor={loadColor} stopOpacity='0' offset='0%'></stop>
            <stop stopColor={loadColor} stopOpacity='.631' offset='63.146%'></stop>
            <stop stopColor={loadColor} offset='100%'></stop>
          </linearGradient>
        </defs>
        <g fill='none' fillRule='evenodd'>
          <g transform='translate(1 1)'>
            <path d='M36 18c0-9.94-8.06-18-18-18' id='Oval-2' stroke={loadColor} strokeWidth='2'>
              <animateTransform attributeName='transform' type='rotate' from='0 18 18' to='360 18 18' dur='0.9s' repeatCount='indefinite'></animateTransform>
            </path>
            <circle fill='#fff' cx='36' cy='18' r='1'>
              <animateTransform attributeName='transform' type='rotate' from='0 18 18' to='360 18 18' dur='0.9s' repeatCount='indefinite'></animateTransform>
            </circle>
          </g>
        </g>
      </svg>
    </div>
  )
}
