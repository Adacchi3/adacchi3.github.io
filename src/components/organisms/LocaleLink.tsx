import React from 'react'
import Container from '@components/atoms/Container'
import { useLocale } from '@hooks/Locale'

const LocaleLink: React.VFC = () => {
  const locale = useLocale()

  const links =
    locale === 'en-US' ? (
      <>
        <a href="/" className="text-blue-600 hover:underline">
          日本語
        </a>{' '}
        / <a>English</a>
      </>
    ) : (
      <>
        <a>日本語</a> /{' '}
        <a href="/en/" className="text-blue-600 hover:underline">
          English
        </a>
      </>
    )

  return (
    <Container>
      <div className="float-right pr-6">{links}</div>
    </Container>
  )
}

export default LocaleLink
