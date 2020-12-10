import React, { ReactNode } from "react"
import cx from "classnames"

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={cx(
        "container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container

interface ContainerProps {
  className?: string
  children: ReactNode
}
