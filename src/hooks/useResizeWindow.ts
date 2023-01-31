import { useEffect, useState } from 'react'

const useResizeWindow = () => {
  const [width, setWidth] = useState(window.innerWidth)
  function handleReSize() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleReSize)

    return () => window.removeEventListener('resize', handleReSize)
  }, [])

  return { innerWidth: width }
}

export default useResizeWindow
