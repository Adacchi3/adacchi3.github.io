import { useLocaleQuery } from '@graphql/generated/graphql'

export const useLocale = (): string => {
  const { data: localeData } = useLocaleQuery()
  return String(localeData?.locale)
}
