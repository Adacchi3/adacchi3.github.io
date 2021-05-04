import React from 'react'

type Props = {
  title?: string
  description?: string
}

const Metadata: React.VFC<Props> = ({ title, description }) => {
  const meta = [
    {
      name: 'description',
      content: description || 'This page is a part of Adacchi3 Portfolio.',
    },
    {
      name: 'og:title',
      content: title ? `${title} | Adacchi3 Portfolio` : 'Adacchi3 Portfolio',
    },
    {
      name: 'og:description',
      content: description || 'This page is a part of Adacchi3 Portfolio.',
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: 'ayata_taguchi',
    },
    {
      name: 'twitter:title',
      content: title || 'Adacchi3 Portfolio',
    },
    {
      name: 'twitter:description',
      content: description || 'This page is a part of Adacchi3 Portfolio.',
    },
  ]

  return (
    <>
      {meta.map((data, index) => {
        return <meta key={index} name={data.name} content={data.content} />
      })}
    </>
  )
}

export default Metadata
