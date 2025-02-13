// page.tsx
import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import { SlideCardDemo } from "./SlideCard";

const Page = () => {
  return (
    <div>
      <PageTemplate title="Slide Card" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/slide-card/SlideCard.tsx">
          <SlideCardDemo />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className=""
          installScript="npm install framer-motion lucide-react"
          steps={[
            {
              title: "Add required animations in globals.css file",
              description:
                "Make sure to add the required keyframe animations to your global CSS file.",
              codeSnippet: `
/* Add the following keyframe animations to your globals.css file */
@keyframes beam {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
}

@keyframes pulse {
  0%, 100% { transform: translateY(-100%); }
  50% { transform: translateY(100%); }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes borderGradient {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}

@keyframes borderSlideRight {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(500%); }
}

@keyframes borderSlideDown {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(500%); }
}

@keyframes borderSlideLeft {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-500%); }
}

@keyframes borderSlideUp {
  0% { transform: translateY(100%); }
  100% { transform: translateY(-500%); }
}
              `,
            },
            {
              title: "Implement the code as demonstrated in the preview",
              description:
                "Copy the code from the preview and paste it into your project.",
            },
          ]}
          withInstall
          codePath="components/luminaui/slidecard.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default Page;
