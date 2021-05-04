import React from 'react'
import Header from '@components/atoms/Header'
import Footer from '@components/atoms/Footer'
import Achievements from '@components/organisms/Achievements'

const TopTemplate: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      {children}
      <Achievements />
      <Footer />
    </div>
  )
}

export default TopTemplate
