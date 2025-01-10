// page.tsx
import React from "react"
import { PageSubTitle, PageTemplate } from "../components/page-template"
import PreviewCodeCard from "../components/preview-code-card"
import { Steppers } from "@/components/ui/steppers"
import { SlideCardDemo } from "./SlideCard"

const Page = () => {
  return (
    <div>
      <PageTemplate title="Slide Card" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/slide-card/SlideCard.tsx">
          <SlideCardDemo />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
          This component requires the Framer Motion library for animations and Lucide React for icons.
        </p>
        <Steppers
          className=""
          installScript="npm install framer-motion lucide-react"
          steps={[
            {
              title: "Create SlideCard component",
              description: "Create a new file called SlideCard.tsx in your components directory and copy the component code."
            },
            {
              title: "Add required animations",
              description: "Make sure to add the required keyframe animations to your global CSS file."
            }
          ]}
          withInstall
          codePath="lib/utils.ts"
        />
      </PageTemplate>
    </div>
  )
}

export default Page