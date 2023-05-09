import React from 'react'

import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const Home: React.FC = () => {
  const { t } = useTranslation('common')
  return (
    <div className="flex flex-col justify-center m-h-[100vh]">
      {t('title')}
    </div>
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
