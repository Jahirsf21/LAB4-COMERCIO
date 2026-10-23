import { useSyncExternalStore } from "react"

const MOBILE_BREAKPOINT = 1024
const mobile_query = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

function subscribe(onChange: () => void) {
  const media = window.matchMedia(mobile_query)
  media.addEventListener("change", onChange)
  return () => media.removeEventListener("change", onChange)
}

export function useIsMobile() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(mobile_query).matches, () => false)
}
