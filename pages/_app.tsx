import React from 'react'
import { AppProps } from 'next/app'
import 'antd/dist/reset.css'
import '@styles/global.scss'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { store } from '@/redux/store'
import { AuthProvider } from '@/context/AuthContext/AuthContext'

function MyApp({ Component, pageProps, router }: AppProps) {
  const { locale } = useRouter()
  const route = useRouter()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Base</title>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="language" content={locale} />
        <meta property="og:url" content="https:" key="ogurl" />
        <meta
          property="og:image"
          content="https://"
          key="ogimage"
        />
        <meta property="og:site_name" content="Trang chủ" key="ogsitename" />
        <meta
          property="og:title"
          content=""
          key="ogtitle"
        />
        <meta
          property="og:description"
          content=""
          key="ogdesc"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link
          rel="canonical"
          key="canonical"
          href={`https://${router?.asPath}`}
        />
      </Head>
      <Provider store={store}>
        <AuthProvider>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#4E8808',
              },
              components: {
                Input: {
                  colorTextPlaceholder: '#808080',
                },
              },
            }}
          >
            <Component key={route.asPath} {...pageProps} />
          </ConfigProvider>
        </AuthProvider>
      </Provider>
    </>
  )
}

export default appWithTranslation(MyApp)
