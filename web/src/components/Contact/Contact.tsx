import React from "react"
import { Typography, Row } from "../ui"
import Email from "../../assets/icons/Email"

const Contact = () => {
  return (
    <Row
      alignItems="center"
      className="py-24 bg-black"
      direction="col"
      id="contact"
      justifyContent="start"
      withContainer={true}
    >
      <Typography
        component="h2"
        type="heading"
        className="text-white"
        weight="semibold"
      >
        {"Any ideas for collaboration?"}
      </Typography>
      <Typography
        component="h2"
        type="heading"
        className="text-white"
        weight="semibold"
      >
        {"We would love to work with you."}
      </Typography>
      <Typography
        component="h2"
        className="text-white"
        gutterBottom="md"
        type="heading"
        weight="semibold"
      >
        {"Let's start a conversation."}
      </Typography>
      <Row
        alignItems="center"
        direction="row"
        className="ml-4"
        justifyContent="start"
      >
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
      </Row>
    </Row>
  )
}

export default Contact

interface ContactProps {}
