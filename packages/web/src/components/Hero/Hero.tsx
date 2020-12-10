import React from "react"
import { Container, Row, Text } from "../ui"

const Hero = () => {
  return (
    <Row
      alignItems="center"
      className="bg-black"
      direction="col"
      element="section"
      justifyContent="around"
    >
      <Container>
        <div className="flex flex-col justify-center py-12 md:py-32 w-full">
          <div className="mb-12">
            <Text
              align="center"
              className="text-white"
              as="h1"
              type="hero"
              weight="semibold"
            >
              <span>{"We help you realise your"}</span>
              <span className="block text-yellow">{"digital experiences"}</span>
            </Text>
          </div>
          <Text
            align="center"
            className="text-white"
            as="h2"
            type="subheading"
            weight="light"
          >
            {
              "We specialise in accessible, standards based, data driven user interface development, focused on great user experience."
            }
          </Text>
        </div>
      </Container>
    </Row>
  )
}

export default Hero

interface HeroProps {}
