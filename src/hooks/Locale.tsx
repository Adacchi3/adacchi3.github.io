import { createContext, useContext } from 'react'

export const LocaleContext = createContext('ja-JP')

export const useLocale = (): string => {
  return useContext(LocaleContext)
}
