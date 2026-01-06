import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  className?: string;
}

export function ServiceCard({ title, description, icon: Icon, image, className }: ServiceCardProps) {
  return (
    <Card className={cn("group overflow-hidden border-border/60 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5", className)}>
      <div className="aspect-video w-full overflow-hidden bg-muted relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary/20">
            <Icon className="w-16 h-16 text-primary/20" />
          </div>
        )}
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-2 rounded-md border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-4 h-4 text-primary" />
        </div>
      </div>
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-md bg-primary/10 text-primary">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Service Protocol</span>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
