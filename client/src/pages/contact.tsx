import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Facebook, Instagram, Loader2 } from "lucide-react";
import heroImage from "@assets/generated_images/underwater_pool_hero_with_tech_overlay.png";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Valid phone number required"),
  service: z.string().min(1, "Please select a service"),
  location: z.string().min(2, "Please provide your location in Bali"),
  message: z.string().min(10, "Please provide more details about your needs"),
});

const contactInfo = [
  {
    icon: MapPin,
    title: "Main Office",
    content: "Jl. Raya Ubud No. 45\nGianyar, Bali 80571\nIndonesia",
    link: null
  },
  {
    icon: Phone,
    title: "WhatsApp",
    content: "+62 822-3756-5997",
    link: "https://wa.me/6282237565997"
  },
  {
    icon: Mail,
    title: "Email",
    content: "support@poolrepairlab.com\ninfo@balipoolpros.com",
    link: "mailto:support@poolrepairlab.com"
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Sat: 8:00 AM - 6:00 PM\nSun: 9:00 AM - 3:00 PM\n24/7 Emergency Available",
    link: null
  }
];

const areas = [
  "Ubud", "Seminyak", "Canggu", "Sanur", "Nusa Dua",
  "Jimbaran", "Uluwatu", "Kuta", "Legian", "Denpasar",
  "Gianyar", "Tabanan", "Karangasem", "Buleleng"
];

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      location: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Our team will contact you within 2 hours during business hours.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <SEOHead
        title="Contact Us | Pool Service Bali | Bali Pool Pros"
        description="Contact Bali Pool Pros for pool maintenance, repair, and installation services in Bali. Get a free quote today. WhatsApp +62 822-3756-5997 or email support@poolrepairlab.com."
        keywords="contact pool service Bali, pool company Bali phone, pool maintenance quote Bali, Bali pool experts contact, pool repair booking Bali"
      />
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Contact Bali Pool Pros for professional pool services in Bali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
          </div>
          <div className="container relative z-10 h-full flex items-center px-4 md:px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Get In Touch</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Ready to start your pool project or need service? Reach out to Bali's trusted pool experts. We respond to all inquiries within 2 hours during business hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 border-b border-border">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-sm text-muted-foreground whitespace-pre-line hover:text-primary transition-colors">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground whitespace-pre-line">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you promptly. For urgent matters, please call our phone number directly.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone / WhatsApp *</FormLabel>
                          <FormControl>
                            <Input placeholder="+62..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Needed *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="maintenance">Pool Maintenance</SelectItem>
                              <SelectItem value="repair">Pool Repair</SelectItem>
                              <SelectItem value="leak-detection">Leak Detection</SelectItem>
                              <SelectItem value="installation">Pool Installation</SelectItem>
                              <SelectItem value="cleaning">Pool Cleaning</SelectItem>
                              <SelectItem value="equipment">Equipment Service</SelectItem>
                              <SelectItem value="consultation">Free Consultation</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location in Bali *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Seminyak, near Potato Head" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please describe your pool needs, any issues you're experiencing, or questions you have..."
                            className="resize-none min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full h-12" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="p-8 bg-foreground text-background">
                <h3 className="text-2xl font-bold mb-6">Why Contact Us?</h3>
                <ul className="space-y-4">
                  {[
                    "Free quotes for all pool services",
                    "Same-day response during business hours",
                    "No obligation consultations",
                    "Expert advice on pool care in Bali",
                    "Transparent pricing with no hidden fees",
                    "24/7 emergency service available"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <div>
                <h3 className="text-xl font-bold mb-4">Areas We Serve in Bali</h3>
                <div className="flex flex-wrap gap-2">
                  {areas.map((area) => (
                    <span key={area} className="px-3 py-1 bg-muted rounded-full text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com/balipoolpros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="https://instagram.com/balipoolpros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="https://wa.me/6282237565997"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="Chat on WhatsApp"
                  >
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h3 className="text-xl font-bold mb-4">Find Us</h3>
                <div className="w-full h-64 bg-muted rounded-xl flex items-center justify-center border">
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="font-medium">Jl. Raya Ubud No. 45</p>
                    <p className="text-sm text-muted-foreground">Gianyar, Bali 80571, Indonesia</p>
                    <a
                      href="https://maps.google.com/?q=Jl.+Raya+Ubud+No.+45,+Gianyar,+Bali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary text-sm mt-4 hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Your Trusted Pool Service Partner in Bali
              </h2>

              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p>
                  At Bali Pool Pros, we pride ourselves on providing exceptional customer service alongside our technical expertise. When you contact us, you're not just reaching a pool company—you're connecting with Bali's most dedicated team of pool professionals who genuinely care about your pool and your satisfaction.
                </p>

                <h3 className="text-2xl font-bold text-foreground">What to Expect When You Contact Us</h3>
                <p>
                  When you reach out to Bali Pool Pros, our friendly customer service team will gather the essential information about your pool needs. Whether you're requesting a quote for routine maintenance, reporting an urgent repair issue, or exploring options for a new pool installation, we'll make sure your inquiry reaches the right specialist on our team.
                </p>
                <p>
                  For non-emergency inquiries received during business hours (Monday-Saturday, 8 AM - 6 PM; Sunday 9 AM - 3 PM), we aim to respond within 2 hours. For after-hours emergencies, our 24/7 emergency line connects you directly with an on-call technician who can dispatch help to your location.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8">Free Consultations and Quotes</h3>
                <p>
                  We offer free consultations for all our pool services. Not sure what your pool needs? Our experts will assess your situation and provide honest recommendations—without any pressure or obligation. We believe in earning your business through transparency and expertise, not high-pressure sales tactics.
                </p>
                <p>
                  All quotes we provide are detailed and comprehensive. You'll see exactly what services are included, what materials will be used, and what the final cost will be. No hidden fees, no surprises. Just straightforward pricing you can trust.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8">Serving All of Bali</h3>
                <p>
                  From the cultural heart of Ubud to the bustling beaches of Seminyak and Canggu, from the luxury resorts of Nusa Dua to the clifftop villas of Uluwatu, we provide pool services across the entire island of Bali. Our team of 50+ technicians is strategically located to ensure prompt service no matter where you are.
                </p>
                <p>
                  We understand the unique needs of different areas in Bali. Coastal properties face different challenges than highland locations. Rental villas have different maintenance requirements than private residences. We tailor our services to your specific situation and needs.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8">Languages We Speak</h3>
                <p>
                  Our customer service team is fluent in English, Indonesian, and can also assist in Japanese. We serve Bali's diverse international community and ensure clear communication throughout your experience with us.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
