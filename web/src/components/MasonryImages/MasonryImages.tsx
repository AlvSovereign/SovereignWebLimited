import React, { ReactNode } from "react"
import Masonry from "react-masonry-css"
import cx from "classnames"

import styles from "./MasonryImages.module.css"

interface MasonryImagesProps {
  children: ReactNode[]
}

const MasonryImages = ({ children }: MasonryImagesProps) => {
  const breakpoints = {
    768: 2,
    767: 1,
    default: 2,
  }

  return (
    <Masonry
      breakpointCols={breakpoints}
      className={cx("h-full", styles.masonryGrid)}
      columnClassName={styles.masonryGridCols}
    >
      {children}
    </Masonry>
  )
}

export default MasonryImages
