import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import CodeBlock from "./codeblockdemo";

const page = () => {
  return (
    <div>
      <PageTemplate title="Code Block" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/codeblock/codeblockdemo.tsx">
          <CodeBlock />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className="my-4"
          installScript="npm i framer-motion lucide-react prism-react-renderer"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/codeblock.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
