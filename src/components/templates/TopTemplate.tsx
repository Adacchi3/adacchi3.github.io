import React from 'react'
import Header from '@components/atoms/Header'
import Footer from '@components/atoms/Footer'
import Achievements from '@components/organisms/Achievements'
import Awards from '@components/organisms/Awards'
import WorkExperiences from '@components/organisms/WorkExperience'
import AcademicBackgrounds from '@components/organisms/AcademicBackgrounds'
import AboutUs from '@components/organisms/AboutUs'

const TopTemplate: React.VFC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <AboutUs />
      <Achievements />
      <Awards />
      <WorkExperiences />
      <AcademicBackgrounds />
      <Footer />
    </div>
  )
}

export default TopTemplate
