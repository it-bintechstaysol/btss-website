import { Button } from "../components/ui/button";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Cloud,
  Code,
  Database,
  Server,
} from "lucide-react";
import hero from "../assets/hero.jpg";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-primary/5 pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,hsl(var(--border))_1px,transparent_1px),linear-gradient(-45deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left animate-slide-up">
              {/* Trust Badge */}
              {/* <div className="inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border rounded-2xl px-4 py-3 mb-8 shadow-lg">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-muted-foreground">
                  Trusted by 500+ Enterprises Worldwide
                </span>
                <div className="flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded">
                  <Zap className="w-3 h-3 text-green-500" />
                  <span className="text-xs font-medium text-green-600">
                    Enterprise Grade
                  </span>
                </div>
              </div> */}

              {/* Main Headline */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-foreground leading-tight">
                Comprehensive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  IT Solutions
                </span>{" "}
                for Digital Transformation
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We deliver end-to-end technology solutions including cloud
                infrastructure, custom software development, AI integration, and
                enterprise systems. Partner with us to transform your business
                with cutting-edge technology.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  variant="professional"
                  size="lg"
                  className="text-base px-8 py-3 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Start Your Project With Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 py-3 h-auto border-2 hover:border-primary/50 transition-all duration-300"
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore Our Services
                </Button>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 flex items-center">
                    100+
                    <Users className="w-5 h-5 text-blue-500 ml-1" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Clients Served
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 flex items-center">
                    100%
                    <Cloud className="w-5 h-5 text-green-500 ml-1" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Uptime Guarantee
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-foreground mb-1 flex items-center">
                    24/7
                    <Shield className="w-5 h-5 text-purple-500 ml-1" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Expert Support
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Technology Stack Visual */}
            <div className="relative animate-scale-in">
              <div className="flex items-center  animate-fade-in">
                <img
                  src={hero}
                  alt="Binary Tech Solutions"
                  className="h-2xl w-auto"
                />
              </div>
              {/* <div className="relative bg-gradient-to-br from-card to-card/50 rounded-3xl p-8 border border-border shadow-2xl">
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-background rounded-2xl p-6 border border-border text-center hover:scale-105 transition-transform duration-300">
                    <Cloud className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                    <div className="font-semibold text-foreground">
                      Cloud Solutions
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      AWS, Azure, GCP
                    </div>
                  </div>
                  <div className="bg-background rounded-2xl p-6 border border-border text-center hover:scale-105 transition-transform duration-300">
                    <Code className="w-8 h-8 text-green-500 mx-auto mb-3" />
                    <div className="font-semibold text-foreground">
                      Custom Development
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Web & Mobile
                    </div>
                  </div>
                  <div className="bg-background rounded-2xl p-6 border border-border text-center hover:scale-105 transition-transform duration-300">
                    <Database className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                    <div className="font-semibold text-foreground">
                      Data & AI
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      ML & Analytics
                    </div>
                  </div>
                  <div className="bg-background rounded-2xl p-6 border border-border text-center hover:scale-105 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-red-500 mx-auto mb-3" />
                    <div className="font-semibold text-foreground">
                      Cyber Security
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Protection
                    </div>
                  </div>
                  <div className="bg-background rounded-2xl p-6 border border-border text-center hover:scale-105 transition-transform duration-300">
                    <Server className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                    <div className="font-semibold text-foreground">
                      Infrastructure
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Enterprise
                    </div>
                  </div>
                  <div className="bg-background rounded-2xl p-6 border border-border text-center hover:scale-105 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                    <div className="font-semibold text-foreground">
                      Integration
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      API & Systems
                    </div>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  Multi-Cloud
                </div>
                <div className="absolute -bottom-3 -left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  Scalable
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
