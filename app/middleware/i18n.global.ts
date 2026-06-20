export default defineNuxtRouteMiddleware((to) => {
  const i18n = useNuxtApp().$i18n as any

  const locale = to.params.locale

  const supportedLocales = ["ua", "en", "ru", "pl", "es"]

  if (typeof locale === "string" && supportedLocales.includes(locale)) {
    i18n.setLocale(locale)
  }
})
