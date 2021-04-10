import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Provider as NextAsProvider } from 'next-auth/client'

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAsProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAsProvider>
  )
}

export default MyApp
