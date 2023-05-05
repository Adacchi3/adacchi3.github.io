import React from 'react'
import Header from '@components/atoms/Header'
import Footer from '@components/atoms/Footer'
import Container from '@components/atoms/Container'
import { useRouter } from 'next/dist/client/router'

const PostTemplate: React.VFC = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="flex-grow">
        <Header />
        <Container>
          <p className="text-center">Post Slug: {slug}</p>
          <p className="text-center">WIP: 工事中です。。。</p>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default PostTemplate
