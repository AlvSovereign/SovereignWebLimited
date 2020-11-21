import React from "react"
import { Link } from "gatsby"

import SwlLogo from "../../assets/icons/SwlLogo"
import Logo from "../../assets/icons/Logo"
import { Typography } from "../ui"

const Navigation = () => {
  return (
    <div className="w-screen h-20 p-4 bg-black">
      <div className="flex flex-row items-center justify-between container mx-auto h-full">
        <div className="flex-1 h-8">
          <Link to="/">
            <SwlLogo className="h-full" fill="#fff" />
          </Link>
        </div>
        <div className="flex-1 flex-row items-end justify-end hidden md:flex">
          <Link to="#our-work">
            <Typography
              className="text-white pr-8"
              component="span"
              type="nav"
              weight="semibold"
            >
              Our Work
            </Typography>
          </Link>
          <Link to="#contact">
            <Typography
              className="text-white"
              component="span"
              type="nav"
              weight="semibold"
            >
              Contact
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation

interface NavigationProps {}
