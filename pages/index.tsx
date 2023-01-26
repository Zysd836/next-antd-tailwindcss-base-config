import React from 'react'

import {
  Header, Main, Cards, Footer,
} from '@components'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-center m-h-[100vh]">
      <Header />
      <Main />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home
