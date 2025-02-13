import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import Pagination from "./pagination-demo";
const page = () => {
  return (
    <div>
      <PageTemplate title="Pagination" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/pagination/pagination-demo.tsx">
          <Pagination />
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
