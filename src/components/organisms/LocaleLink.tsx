import React from 'react'
import Container from '@components/atoms/Container'
import { useLocale } from '@hooks/Locale'

const LocaleLink: React.VFC = () => {
  const locale = useLocale()

  const links =
    locale === 'en-US' ? (
      <>
        <a href="/" className="hover:underline text-blue-600">
          日本語
        </a>{' '}
        / <a>English</a>
      </>
    ) : (
      <>
        <a>日本語</a> /{' '}
        <a href="/en/" className="hover:underline text-blue-600">
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
