import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import {
  Cloud,
  Code,
  Database,
  Shield,
  Server,
  Smartphone,
  Zap,
  Users,
  Globe,
  Lock,
  Cpu,
  Workflow,
} from "lucide-react";

const expertiseAreas = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    description:
      "End-to-end cloud solutions with AWS, Azure, and GCP. Containerization, microservices, and automated CI/CD pipelines for scalable enterprise applications.",
    metrics: "200+ Cloud Deployments",
    features: [
      "Multi-cloud Strategy",
      "Kubernetes Orchestration",
      "Infrastructure as Code",
      "24/7 Monitoring",
    ],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Full-stack development services creating bespoke web and mobile applications tailored to your unique business requirements and workflows.",
    metrics: "300+ Projects Delivered",
    features: [
      "Agile Development",
      "UI/UX Design",
      "Quality Assurance",
      "Maintenance & Support",
    ],
  },
  {
    icon: Database,
    title: "Data & AI Solutions",
    description:
      "Big data analytics, machine learning models, and business intelligence platforms that transform data into actionable insights and automated processes.",
    metrics: "95% Implementation Success",
    features: [
      "Predictive Analytics",
      "Machine Learning",
      "Data Warehousing",
      "Real-time Processing",
    ],
  },

  {
    icon: Server,
    title: "Enterprise IT Infrastructure",
    description:
      "Robust network architecture, system integration, and IT management solutions that ensure reliability and performance at scale.",
    metrics: "99.9% Uptime Guarantee",
    features: [
      "Network Design",
      "System Integration",
      "Disaster Recovery",
      "Performance Optimization",
    ],
  },

  {
    icon: Workflow,
    title: "System Integration",
    description:
      "Seamless integration of disparate systems and applications to create unified, efficient business processes and data flow.",
    metrics: "150+ Integrations",
    features: [
      "API Development",
      "Middleware Solutions",
      "Data Migration",
      "Third-party Integrations",
    ],
  },
  {
    icon: Cpu,
    title: "IT Consulting & Strategy",
    description:
      "Expert technology advisory services to align your IT investments with business objectives and drive digital innovation.",
    metrics: "100+ Strategy Plans",
    features: [
      "Technology Roadmaps",
      "IT Assessment",
      "Vendor Selection",
      "Digital Innovation",
    ],
  },
];

export const About = () => {
  return (
    <Section id="about">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          About Binary Tech Solutions
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          We are a full-service IT technology partner empowering businesses with
          innovative digital solutions. From cloud infrastructure and custom
          software to AI-driven platforms and cybersecurity, we deliver
          comprehensive technology services that drive growth and operational
          excellence.
        </p>
      </div>

      {/* Expertise Grid - Enhanced Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {expertiseAreas.map((area, index) => {
          const IconComponent = area.icon;
          return (
            <Card
              key={index}
              className="p-8 group hover:shadow-xl transition-all duration-500 hover:translate-y-[-8px] animate-scale-in border-2 border-transparent hover:border-primary/20 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                {/* Header with Icon and Title */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>

                {/* Metrics Badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-base font-semibold border border-accent/20">
                    {area.metrics}
                  </div>
                </div>

                {/* Features List */}
                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                    Key Capabilities
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {area.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Enhanced Company Stats */}
      <div className="bg-gradient-to-r from-secondary/40 via-background to-primary/10 rounded-3xl p-12 lg:p-16 animate-fade-in border shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-12">
          <div className="group p-6 rounded-2xl hover:bg-card/50 transition-all duration-300">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-3 flex items-center justify-center gap-3">
              <Users className="w-10 h-10" />
              500+
            </div>
            <div className="text-lg font-semibold text-foreground mb-2">
              Clients Worldwide
            </div>
            <div className="text-sm text-muted-foreground">
              Across various industries
            </div>
          </div>
          <div className="group p-6 rounded-2xl hover:bg-card/50 transition-all duration-300">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-3 flex items-center justify-center gap-3">
              <Zap className="w-10 h-10" />
              10+
            </div>
            <div className="text-lg font-semibold text-foreground mb-2">
              Years Experience
            </div>
            <div className="text-sm text-muted-foreground">
              Technology excellence
            </div>
          </div>
          <div className="group p-6 rounded-2xl hover:bg-card/50 transition-all duration-300">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-3 flex items-center justify-center gap-3">
              <Code className="w-10 h-10" />
              1000+
            </div>
            <div className="text-lg font-semibold text-foreground mb-2">
              Projects Completed
            </div>
            <div className="text-sm text-muted-foreground">
              Successful deliveries
            </div>
          </div>
          <div className="group p-6 rounded-2xl hover:bg-card/50 transition-all duration-300">
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-3 flex items-center justify-center gap-3">
              <Globe className="w-10 h-10" />
              24/7
            </div>
            <div className="text-lg font-semibold text-foreground mb-2">
              Global Support
            </div>
            <div className="text-sm text-muted-foreground">
              Always available
            </div>
          </div>
        </div>

        {/* Additional Extended Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border/50">
          <div className="text-center group p-6 rounded-2xl hover:bg-card/30 transition-all duration-300">
            <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-2xl font-bold text-foreground mb-2">50+</div>
            <div className="text-lg font-semibold text-muted-foreground mb-2">
              Technology Stacks
            </div>
            <div className="text-sm text-muted-foreground">
              Modern frameworks & tools
            </div>
          </div>
          <div className="text-center group p-6 rounded-2xl hover:bg-card/30 transition-all duration-300">
            <Workflow className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-2xl font-bold text-foreground mb-2">15+</div>
            <div className="text-lg font-semibold text-muted-foreground mb-2">
              Industries Served
            </div>
            <div className="text-sm text-muted-foreground">
              Diverse sector expertise
            </div>
          </div>
          <div className="text-center group p-6 rounded-2xl hover:bg-card/30 transition-all duration-300">
            <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-2xl font-bold text-foreground mb-2">
              99.99%
            </div>
            <div className="text-lg font-semibold text-muted-foreground mb-2">
              Security Uptime
            </div>
            <div className="text-sm text-muted-foreground">
              Protected systems
            </div>
          </div>
        </div>
      </div>

      {/* Extended Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 animate-fade-in">
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Zap className="w-6 h-6 text-primary" />
            Our Mission
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            To empower businesses with cutting-edge technology solutions that
            drive innovation, enhance efficiency, and create sustainable
            competitive advantages in the digital age.
          </p>
          <ul className="space-y-2">
            {[
              "Technology Excellence",
              "Client Success",
              "Innovation Driven",
              "Quality Focused",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-accent/5 to-transparent border-2 border-accent/10">
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Globe className="w-6 h-6 text-accent" />
            Our Vision
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            To be the leading global technology partner that transforms
            businesses through innovative digital solutions and strategic
            technology partnerships.
          </p>
          <ul className="space-y-2">
            {[
              "Global Leadership",
              "Digital Transformation",
              "Sustainable Growth",
              "Technology Innovation",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
};
