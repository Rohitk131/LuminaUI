import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import StackedCards from "./stackedcardsdemo";

const page = () => {
  return (
    <div>
      <PageTemplate title="Stacked Cards" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/stackedcards/stackedcardsdemo.tsx">
          <StackedCards />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className="my-5"
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
