import parser from "html-react-parser";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import type { FAQItem } from "@/types";
const FAQ = ({ faqItems }: { faqItems: FAQItem[] }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => {
        return (
          <AccordionItem value={index.toString()} key={index}>
            <AccordionTrigger className="h5-heading-sizing text-left font-serif text-slate-600 hover:text-slate-700 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-500 ~text-sm/base">
              {parser(item.answer)}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export { FAQ };
