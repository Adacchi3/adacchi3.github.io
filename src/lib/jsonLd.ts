import type { TopQuery } from '@graphql/generated/graphql'

const SITE_URL = 'https://adacchi3.github.io'

export function buildWebSiteJsonLd(locale: 'ja' | 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Adacchi3 Portfolio',
    url: locale === 'en' ? `${SITE_URL}/en` : SITE_URL,
  }
}

export function buildPersonJsonLd(data: TopQuery, locale: 'ja-JP' | 'en-US') {
  const pageUrl = locale === 'en-US' ? `${SITE_URL}/en` : SITE_URL

  const sameAs = (data.contacts?.items ?? [])
    .filter((c): c is NonNullable<typeof c> => c?.link != null)
    .map((c) => c.link as string)

  const alumniOf = (data.academicBackgroundCollection?.items ?? [])
    .filter((a): a is NonNullable<typeof a> => a?.organization != null)
    .map((a) => ({ '@type': 'Organization', name: a.organization }))

  const worksFor = (data.workExperiences?.items ?? [])
    .filter(
      (w): w is NonNullable<typeof w> =>
        w?.organization != null && w?.endDate == null,
    )
    .map((w) => ({ '@type': 'Organization', name: w.organization }))

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.me?.name ?? '',
    description: data.me?.description ?? '',
    image: data.me?.image?.url ?? '',
    url: pageUrl,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...(alumniOf.length > 0 ? { alumniOf } : {}),
    ...(worksFor.length > 0 ? { worksFor } : {}),
  }
}
