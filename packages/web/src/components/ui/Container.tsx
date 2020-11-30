import React, { ReactNode } from "react"
import cx from "classnames"

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={cx("container mx-auto lg:max-w-7xl xl:px-0 px-4 ", className)}
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
