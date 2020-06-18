import React from "react"
import Img, { FluidObject } from "gatsby-image"

interface ImageWithMaskProps {
  alt: string
  className: string | object
  fadeIn?: boolean
  fluid: FluidObject | FluidObject[]
}

const ImageWithMask = ({
  alt,
  className,
  fadeIn,
  fluid,
}: ImageWithMaskProps) => {
  return (
    <>
      <Img alt={alt} className={className} fadeIn={fadeIn} fluid={fluid} />
      <div className="absolute h-full w-full bg-black opacity-75"></div>
    </>
  )
}

export default ImageWithMask
