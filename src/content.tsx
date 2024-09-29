import cssText from 'data-text:~/main.css'
import type { PlasmoCSConfig } from "plasmo"
import { injectMainStyles } from '~/lib/utils'

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

// 引入tailwind
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const Content = () => {
  injectMainStyles(cssText)

  return (
    <>
      {/* this is content */}
    </>
  )
}

export default Content
