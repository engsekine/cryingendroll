import Link from 'next/link'

export function Navgation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a>
                <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-home-2' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <polyline points='5 12 3 12 12 3 21 12 19 12'></polyline>
                  <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7'></path>
                  <rect x='10' y='12' width='4' height='4'></rect>
                </svg>
                Top
              </a>
            </Link>
          </li>
          <li>
            <Link href='/author'>
              <a>
                <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-user' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <circle cx='12' cy='7' r='4'></circle>
                  <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2'></path>
                </svg>
                Author
              </a>
            </Link>
          </li>
          <li>
            <Link href='/archive/1'>
              <a>
                <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-archive' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <rect x='3' y='4' width='18' height='4' rx='2'></rect>
                  <path d='M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10'></path>
                  <line x1='10' y1='12' x2='14' y2='12'></line>
                </svg>
                Archive
              </a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>
                <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-mail' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <rect x='3' y='5' width='18' height='14' rx='2'></rect>
                  <polyline points='3 7 12 13 21 7'></polyline>
                </svg>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
