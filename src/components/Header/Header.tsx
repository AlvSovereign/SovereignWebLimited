import React from "react"
import Logo from "../../assets/icons/Logo"
import { Typography } from "../ui"

const Navigation = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-20 p-4">
      <div className="flex flex-row items-center justify-between container mx-auto">
        <div className="flex-1 h-8">
          <a href="/">
            <Logo className="h-full" />
          </a>
        </div>
        <div className="flex-1 flex flex-row items-end justify-end">
          <a href="">
            <Typography component="span" type="nav" className="pr-8">
              Work
            </Typography>
          </a>
          <a href="">
            <Typography component="span" type="nav">
              Contact
            </Typography>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navigation

interface NavigationProps {}
