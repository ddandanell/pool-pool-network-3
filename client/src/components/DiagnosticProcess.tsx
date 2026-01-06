import { ClipboardCheck, Search, Wrench, FileText } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Visual & Pressure Test",
    desc: "We isolate plumbing lines and pressure test to identify pressure loss."
  },
  {
    icon: ClipboardCheck,
    title: "2. Ultrasonic Scan",
    desc: "Using hydrophones to listen for leaks in the shell or underground pipes."
  },
  {
    icon: FileText,
    title: "3. Technical Report",
    desc: "You get a PDF breakdown: leakage rate, precise location, and quote."
  },
  {
    icon: Wrench,
    title: "4. Precision Repair",
    desc: "We fix exactly what's broken. No guesswork digging or random patching."
  }
];

export function DiagnosticProcess() {
  return (
    <section className="py-20 bg-muted/30 border-y border-border">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Diagnostic Protocol</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our systematic approach eliminates guesswork. We find the root cause before proposing a solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-border z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-background border-2 border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                <step.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
