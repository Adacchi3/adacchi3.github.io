import Container from '@components/atoms/Container'
import Footer from '@components/atoms/Footer'
import Header from '@components/atoms/Header'
import React from 'react'

const ArticleIndexTemplate: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="grow">
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
