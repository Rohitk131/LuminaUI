import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import CardDeck from "./card-deck-demo";
const page = () => {
  return (
    <div>
      <PageTemplate title="Card Deck" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/card-deck/card-deck-demo.tsx">
          <CardDeck />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className=""
          installScript="npm i framer-motion"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/card-deck.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
