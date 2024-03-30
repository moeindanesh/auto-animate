import {
  defineNuxtModule,
  addImports,
  addPlugin,
  createResolver,
} from "@nuxt/kit"

// Module options TypeScript interface definition
// export interface ModuleOptions {}

export default defineNuxtModule({
  meta: {
    name: "auto-animate",
    configKey: "autoAnimate",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup() {
    const resolver = createResolver(import.meta.url)

    // Register the directive
    addPlugin(resolver.resolve("./runtime/plugin"))

    // Register auto-loaded components
    addImports([
      {
        name: "autoAnimate",
        from: "@moeindana/auto-animate",
      },
      {
        name: "useAutoAnimate",
        from: "@moeindana/auto-animate/vue",
      },
    ])
  },
})
