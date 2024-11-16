import parser from "html-react-parser";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Why Unity in Action?",
    answer:
      '"Unity in Action" encourages the idea that true progress comes when collaboration is translated into active engagement -- through volunteerism, partnerships, and resource-sharing.',
  },
  {
    question: "How are our beneficiaries being selected?",
    answer:
      "Our beneficiaries are typically selected based on criteria that align with the our goals and objectives. The process can vary depending on the nature of the program, the resources available, and the target population.",
  },
  {
    question: "Can we donate in cash or goods?",
    answer:
      'We accept both. If you prefer to donate cash, just click the "Make a Donation" button above.If you prefer to donate goods, please <a class="text-brand-color underline transition-all hover:text-brand-color-darker" href="https://m.me/cebuunitedcarcampers" target="_blank">send us a message in our official Facebook page</a> for a list of what can be given to our chosen beneficiary as per the organization\'s rules and guidelines',
  },
  {
    question: "Do I need to be a part of CUCC to make a donation?",
    answer: "No! Anyone and everyone is welcome to make a donation.",
  },
  {
    question:
      "Do I need to be a part of CUCC to participate in the outreach program?",
    answer:
      "No! Anyone and everyone can take part in our activities. We encourage as many volunteers as possible given that it is within the limits set by our beneficiary.",
  },
  {
    question: "How do I volunteer to take part in the outreach activity?",
    answer:
      'We will open a registration form soon. For the meantime, we will need you to <a class="text-brand-color underline transition-all hover:text-brand-color-darker" href="https://m.me/cebuunitedcarcampers" target="_blank">contact us via our official Facebook page</a> and state your interest in volunteering.',
  },
];
const FAQ = () => {
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
