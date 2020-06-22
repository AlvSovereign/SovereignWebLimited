import React, { useRef, useEffect, useState } from "react"
import Img from "gatsby-image"
import { motion } from "framer-motion"
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
      <motion.div
        animate={{ top: [-5, 5, -5] }}
        className={cx(styles.floatingImages, styles.rightImage)}
        transition={{
          ease: "easeInOut",
          delay: 1.5,
          duration: 4,
          loop: Infinity,
        }}
      >
        <Img
          alt={images[1].altText}
          className="w-full h-full z-10"
          fadeIn={true}
          fluid={images[1].image.asset.fluid}
        />
      </motion.div>
      <motion.div
        animate={{ bottom: [-5, 5, -5] }}
        className={cx(styles.floatingImages, styles.leftImage)}
        transition={{
          ease: "easeInOut",
          duration: 4,
          loop: Infinity,
        }}
      >
        <Img
          alt={images[2].altText}
          className="w-full h-full z-10"
          fadeIn={true}
          fluid={images[2].image.asset.fluid}
        />
      </motion.div>
    </>
  )
}

export default WorkHeroImages
