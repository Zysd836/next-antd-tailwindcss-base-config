import React from 'react'
import { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import '@styles/global.scss'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
