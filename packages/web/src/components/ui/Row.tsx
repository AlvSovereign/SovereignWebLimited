import React, { ReactNode } from "react"
import cx from "classnames"

import Container from "./Container"

type Alignment = "center" | "end" | "inherit" | "start" | ResponsiveProps
type Direction = "col" | "row" | "row-reverse" | ResponsiveProps

export type Breakpoints = "xs" | "sm" | "md" | "lg" | "xl"

type ResponsiveProps = Pick<Breakpoints, any>

interface RowProps {
  alignItems: Alignment //'inherit will deliberatly omit its style'
  alignSelf?: Alignment
  background?: "black"
  children: ReactNode
  className?: string
  direction: Direction
  element?: any // the string of a HTML element
  height?: "auto" | "full" | "hero" | "screen"
  id?: string
  justifyContent: "around" | "between" | "center" | "inherit" | "start"
  withContainer?: boolean
  wrap?: boolean
  rest?: any
}

const Row = ({
  alignItems,
  alignSelf,
  background,
  children,
  className,
  direction,
  element = "div",
  height,
  id,
  justifyContent,
  withContainer = false,
  wrap,
  ...rest
}: RowProps) => {
  const Element = element

  const createResponsiveClassName = (
    breakpoints: Direction | Alignment,
    partial: string
  ) => {
    if (typeof breakpoints === "object") {
      const className = Object.entries(breakpoints).map(
        entry =>
          `${entry[0] !== "xs" ? `${entry[0]}:` : ""}${partial}${entry[1]}`
      )
      return className
    } else {
      return `${partial}${breakpoints}`
    }
  }

  return (
    <Element
      className={cx(
        "flex",
        {
          "bg-black": background === "black",
          "items-center": alignItems === "center",
          "items-end": alignItems === "end",
          "items-start": alignItems === "start",
          "justify-around": justifyContent === "around",
          "justify-between": justifyContent === "between",
          "justify-center": justifyContent === "center",
          "justify-start": justifyContent === "start",
          "h-auto": height === "auto",
          "h-full": height === "full",
          "hero-height": height === "hero",
          "h-screen": height === "screen",
          "flex-wrap": wrap,
        },
        createResponsiveClassName(direction, "flex-"),
        createResponsiveClassName(alignItems, "items-"),
        createResponsiveClassName(alignSelf, "self-"),
        className
      )}
      id={id}
      {...rest}
    >
      {withContainer ? <Container>{children}</Container> : <>{children}</>}
    </Element>
  )
}

export default Row
