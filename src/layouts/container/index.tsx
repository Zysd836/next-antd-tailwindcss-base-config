import React, { ReactNode } from 'react'

import styles from './index.module.scss'

type PropsType = {
  children?: ReactNode
  fluid?: boolean
}

const Container: React.FC<PropsType> = ({ children, fluid = false }) => {
  return (
    <div className={`${fluid ? styles.containerFluid : styles.container}`}>
      {children}
    </div>
  )
}

export default Container
