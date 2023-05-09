import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import React from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation('common')
  return (
    <div>{t('title')}</div>
  )
}
export const getServerSideProps: GetServerSideProps = async ({
  locale,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? 'en',
        ['common'],
      )),
    },
  }
}
export default Home
