<script setup lang="ts">
const { t } = useI18n()

const emit = defineEmits<{
  (e: "close"): void
}>()

const close = () => emit("close")

const escHandler = (e: KeyboardEvent) => {
  if (e.key === "Escape") close()
}

onMounted(() => {
  document.addEventListener("keydown", escHandler)
  document.body.style.overflow = "hidden"
})

onUnmounted(() => {
  document.removeEventListener("keydown", escHandler)
  document.body.style.overflow = ""
})
</script>

<template>
  <div class="overlay" @click.self="close">
    <div class="policy">
      <div class="policy__content">
        <div class="policy__text">
          <h3>{{ t("policy.title-1") }}</h3>
          <p>{{ t("policy.text-1") }}</p>

          <h4>{{ t("policy.title-2") }}</h4>
          <p>{{ t("policy.text-2") }}</p>

          <h4>{{ t("policy.title-3") }}</h4>
          <p>{{ t("policy.text-3") }}</p>
          <h4>{{ t("policy.title-4") }}</h4>
          <p>
            {{ t("policy.text-4") }}
          </p>
          <h4>{{ t("policy.title-5") }}</h4>
          <p>
            {{ t("policy.text-5") }}
          </p>
          <h4>{{ t("policy.title-6") }}</h4>
          <p>
            {{ t("policy.text-6") }}
          </p>

          <button class="policy__button" @click="close">
            {{ t("policy.button") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.policy {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(206, 206, 248, 0.1);

  &__content {
    margin: 63px 0px 0px 0px;
    width: 100%;
    background-color: var(--themes-bg);
  }
  &__text {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    max-width: 768px;
    padding: 50px 20px 50px 20px;
    background-color: var(--themes-bg);

    height: 100%;

    h3 {
      padding: 0px 0px 20px 0px;
      text-align: center;
      font-size: 25px;
    }
    h4 {
      padding: 0px 0px 10px 0px;
      font-size: 20px;
    }
    p {
      padding: 0px 0px 15px 0px;

      text-indent: 10px;
    }
  }
  &__button {
    display: flex;
    margin: 50px 20px 0px 0px;
    padding: 10px 20px;
    background-color: #6f86a0;
    color: #fff;
    font-family: Roboto;
    font-weight: 700;
    font-style: italic;
    border-radius: 10px;
    align-self: flex-end;
  }
}
</style>
