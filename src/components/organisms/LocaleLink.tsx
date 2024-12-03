import Container from '@components/atoms/Container'
import { useLocale } from '@hooks/Locale'
import Link from 'next/link'
import React from 'react'

const LocaleLink: React.FC = () => {
  const locale = useLocale()

  const links =
    locale === 'en-US' ? (
      <>
        <Link href="/" className="text-blue-600 hover:underline">
          日本語
        </Link>{' '}
        / English
      </>
    ) : (
      <>
        日本語 /{' '}
        <Link href="/en/" className="text-blue-600 hover:underline">
          English
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
