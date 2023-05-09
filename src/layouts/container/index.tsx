import React, { ReactNode } from 'react'

import styles from './index.module.scss'

type PropsType = {
  children?: ReactNode;
};

const Container: React.FC<PropsType> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Container
