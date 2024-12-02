import React from 'react'
import Header from '@components/atoms/Header'
import Footer from '@components/atoms/Footer'
import Container from '@components/atoms/Container'

const ArticleIndexTemplate: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="flex-grow">
        <Header />
        <Container>
          <p className="text-center">WIP: 工事中です。。。</p>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default ArticleIndexTemplate
