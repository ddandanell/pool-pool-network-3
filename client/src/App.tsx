import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import NotFound from "@/pages/not-found";
import { Home } from "@/pages/home";
import { About } from "@/pages/about";
import { Services } from "@/pages/services";
import { PoolMaintenance } from "@/pages/pool-maintenance";
import { PoolRepair } from "@/pages/pool-repair";
import { PoolInstallation } from "@/pages/pool-installation";
import { Contact } from "@/pages/contact";
import { Blog } from "@/pages/blog";
import { PoolCleaningBali } from "@/pages/pool-cleaning-bali";
import { GreenPoolRescueBali } from "@/pages/green-pool-rescue-bali";
import { VillaPoolServiceBali } from "@/pages/villa-pool-service-bali";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/pool-maintenance" component={PoolMaintenance} />
      <Route path="/pool-repair" component={PoolRepair} />
      <Route path="/pool-installation" component={PoolInstallation} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/pool-cleaning-bali" component={PoolCleaningBali} />
      <Route path="/green-pool-rescue-bali" component={GreenPoolRescueBali} />
      <Route path="/villa-pool-service-bali" component={VillaPoolServiceBali} />
      <Route path="/swimming-pool-maintenance-bali" component={PoolMaintenance} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SchemaMarkup />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
