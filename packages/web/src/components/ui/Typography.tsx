import React, { ReactNode } from "react"
import cx from "classnames"

interface TypographyProps {
  textAlign?: "left" | "center" | "right"
  children: ReactNode
  className?: string
  component: any
  display?: "block" | "inline"
  gutterBottom?: "sm" | "md" | "lg"
  style?: object
  type:
    | "hero"
    | "heading"
    | "nav"
    | "normal"
    | "pageTitle"
    | "paragraph"
    | "subheading"
  weight?: "light" | "medium" | "semibold"
  rest?: any
}

const Typography = ({
  children,
  className,
  component,
  display = "block",
  gutterBottom,
  textAlign,
  type,
  style,
  weight,
  ...rest
}: TypographyProps) => {
  const Component = component || "p"

  return (
    <Component
      className={cx(
        "typography-opacity",
        "font-sans",
        "subpixel-antialiased",
        {
          block: display === "block",
          inline: display === "inline",
          "mb-2": gutterBottom === "sm",
          "mb-4": gutterBottom === "md",
          "mb-8": gutterBottom === "lg",
          "text-center": textAlign === "center",
          "text-left": textAlign === "left",
          "text-right": textAlign === "right",
          "text-xl": type === "nav",
          "text-3xl md:text-4xl": type === "heading",
          "text-4xl md:text-6xl": type === "pageTitle",
          "text-base md:text-xl": type === "paragraph",
          "text-xl md:text-3xl": type === "subheading",
          "hero-font": type === "hero",
          "font-light": weight === "light",
          "font-medium": weight === "medium",
          "font-semibold": weight === "semibold",
        },
        className
      )}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Typography
