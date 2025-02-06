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
        <p className="text-gray-400">
          Make Utils.ts file in lib and paste the code from Step-2
        </p>
        <Steppers
          className=""
          installScript="npm i framer-motion"
          steps={[{ title: "Create card-deck component & paste the code" }]}
          withInstall
          codePath="components/luminaui/card-deck.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
