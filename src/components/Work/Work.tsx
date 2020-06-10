import React from "react"
import { workData, WorkDataInterface } from "./work-data"
import { Container, Row, Typography } from "../ui"

const Work = ({}: WorkProps) => {
  return (
    <Row
      alignItems="start"
      className="py-24"
      direction="col"
      element="section"
      height="auto"
      justifyContent="start"
    >
      <Container>
        <Typography
          component="h2"
          gutterBottom="sm"
          textAlign="center"
          type="heading"
        >
          Work
        </Typography>
        <Typography
          component="h3"
          gutterBottom="md"
          textAlign="center"
          type="subheading"
          weight="light"
        >
          We pride ourselves on the work we do.
        </Typography>
        <div className="flex flex-col ">
          {workData.map((item: WorkDataInterface, index: number) => (
            <Row
              key={index}
              alignItems="center"
              className="py-8"
              direction={{
                xs: "col",
                md: index % 2 === 0 ? "row" : "row-reverse",
              }}
              element="article"
              height="auto"
              justifyContent="between"
            >
              <div className="flex-1 p-2">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className={`flex shadow-xl rounded-sm ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                />
              </div>
              <Row
                alignItems="inherit"
                className={`flex-1 mt-4 md:mt-0 ${
                  index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                }`}
                direction="col"
                height="auto"
                justifyContent="inherit"
              >
                <Typography component="h3" gutterBottom="sm" type="subheading">
                  {item.title}
                </Typography>
                <Typography component="h4" type="paragraph" weight="light">
                  {item.subTitle}
                </Typography>
              </Row>
            </Row>
          ))}
        </div>
      </Container>
    </Row>
  )
}

export default Work

interface WorkProps {}
