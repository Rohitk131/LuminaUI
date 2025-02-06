import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import PasswordTorch from "./passwordTorchdemo";  

const page = () => {
  return (
    <div>
      <PageTemplate title="Password Torch" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/passwordtorch/passwordTorchdemo.tsx"> 
          <PasswordTorch />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
          No additional packages required. Just copy the component code.
        </p>
        <Steppers
          className=""
          installScript="npm i framer-motion lucide-react"
          steps={[{ title: "Create Neon Card component & paste the code" }]}
          withInstall
          codePath="components/luminaui/passwordtorch.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;