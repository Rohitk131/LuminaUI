import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import Toast from "./toast-demo";
const page = () => {
  return (
    <div>
      <PageTemplate title="Toast" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/toast/toast-demo.tsx">
          <Toast />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className=""
          installScript="npm i framer-motion lucide-react"
          steps={[{ title: "Create toast component & paste the code" }]}
          withInstall
          codePath="components/luminaui/toast.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
