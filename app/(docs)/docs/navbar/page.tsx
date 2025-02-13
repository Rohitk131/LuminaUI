import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import Navbardemo from "./navbar-demo";

const page = () => {
  return (
    <div>
      <PageTemplate title="Navbar" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/navbar/navbar-demo.tsx">
          <Navbardemo />
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
