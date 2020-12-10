import React from "react"
import { Text, Row } from "../ui"
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
      <Text as="h2" type="heading" className="text-white" weight="semibold">
        {"Any ideas for collaboration?"}
      </Text>
      <Text as="h2" type="heading" className="text-white" weight="semibold">
        {"We would love to work with you."}
      </Text>
      <Text
        as="h2"
        className="text-white"
        gutterBottom="md"
        type="heading"
        weight="semibold"
      >
        {"Let's start a conversation."}
      </Text>
      <Row
        alignItems="center"
        direction="row"
        className="ml-4"
        justifyContent="start"
      >
        <div className="pr-4">
          <Email fill={"#fff"} />
        </div>
        <Text as="h3" weight="light" type="subheading" className="text-white">
          {"info@sovereignweb.ltd"}
        </Text>
      </Row>
    </Row>
  )
}

export default Contact

interface ContactProps {}
