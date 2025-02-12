import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import SocialMedia from "./socialmediabar";

const page = () => {
  return (
    <div>
      <PageTemplate title="Social Media Bar" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/socialmediabar/socialmediabar.tsx">
          <SocialMedia />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className="my-5"
          installScript="npm i framer-motion lucide-react"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/socialmediabar.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
