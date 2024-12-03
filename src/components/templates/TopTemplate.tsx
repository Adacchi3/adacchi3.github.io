import Footer from '@components/atoms/Footer'
import Header from '@components/atoms/Header'
import AboutUs from '@components/organisms/AboutUs'
import AcademicBackgrounds from '@components/organisms/AcademicBackgrounds'
import Achievements from '@components/organisms/Achievements'
import Awards from '@components/organisms/Awards'
import LocaleLink from '@components/organisms/LocaleLink'
import WorkExperiences from '@components/organisms/WorkExperience'
import React from 'react'

const TopTemplate: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="flex-grow">
        <Header />
        <AboutUs />
        <LocaleLink />
        <Achievements />
        <Awards />
        <WorkExperiences />
        <AcademicBackgrounds />
      </div>
      <Footer />
    </div>
  )
}

export default TopTemplate
