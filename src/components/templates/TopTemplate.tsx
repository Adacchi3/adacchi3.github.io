import React from 'react'
import Header from '@components/atoms/Header'
import Footer from '@components/atoms/Footer'

type Props = {
  locale: string
}

const TopTemplate: React.FC<Props> = ({ locale, children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      {locale}
      {children}
      <Footer />
    </div>
  )
}

export default TopTemplate
