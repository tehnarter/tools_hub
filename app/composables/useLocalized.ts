import type { Locale } from "~~/types/calculator"

export const useLocalized = () => {
  const { locale } = useI18n()

  const lt = <T>(value: Record<Locale, T>): T => {
    return value[locale.value as Locale]
  }

  return { lt }
}
