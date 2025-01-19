import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import Plasma from "./plasmabackgrounddemo";
const page = () => {
    return (
        <div>
            <PageTemplate title="Plasma" className="mt-5">
                <PreviewCodeCard path="app/(docs)/docs/PlasmaBackground/plasmabackgrounddemo.tsx">
                    <div className="w-full h-[600px]"> {/* Adjust height as needed */}
                        <Plasma />
                    </div>
                </PreviewCodeCard>


                <PageSubTitle>Installation</PageSubTitle>
                <p className="text-gray-400">
                    Make Utils.ts file in lib and paste the code from Step-2
                </p>
                <Steppers
                    className=""

                    installScript="npm i framer-motion lucide-react"
                    steps={[{ title: "Create feedback component & paste the code" }]}
                    withInstall
                    codePath="lib/utils.ts"
                />

            </PageTemplate>
        </div>
    );
};

export default page;
