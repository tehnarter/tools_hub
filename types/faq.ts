import type { Locale } from "./calculator"

export interface FAQTranslation {
  question: string
  answer: string
}

export interface FAQItem {
  question: Record<Locale, string>
  answer: Record<Locale, string>
}
