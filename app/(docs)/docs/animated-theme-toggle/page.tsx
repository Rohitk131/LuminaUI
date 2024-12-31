import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import SpaceBackground from "./animated-theme-toggle-demo";
const page = () => {
  return (
    <div>
      <PageTemplate title="Animated Theme Toggle" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/animated-theme-toggle/animated-theme-toggle-demo.tsx">
          <SpaceBackground />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
          Make Utils.ts file in lib and paste the code from Step-2
        </p>
        <Steppers
          className=""
          installScript="npm i framer-motion lucide-react next-themes"
          steps={[
            {
              title: "Create animated-theme-toggle component & paste the code",
            },
          ]}
          withInstall
          codePath="lib/utils.ts"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
