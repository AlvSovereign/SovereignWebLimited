import React from "react"
import Img from "gatsby-image"
import cx from "classnames"

import { SanityImageWithAlt } from "../../types"
import styles from "./WorkHeroImages.module.css"

interface WorkHeroImagesProps {
  images: SanityImageWithAlt[]
}

const WorkHeroImages = ({ images }: WorkHeroImagesProps) => {
  return (
    <>
      <Img
        alt={images[0].altText}
        className="w-full h-full z-0"
        fadeIn={true}
        fluid={images[0].image.asset.fluid}
      />
      <Img
        alt={images[1].altText}
        className={cx(
          "w-full h-full z-10",
          styles.floatingImages,
          styles.rightImage
        )}
        fadeIn={true}
        fluid={images[1].image.asset.fluid}
      />
      <Img
        alt={images[2].altText}
        className={cx(
          "w-full h-full z-10",
          styles.floatingImages,
          styles.leftImage
        )}
        fadeIn={true}
        fluid={images[2].image.asset.fluid}
      />
    </>
  )
}

export default WorkHeroImages
