import type { CSSProperties } from 'react'
import corkBoardPhoto from './assets/cork-board.jpeg'

// Resolved as a JS import (not a CSS url()) because relative url()s inside
// App.css were not being rewritten correctly under this project's non-root
// Vite `base`, leaving the corkboard background image silently 404ing.
export const corkboardBackgroundStyle: CSSProperties = {
  backgroundImage:
    `radial-gradient(ellipse at center, rgba(20, 12, 4, 0.05) 0%, rgba(20, 12, 4, 0.35) 100%), ` +
    `url(${corkBoardPhoto})`,
}
