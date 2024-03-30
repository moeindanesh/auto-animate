import { createAutoAnimate } from "@moeindana/auto-animate/solid"

function MyList() {
  const [animationParent] = createAutoAnimate()
  return (
    <ul ref={animationParent}>{/* 🪄 Magic animations for your list */}</ul>
  )
}
