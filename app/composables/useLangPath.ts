export const useLangPath = () => {
  const route = useRoute()

  const locale = computed(() => {
    return route.params.locale || "en"
  })

  return (path = "") => {
    const cleanPath = path.replace(/^\/|\/$/g, "")

    return cleanPath ? `/${locale.value}/${cleanPath}/` : `/${locale.value}/`
  }
}
