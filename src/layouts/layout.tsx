import {ReactElement} from 'react'
import {Header, Footer, Loading} from '../components/index'
type LayoutProps = Required<{
  readonly children: ReactElement
}>

export const Layout = ({children}: LayoutProps) => (
  <>
    <Loading />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)
