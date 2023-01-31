import React from 'react'

type Props = {
  children?: unknown
}
const Main: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div>header</div>
      {children}
      <div>footer</div>
    </>
  )
}

export default Main
