'use client'

import Container from '@components/atoms/Container'
import Footer from '@components/atoms/Footer'
import Header from '@components/atoms/Header'
import { useParams } from 'next/navigation'
import React from 'react'

const PostTemplate: React.FC = () => {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="grow">
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
