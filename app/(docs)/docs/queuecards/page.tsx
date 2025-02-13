import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import CardsQueue from "./queuecards";

const page = () => {
  return (
    <div>
      <PageTemplate title="Cards Queue Section" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/queuecards/queuecards.tsx">
          <CardsQueue />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className="my-4"
          installScript="npm i framer-motion lucide-react"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/queue-cards.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
