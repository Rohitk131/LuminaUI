import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import FooterDemo from "./footer-demo";

const page = () => {
  return (
    <div>
      <PageTemplate title="Footer" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/footer/footer-demo.tsx">
          <FooterDemo />
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
