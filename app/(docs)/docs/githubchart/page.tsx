import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import GitHubCalendar from "@/app/(docs)/docs/githubchart/githubchartdemo"; // Updated import
import { Steppers } from "@/components/ui/steppers";

const page = () => {
  return (
    <div>
      <PageTemplate title="Github Chart" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/githubchart/githubchartdemo.tsx">
        <GitHubCalendar username="rohitk131" year="2024" />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
          No additional packages required. Just copy the component code.
        </p>
        <Steppers
          className=""
          installScript="npm i framer-motion lucide-react"
          steps={[{ title: "Create Gradient Circle component & paste the code" }]}
          withInstall
          codePath="lib/utils.ts"
        />
      </PageTemplate>
    </div>
  );
};

export default page;