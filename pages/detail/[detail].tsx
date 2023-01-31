import { useRouter } from 'next/router'
import React from 'react'

const Detail = () => {
  const router = useRouter()
  const { detail } = router.query
  return (
    <div>{detail}</div>
  )
}

export default Detail
