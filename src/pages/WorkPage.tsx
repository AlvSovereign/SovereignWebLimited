import React from "react"

import WorkLayout from "../components/Layouts/WorkLayout"
import Content from "../components/Content/Content"

const WorkPage = ({}: WorkPageProps) => {
  return (
    <WorkLayout>
      <Content />
    </WorkLayout>
  )
}

export default WorkPage

interface WorkPageProps {}
