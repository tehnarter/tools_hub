import { useRoute, useRuntimeConfig } from "#imports"
import { useI18n } from "vue-i18n"

interface SeoOptions {
  title: string
  description: string
  image?: string
}

export function usePageSeo(getSeo: () => SeoOptions) {
  const route = useRoute()
  const config = useRuntimeConfig()
  const { locale } = useI18n()

  const siteUrl = config.public.siteUrl.replace(/\/$/, "")

  // локалі сайту
  const locales = [
    { code: "ua", iso: "uk" },
    { code: "en", iso: "en" },
    { code: "ru", iso: "ru" },
    { code: "pl", iso: "pl" },
    { code: "es", iso: "es" },
  ]

  useHead(() => {
    const { title, description, image } = getSeo()

    // прибираємо locale з URL
    const cleanPath = route.path.replace(/^\/(ua|en|ru|pl|es)/, "")

    // поточний URL
    const currentUrl =
      `${siteUrl}/${locale.value}${cleanPath}`.replace(/\/+$/, "") + "/"

    // OG image
    const img = image || `${siteUrl}/preview.jpg`

    // hreflang alternate
    const alternateLinks = locales.map((loc) => {
      const href =
        `${siteUrl}/${loc.code}${cleanPath}`.replace(/\/+$/, "") + "/"

      return {
        rel: "alternate",
        hreflang: loc.iso,
        href,
      }
    })

    // x-default -> language selector
    const xDefaultLink = {
      rel: "alternate",
      hreflang: "x-default",
      href: `${siteUrl}/`,
    }

    // canonical
    const canonical = {
      rel: "canonical",
      href: currentUrl,
    }

    return {
      htmlAttrs: {
        lang: locales.find((l) => l.code === locale.value)?.iso || "en",
      },

      title,

      link: [canonical, ...alternateLinks, xDefaultLink],

      meta: [
        // SEO
        {
          name: "description",
          content: description,
        },

        // Open Graph
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:image",
          content: img,
        },
        {
          property: "og:url",
          content: currentUrl,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:locale",
          content: locales.find((l) => l.code === locale.value)?.iso || "en",
        },

        // Twitter
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          name: "twitter:url",
          content: currentUrl,
        },
        {
          name: "twitter:image",
          content: img,
        },
      ],
    }
  })
}
