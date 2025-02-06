import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import CircularSlider from "./circularsliderdemo";

const page = () => {
    return (
        <div>
            <PageTemplate title="Circular Slider" className="mt-5">
                <PreviewCodeCard path="app/(docs)/docs/circularslider/circularsliderdemo.tsx">
                    <CircularSlider />
                </PreviewCodeCard>

                <PageSubTitle>Installation</PageSubTitle>
                <p className="text-gray-400">
                    To get started with the Circle Showcase, first install the necessary dependencies:
                </p>
                <code className="block mb-4">npm install framer-motion lucide-react</code>
                <p className="text-gray-400">
                    Make Utils.ts file in lib and paste the code from above steps.
                </p>
                <Steppers
                    className="my-4"
                    installScript="npm i framer-motion lucide-react"
                    steps={[
                        { title: "Install dependencies" },
                        { title: "Create feedback component & paste the code" },
                        { title: "Customize as needed" }
                    ]}
                    withInstall
                    codePath="components/luminaui/circularslider.tsx"
                />
            </PageTemplate>
        </div>
    );
};

export default page;
