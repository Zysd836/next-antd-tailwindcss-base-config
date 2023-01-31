import { Button } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import Layouts from '@/layouts'

const Home = () => {
  const router = useRouter()
  return (
    <Layouts.Container>
      <Button className="text-red-600" onClick={() => router.push('/news')}>News</Button>
      <Button onClick={() => router.push('/abc/10')}>detail</Button>
    </Layouts.Container>
  )
}

export default Home
