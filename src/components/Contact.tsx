import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight, Clock, Calendar } from "lucide-react";

export const Contact = () => {
  return (
    <Section id="contact">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-professional">
          Let's discuss how our expertise can revolutionize your payment
          infrastructure and accelerate your digital transformation journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="p-8 card-professional animate-scale-in">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">
              Start Your Project
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">
                    First Name *
                  </label>
                  <Input placeholder="John" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">
                    Last Name *
                  </label>
                  <Input placeholder="Doe" className="h-12" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">
                    Business Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">
                    Phone Number
                  </label>
                  <Input placeholder="+63 9XX XXX XXXX" className="h-12" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-card-foreground">
                  Company Name *
                </label>
                <Input placeholder="Your Company" className="h-12" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-card-foreground">
                  Project Requirements *
                </label>
                <Textarea
                  placeholder="Please describe your payment gateway requirements, expected transaction volume, timeline, and any specific compliance needs..."
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button variant="professional" size="lg" className="w-full">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </form>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 animate-fade-in">
          <Card className="p-6 card-professional">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">
                  Business Inquiries
                </h4>

                <p className="text-muted-foreground text-sm">
                  contect@binarytechstaysol.com
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 card-professional">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">
                  Phone Support
                </h4>
                <p className="text-muted-foreground text-sm">
                  +63 (2) 8888-0000
                </p>
                <p className="text-muted-foreground text-sm">
                  +1 (555) 123-TECH
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 card-professional">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">
                  Corporate Office
                </h4>
                <p className="text-muted-foreground text-sm">
                  One Ayala Tower
                  <br />
                  Makati Central Business District
                  <br />
                  Manila 1226, Philippines
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 card-professional">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">
                  Business Hours
                </h4>
                <p className="text-muted-foreground text-sm">
                  Mon - Fri: 9:00 AM - 6:00 PM (PHT)
                </p>
                <p className="text-muted-foreground text-sm">
                  24/7 Technical Support
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center animate-fade-in">
        <Card className="p-8 lg:p-12 bg-primary text-primary-foreground border-0 shadow-professional">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-6 h-6" />
            <h3 className="text-2xl font-bold">Book a Free Consultation</h3>
          </div>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Get expert advice on your payment infrastructure needs. Our team
            will provide a comprehensive assessment and tailored
            recommendations.
          </p>
          <Button variant="secondary" size="lg" className="font-semibold">
            Schedule Now - It's Free
          </Button>
        </Card>
      </div>
    </Section>
  );
};
