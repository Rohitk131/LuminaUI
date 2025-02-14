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
            {
              title:
                "Create a file use-pagination.ts in hooks folder and paste the following code",
              codeSnippet: `
import { useState } from "react";

const TOTAL_PAGES = 10;

export const generateCardContent = (page: number) => ({
  id: page,
  title: \`Cosmic Discovery #\${page}\`,
  content: \`Exploring the wonders of the universe on page \${page}.\`,
});

export const usePagination = (totalPages = TOTAL_PAGES) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [card, setCard] = useState(() => generateCardContent(1)); // Lazy initialization

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return; // Prevent invalid page numbers
    setCurrentPage(page);
    setCard(generateCardContent(page));
  };

  return { currentPage, card, totalPages, handlePageChange };
};
              `,
            },
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/pagination.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
