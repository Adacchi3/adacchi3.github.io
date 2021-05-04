import React from 'react'
import Link from 'next/link'
import Container from '@components/atoms/Container'
import { useLocale } from '@hooks/Locale'

const LocaleLink: React.VFC = () => {
  const locale = useLocale()

  const links =
    locale === 'en-US' ? (
      <>
        <Link href="/">
          <a className="text-blue-600 hover:underline">日本語</a>
        </Link>{' '}
        / English
      </>
    ) : (
      <>
        日本語 /{' '}
        <Link href="/en/">
          <a className="text-blue-600 hover:underline">English</a>
        </Link>
      </>
    )

  return (
    <Container>
      <div className="float-right pr-6">{links}</div>
    </Container>
  )
}

export default LocaleLink
