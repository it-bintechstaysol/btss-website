import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  Blocks, 
  Brain, 
  Building2, 
  ShoppingCart, 
  UtensilsCrossed, 
  Heart,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const coreServices = [
  {
    icon: CreditCard,
    title: "Payment Gateway Development",
    description: "Enterprise-grade payment processing solutions with advanced security and compliance features.",
    features: ["PCI DSS Level 1 Compliance", "Real-time Fraud Detection", "Multi-currency Support", "API-first Architecture"]
  },
  {
    icon: Blocks,
    title: "Blockchain & Cryptocurrency",
    description: "Secure blockchain implementations and cryptocurrency payment solutions for digital commerce.",
    features: ["Smart Contract Development", "DeFi Protocol Integration", "Digital Wallet Solutions", "Token Economics"]
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description: "Machine learning algorithms for intelligent risk assessment and automated decision-making.",
    features: ["ML Fraud Detection", "Risk Scoring Models", "Automated Underwriting", "Predictive Analytics"]
  }
];

const industryPlatforms = [
  {
    icon: Building2,
    title: "Fintech Platforms",
    description: "Comprehensive solutions for banking, lending, and investment platforms.",
    stat: "50+ Banks"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Scalable payment integration for marketplaces and retail platforms.",
    stat: "1M+ Transactions"
  },
  {
    icon: UtensilsCrossed,
    title: "Food Industry Tech",
    description: "Specialized solutions for restaurants and delivery platforms.",
    stat: "200+ Restaurants"
  },
  {
    icon: Heart,
    title: "Healthcare Systems",
    description: "HIPAA-compliant payment solutions for healthcare providers.",
    stat: "30+ Hospitals"
  }
];

export const Services = () => {
  return (
    <Section id="services" className="bg-secondary/20">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          Our Services
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-professional">
          Comprehensive IT solutions designed to transform your payment infrastructure 
          and accelerate digital transformation across your organization.
        </p>
      </div>

      {/* Core Services */}
      <div className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => {
            const IconComponent = service.icon;
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
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-professional mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Industry Expertise */}
      <div>
        <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Industry Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industryPlatforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center card-professional hover:shadow-professional-hover transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-2 text-card-foreground">
                  {platform.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3 text-professional">
                  {platform.description}
                </p>
                <div className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 inline-block">
                  {platform.stat}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
};