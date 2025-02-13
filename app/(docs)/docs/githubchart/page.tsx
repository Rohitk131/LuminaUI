import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import GitHubCalendar from "@/app/(docs)/docs/githubchart/githubchartdemo"; // Updated import
import { Steppers } from "@/components/ui/steppers";

const page = () => {
  return (
    <div>
      <PageTemplate title="Github Chart" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/githubchart/githubchartdemo.tsx">
          <GitHubCalendar username="torvalds" year="2024" />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className=""
          installScript="npm i framer-motion lucide-react"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="lib/utils.ts"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
