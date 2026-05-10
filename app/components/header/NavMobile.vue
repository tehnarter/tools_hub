<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"
import { gsap } from "gsap"
import { useI18n } from "vue-i18n"

const emit = defineEmits(["close"])
const { t } = useI18n()
const langPath = useLangPath()

const mobileNavRef = ref<HTMLElement>()
const overlayRef = ref<HTMLElement>()
let timeline: gsap.core.Timeline

// Функція для закриття меню з анімацією
function closeMenu() {
  if (!mobileNavRef.value || !overlayRef.value) return

  const closeTimeline = gsap.timeline({
    defaults: { duration: 1, ease: "power2.in" },
    onComplete: () => {
      mobileNavRef.value!.style.display = "none"
      overlayRef.value!.style.display = "none"
      emit("close")
    },
  })

  // Виїзд меню вліво та зникнення overlay
  closeTimeline.to(mobileNavRef.value, { x: "-100%", opacity: 0 })
  closeTimeline.to(overlayRef.value, { opacity: 0 }, 0) // одночасно
}

onMounted(() => {
  if (!mobileNavRef.value || !overlayRef.value) return

  // Показуємо елементи перед анімацією
  mobileNavRef.value.style.display = "flex"
  overlayRef.value.style.display = "block"

  // Анімація появи меню зліва та overlay
  timeline = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } })
  timeline.fromTo(
    mobileNavRef.value,
    { x: "-100%", opacity: 0 },
    { x: "0%", opacity: 1 }
  )
  timeline.fromTo(overlayRef.value, { opacity: 0 }, { opacity: 0.5 }, 0)
})

onBeforeUnmount(() => {
  if (timeline) timeline.kill()
})
</script>

<template>
  <div>
    <!-- Overlay -->
    <div
      class="nav-overlay"
      ref="overlayRef"
      @click="closeMenu"
      style="opacity: 0; display: none"
    />

    <!-- Мобільне меню -->
    <nav
      class="nav-mobile"
      ref="mobileNavRef"
      style="transform: translateX(-100%); opacity: 0; display: none"
    >
      <NuxtLink :to="langPath('about/')" @click="closeMenu">{{
        t("header.about")
      }}</NuxtLink>
      <NuxtLink :to="langPath('calculators/')" @click="closeMenu">{{
        t("header.all")
      }}</NuxtLink>
      <NuxtLink :to="langPath('faq/')" @click="closeMenu">{{
        t("header.faq")
      }}</NuxtLink>
      <NuxtLink :to="langPath('contact')" @click="closeMenu">{{
        t("header.contact")
      }}</NuxtLink>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.nav-overlay {
  display: block;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 998;
}

.nav-mobile {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  padding: 20px;
  background: #c5c1c1;
  gap: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  z-index: 999;
}

.nav-mobile a {
  text-decoration: none;
  color: #444;
  font-weight: 500;
  transition: 0.2s;
}

.nav-mobile a:hover {
  color: #2575fc;
}
</style>
