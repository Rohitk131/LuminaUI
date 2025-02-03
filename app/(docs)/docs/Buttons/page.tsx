import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import Buttons from "./buttonsDemo";

const page = () => {
    return (
        <div>
            <PageTemplate title="Buttons" className="mt-5">
                <PreviewCodeCard path="app/(docs)/docs/Buttons/buttonsDemo.tsx">
                    <Buttons/>
                </PreviewCodeCard>

                <PageSubTitle>Installation</PageSubTitle>
         
            </PageTemplate>
        </div>
    );
};

export default page;
