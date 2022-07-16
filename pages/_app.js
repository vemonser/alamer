import '../styles/globals.css'
import { useRouter } from 'next/router'

import Navbar from '/components/layout/navbar';

import Footer from '../components/layout/footer';

function MyApp({ Component, pageProps }) {

  const { locale } = useRouter()

  const currentDir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <>
      <Navbar currentDir={currentDir} />
      <Component {...pageProps} />
      <Footer currentDir={currentDir} />
    </>
  )
}

export default MyApp
