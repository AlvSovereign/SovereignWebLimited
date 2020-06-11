import React from "react"
import { Typography } from "../ui"
import Email from "../../assets/icons/Email"

const Contact = () => {
  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto">
        <div className="pb-8">
          <Typography
            component="h2"
            weight="medium"
            type="heading"
            className="text-white"
          >
            {"Any ideas for collaboration?"}
          </Typography>
          <Typography
            component="h2"
            weight="medium"
            type="heading"
            className="text-white"
          >
            {"We would love to work with you."}
          </Typography>
          <Typography
            component="h2"
            weight="medium"
            type="heading"
            className="text-white"
          >
            {"Let's start the conversation."}
          </Typography>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="pr-4">
            <Email fill={"#fff"} />
          </div>
          <Typography
            component="h2"
            weight="light"
            type="heading"
            className="text-white"
          >
            {"info@sovereignweb.ltd"}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Contact

interface ContactProps {}
