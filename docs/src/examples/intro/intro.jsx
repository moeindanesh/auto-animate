import { useAutoAnimate } from "@moeindana/auto-animate/react"

function MyList() {
  const [animationParent] = useAutoAnimate()
  return (
    <ul ref={animationParent}>{/* 🪄 Magic animations for your list */}</ul>
  )
}
