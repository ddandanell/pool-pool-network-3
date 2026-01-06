import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "How often should I maintain my pool in Bali's tropical climate?",
    answer: "In Bali's humid and warm climate, we recommend pool maintenance at least once a week. The tropical weather accelerates algae growth, and monsoon seasons bring additional debris. Regular maintenance includes water testing, chemical balancing, skimming, and filter cleaning to keep your pool crystal clear year-round."
  },
  {
    question: "What are common pool issues in Bali's tropical environment?",
    answer: "Bali's unique climate presents several challenges: rapid algae growth due to warmth and humidity, increased debris from tropical vegetation, calcium buildup from hard water, corrosion from salt air in coastal areas, and equipment wear from constant use. Our technicians are specially trained to handle these Bali-specific pool problems."
  },
  {
    question: "How much does pool service cost in Bali?",
    answer: "Pool service costs in Bali vary based on pool size and service type. Contact us to get a price tailored to your specific needs. We provide transparent pricing with no hidden fees."
  },
  {
    question: "Do you provide emergency pool repair services?",
    answer: "Yes, we offer 24/7 emergency pool repair services across Bali. Whether it's a pump failure at your villa, a leak at your resort, or any urgent pool issue, our technical team can respond quickly. Contact us via WhatsApp at +62 822-3756-5997 for immediate assistance."
  },
  {
    question: "What areas of Bali do you service?",
    answer: "We provide pool services throughout Bali, including Seminyak, Ubud, Canggu, Sanur, Nusa Dua, Jimbaran, Uluwatu, Kuta, Legian, and surrounding areas. We serve residential properties, villas, hotels, resorts, and commercial establishments across the island."
  },
  {
    question: "How do you detect pool leaks in Bali?",
    answer: "We use advanced ultrasonic leak detection technology and hydrophone equipment to pinpoint leaks precisely without destructive digging. Our diagnostic process includes visual inspection, pressure testing of plumbing lines, dye testing, and acoustic scanning to locate leaks in the pool shell, pipes, or fittings with 95% accuracy."
  },
  {
    question: "What types of pool pumps do you repair?",
    answer: "Our certified technicians repair all major pump brands including Hayward, Pentair, Astral, Emaux, and Waterco. Services include bearing replacement, seal kit installation, motor rewinding, impeller repair, and complete pump overhauls. We stock common spare parts for quick turnaround times."
  },
  {
    question: "Do you install new pools in Bali?",
    answer: "Yes, we offer complete pool installation services including design consultation, excavation, shell construction, tiling, equipment installation, and finishing. We specialize in infinity pools, villa pools, lap pools, and commercial resort pools, all designed to complement Bali's tropical aesthetic."
  },
  {
    question: "What warranty do you offer on pool repairs?",
    answer: "We provide a 1-year warranty on all repair work and parts. Our commitment to quality means we stand behind every repair. If any issue arises from our workmanship within the warranty period, we'll fix it at no additional cost to you."
  },
  {
    question: "Can you maintain saltwater pools in Bali?",
    answer: "Absolutely! We are experts in saltwater pool systems, which are popular in Bali due to their gentler feel and lower chemical requirements. Our services include salt cell cleaning, salinity testing, chlorinator maintenance, and system optimization to ensure your saltwater pool operates efficiently."
  }
];

interface FAQProps {
  className?: string;
  showTitle?: boolean;
}

export function FAQ({ className = "", showTitle = true }: FAQProps) {
  return (
    <section className={`py-16 md:py-20 ${className}`} aria-labelledby="faq-heading">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        {showTitle && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
              <HelpCircle className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">Common Questions</span>
            </div>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions About Pool Service in Bali
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our pool maintenance, repair, and installation services in Bali's tropical climate.
            </p>
          </div>
        )}

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/60 rounded-lg px-6 bg-card shadow-sm hover:border-primary/40 transition-colors"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:text-primary hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
