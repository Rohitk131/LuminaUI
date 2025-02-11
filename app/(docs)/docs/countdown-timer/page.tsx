import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import CountdownTimer from "./countdown-timer-demo";
const page = () => {
  return (
    <div>
      <PageTemplate title="Countdown Timer" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/countdown-timer/countdown-timer-demo.tsx">
          <CountdownTimer />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className="my-4"
          installScript="npm i framer-motion"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/countdown-timer.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
