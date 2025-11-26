import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary-light">
              Binary Tech Solutions
            </h3>
            <p className="text-background/80 mb-6 text-professional leading-relaxed max-w-md">
              Leading IT solutions company specializing in enterprise-grade
              payment gateway software, blockchain technology, and AI-powered
              solutions for modern businesses.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-smooth"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Services</h4>
            <ul className="space-y-3 text-background/80 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-background transition-smooth"
                >
                  Payment Gateways
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-background transition-smooth"
                >
                  Blockchain Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-background transition-smooth"
                >
                  AI-Powered Systems
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-background transition-smooth"
                >
                  Enterprise Integration
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Company</h4>
            <ul className="space-y-3 text-background/80 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-background transition-smooth"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#case-study"
                  className="hover:text-background transition-smooth"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-background transition-smooth"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-smooth">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 bg-background/5 rounded-lg">
          <div className="flex items-center gap-3 text-background/80">
            <Mail className="w-4 h-4 text-primary-light" />
            <span className="text-sm">partnerships@binarytechstaysol.com</span>
          </div>
          <div className="flex items-center gap-3 text-background/80">
            <Phone className="w-4 h-4 text-primary-light" />
            <span className="text-sm">+63 (2) 8888-0000</span>
          </div>
          <div className="flex items-center gap-3 text-background/80">
            <MapPin className="w-4 h-4 text-primary-light" />
            <span className="text-sm">Manila, Philippines</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-background/80">
          <p className="text-sm">
            © 2024 Binary Tech Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="hover:text-background transition-smooth">
              Security
            </a>
            <a href="#" className="hover:text-background transition-smooth">
              Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
