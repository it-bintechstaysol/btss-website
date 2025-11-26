import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  TrendingUp,
  Users,
  Shield,
  Building,
  Star,
} from "lucide-react";

const projectHighlights = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "Transaction Volume Increase",
    description: "Year-over-year growth",
  },
  {
    icon: Users,
    value: "2M+",
    label: "Active Users",
    description: "Platform onboarding",
  },
  {
    icon: Shield,
    value: "Zero",
    label: "Security Incidents",
    description: "Perfect security record",
  },
];

export const CaseStudy = () => {
  return (
    <Section id="case-study">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          Success Stories
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-professional">
          Proven track record of delivering transformative payment solutions
          that drive business growth and operational excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        {/* Case Study Content */}
        <div className="animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <Badge variant="secondary" className="font-medium">
              Manila, Philippines
            </Badge>
          </div>

          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Leading Payment Gateway Partnership
          </h3>

          <p className="text-lg text-muted-foreground mb-8 text-professional">
            We served as the exclusive technology partner for a major
            Manila-based payment gateway, transforming their infrastructure and
            expanding their market presence across Southeast Asia through
            innovative solutions.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Building className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Enterprise Architecture
                </h4>
                <p className="text-muted-foreground text-professional">
                  Designed and implemented scalable microservices architecture
                  handling millions of daily transactions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Security Implementation
                </h4>
                <p className="text-muted-foreground text-professional">
                  Deployed advanced fraud detection and compliance systems
                  meeting international banking standards.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Star className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Performance Optimization
                </h4>
                <p className="text-muted-foreground text-professional">
                  Achieved sub-second transaction processing with 99.99% uptime
                  guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 gap-6">
          {projectHighlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card
                key={index}
                className="p-6 card-professional hover:shadow-professional-hover transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {highlight.value}
                    </div>
                    <div className="font-semibold text-card-foreground mb-1">
                      {highlight.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {highlight.description}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Food Industry Platform */}
      <Card className="p-8 lg:p-12 card-professional animate-fade-in">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4 text-card-foreground">
            Food Industry E-commerce Platform
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-professional">
            Developed a comprehensive e-commerce platform for the food industry,
            integrating payment processing, inventory management, and real-time
            delivery tracking for improved operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="font-medium text-foreground mb-1">
              Order Accuracy
            </div>
            <div className="text-sm text-muted-foreground">
              Real-time processing
            </div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-accent mb-2">3.2x</div>
            <div className="font-medium text-foreground mb-1">
              Revenue Growth
            </div>
            <div className="text-sm text-muted-foreground">
              First year increase
            </div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="font-medium text-foreground mb-1">
              System Availability
            </div>
            <div className="text-sm text-muted-foreground">
              Guaranteed uptime
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
};
