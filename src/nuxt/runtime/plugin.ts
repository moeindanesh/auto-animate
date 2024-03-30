import { defineNuxtPlugin } from "#imports"
import { vAutoAnimate } from "@moeindana/auto-animate/vue"

export default defineNuxtPlugin((app) => {
  // Register the directive
  app.vueApp.directive("auto-animate", vAutoAnimate)
})
