export type Locale = "en" | "ua" | "ru" | "pl" | "es"

export type Localized<T> = Record<Locale, T>

export type LocalizedText = Localized<string>
export type LocalizedList = Localized<string[]>

export interface FAQItem {
  question: LocalizedText
  answer: LocalizedText
}

export interface Calculator {
  slug: string
  category: string
  component: string
  rating: number
  seoTitle: LocalizedText
  seoDescription: LocalizedText

  title: LocalizedText
  description: LocalizedText
  howTo: LocalizedList

  formula?: string
  faq?: FAQItem[]
}
