import { borderPages } from "./seo-pages"

const locales = ["ua", "en", "pl", "ru", "es"]

export const prerenderRoutes = locales.flatMap((locale) =>
  Object.entries(borderPages).flatMap(([category, slugs]) =>
    Object.keys(slugs).map(
      (slug) => `/${locale}/calculators/${category}/${slug}`
    )
  )
)
