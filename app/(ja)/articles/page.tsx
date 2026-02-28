import ArticleIndexTemplate from '@components/templates/ArticleIndexTemplate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Articles | Adacchi3 Portfolio',
}

export default function Page() {
  return <ArticleIndexTemplate />
}
