import React from "react"
import Img, { FluidObject } from "gatsby-image"

interface ImageWithMaskProps {
  className: string | object
  fadeIn?: boolean
  fluid: FluidObject | FluidObject[]
}

const ImageWithMask = ({ className, fadeIn, fluid }: ImageWithMaskProps) => {
  return (
    <>
      <Img className={className} fadeIn={fadeIn} fluid={fluid} />
      <div className="absolute h-full w-full bg-black opacity-75"></div>
    </>
  )
}

export default ImageWithMask
