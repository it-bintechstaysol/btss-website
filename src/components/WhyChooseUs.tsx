import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import {
  Shield,
  Scaling,
  FileCheck,
  Lightbulb,
  Clock,
  Award,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security protocols with comprehensive compliance frameworks and zero-trust architecture.",
    features: ["PCI DSS Level 1", "SOC 2 Type II", "ISO 27001 Certified"],
  },
  {
    icon: Scaling,
    title: "Proven Scalability",
    description:
      "Infrastructure designed for enterprise growth, handling millions of transactions with automated scaling.",
    features: ["Auto-scaling", "Global CDN", "99.99% Uptime SLA"],
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description:
      "Full compliance across multiple jurisdictions with dedicated compliance monitoring and reporting.",
    features: ["GDPR Ready", "PCI Compliant", "Local Regulations"],
  },
  {
    icon: Lightbulb,
    title: "Innovation Leadership",
    description:
      "Cutting-edge technology solutions leveraging latest advancements in AI, blockchain, and fintech.",
    features: ["AI/ML Integration", "Blockchain Ready", "API-first Design"],
  },
  {
    icon: Clock,
    title: "24/7 Expert Support",
    description:
      "Round-the-clock enterprise support with dedicated account management and proactive monitoring.",
    features: ["Dedicated Support", "Proactive Monitoring", "SLA Guarantees"],
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description:
      "Consistent delivery of successful implementations with measurable business outcomes and ROI.",
    features: ["100+ Projects", "99% Success Rate", "Industry Recognition"],
  },
];

export const WhyChooseUs = () => {
  return (
    <Section id="why-choose-us" className="bg-secondary/20">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          Why Choose Binary Tech Solutions
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-professional">
          We combine deep technical expertise with business acumen to deliver
          payment solutions that drive measurable results and competitive
          advantage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {reasons.map((reason, index) => {
          const IconComponent = reason.icon;
          return (
            <Card
              key={index}
              className="p-8 card-professional hover:shadow-professional-hover transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-professional mb-6">
                  {reason.description}
                </p>
              </div>

              <div className="space-y-2">
                {reason.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center justify-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Trust Indicators */}
      <div className="bg-card border border-border rounded-xl p-8 lg:p-12 shadow-professional animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
              ₱100B+
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              Transaction Volume Processed
            </div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
              99.99%
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              System Uptime Achieved
            </div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
              24/7
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              Enterprise Support Available
            </div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
              100+
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              Successful Implementations
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
